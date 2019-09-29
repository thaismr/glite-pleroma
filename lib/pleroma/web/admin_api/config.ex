# Pleroma: A lightweight social networking server
# Copyright © 2017-2019 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Web.AdminAPI.Config do
  use Ecto.Schema
  import Ecto.Changeset
  import Pleroma.Web.Gettext
  alias __MODULE__
  alias Pleroma.Repo

  @type t :: %__MODULE__{}

  schema "config" do
    field(:key, :string)
    field(:group, :string)
    field(:value, :binary)

    timestamps()
  end

  @spec get_by_params(map()) :: Config.t() | nil
  def get_by_params(params), do: Repo.get_by(Config, params)

  @spec changeset(Config.t(), map()) :: Changeset.t()
  def changeset(config, params \\ %{}) do
    params = Map.put(params, :value, transform(params[:value]))

    config
    |> cast(params, [:key, :group, :value])
    |> validate_required([:key, :group, :value])
    |> unique_constraint(:key, name: :config_group_key_index)
  end

  @spec create(map()) :: {:ok, Config.t()} | {:error, Changeset.t()}
  def create(params) do
    %Config{}
    |> changeset(params)
    |> Repo.insert()
  end

  @spec update(Config.t(), map()) :: {:ok, Config} | {:error, Changeset.t()}
  def update(%Config{} = config, %{value: value}) do
    config
    |> changeset(%{value: value})
    |> Repo.update()
  end

  @spec update_or_create(map()) :: {:ok, Config.t()} | {:error, Changeset.t()}
  def update_or_create(params) do
    search_opts = Map.take(params, [:group, :key])

    with %Config{} = config <- Config.get_by_params(search_opts) do
      Config.update(config, params)
    else
      nil -> Config.create(params)
    end
  end

  @spec delete(map()) :: {:ok, Config.t()} | {:error, Changeset.t()} | {:ok, nil}
  def delete(params) do
    search_opts = Map.delete(params, :subkeys)

    with %Config{} = config <- Config.get_by_params(search_opts),
         {config, sub_keys} when is_list(sub_keys) <- {config, params[:subkeys]},
         old_value <- :erlang.binary_to_term(config.value),
         keys <- Enum.map(sub_keys, &do_transform_string(&1)),
         new_value <- Keyword.drop(old_value, keys) do
      Config.update(config, %{value: new_value})
    else
      {config, nil} ->
        Repo.delete(config)
        {:ok, nil}

      nil ->
        err =
          dgettext("errors", "Config with params %{params} not found", params: inspect(params))

        {:error, err}
    end
  end

  @spec from_binary(binary()) :: term()
  def from_binary(binary), do: :erlang.binary_to_term(binary)

  @spec from_binary_with_convert(binary()) :: any()
  def from_binary_with_convert(binary) do
    binary
    |> from_binary()
    |> do_convert()
  end

  @spec from_string(String.t()) :: atom() | no_return()
  def from_string(":" <> entity), do: String.to_existing_atom(entity)

  def from_string(entity) when is_binary(entity) do
    if is_module_name?(entity) do
      String.to_existing_atom("Elixir.#{entity}")
    else
      entity
    end
  end

  defp do_convert(entity) when is_list(entity) do
    for v <- entity, into: [], do: do_convert(v)
  end

  defp do_convert(%Regex{} = entity), do: inspect(entity)

  defp do_convert(entity) when is_map(entity) do
    for {k, v} <- entity, into: %{}, do: {do_convert(k), do_convert(v)}
  end

  defp do_convert({:dispatch, [entity]}), do: %{"tuple" => [":dispatch", [inspect(entity)]]}
  # TODO: will become useless after removing hackney
  defp do_convert({:partial_chain, entity}), do: %{"tuple" => [":partial_chain", inspect(entity)]}

  defp do_convert(entity) when is_tuple(entity),
    do: %{"tuple" => do_convert(Tuple.to_list(entity))}

  defp do_convert(entity) when is_boolean(entity) or is_number(entity) or is_nil(entity),
    do: entity

  defp do_convert(entity) when is_atom(entity), do: inspect(entity)

  defp do_convert(entity) when is_binary(entity), do: entity

  @spec transform(any()) :: binary() | no_return()
  def transform(entity) when is_binary(entity) or is_map(entity) or is_list(entity) do
    entity
    |> do_transform()
    |> :erlang.term_to_binary()
  end

  def transform(entity), do: :erlang.term_to_binary(entity)

  defp do_transform(%Regex{} = entity), do: entity

  defp do_transform(%{"tuple" => [":dispatch", [entity]]}) do
    {dispatch_settings, []} = do_eval(entity)
    {:dispatch, [dispatch_settings]}
  end

  # TODO: will become useless after removing hackney
  defp do_transform(%{"tuple" => [":partial_chain", entity]}) do
    {partial_chain, []} = do_eval(entity)
    {:partial_chain, partial_chain}
  end

  defp do_transform(%{"tuple" => entity}) do
    Enum.reduce(entity, {}, fn val, acc -> Tuple.append(acc, do_transform(val)) end)
  end

  defp do_transform(entity) when is_map(entity) do
    for {k, v} <- entity, into: %{}, do: {do_transform(k), do_transform(v)}
  end

  defp do_transform(entity) when is_list(entity) do
    for v <- entity, into: [], do: do_transform(v)
  end

  defp do_transform(entity) when is_binary(entity) do
    entity
    |> String.trim()
    |> do_transform_string()
  end

  defp do_transform(entity), do: entity

  @delimiters ["/", "|", "\"", "'", {"(", ")"}, {"[", "]"}, {"{", "}"}, {"<", ">"}]

  defp find_valid_delimiter([], _string, _),
    do: raise(ArgumentError, message: "valid delimiter for Regex expression not found")

  defp find_valid_delimiter([{leading, closing} = delimiter | others], pattern, regex_delimiter)
       when is_tuple(delimiter) do
    if String.contains?(pattern, closing) do
      find_valid_delimiter(others, pattern, regex_delimiter)
    else
      {:ok, {leading, closing}}
    end
  end

  defp find_valid_delimiter([delimiter | others], pattern, regex_delimiter) do
    if String.contains?(pattern, delimiter) do
      find_valid_delimiter(others, pattern, regex_delimiter)
    else
      {:ok, {delimiter, delimiter}}
    end
  end

  @regex_parts ~r/^~r(?'delimiter'[\/|"'([{<]{1})(?'pattern'.+)[\/|"')\]}>]{1}(?'modifier'[uismxfU]*)/u

  defp do_transform_string("~r" <> _pattern = regex) do
    with %{"modifier" => modifier, "pattern" => pattern, "delimiter" => regex_delimiter} <-
           Regex.named_captures(@regex_parts, regex),
         {:ok, {leading, closing}} <- find_valid_delimiter(@delimiters, pattern, regex_delimiter),
         {result, _} <- Code.eval_string("~r#{leading}#{pattern}#{closing}#{modifier}") do
      result
    end
  end

  defp do_transform_string(":" <> atom), do: String.to_atom(atom)

  defp do_transform_string(value) do
    if is_module_name?(value) do
      String.to_existing_atom("Elixir." <> value)
    else
      value
    end
  end

  @spec is_module_name?(String.t()) :: boolean()
  def is_module_name?(string) do
    Regex.match?(~r/^(Pleroma|Phoenix|Tesla)\./, string) or string in ["Oban", "Ueberauth"]
  end

  defp do_eval(entity) do
    cleaned_string = String.replace(entity, ~r/[^\w|^{:,[|^,|^[|^\]^}|^\/|^\.|^"]^\s/, "")
    Code.eval_string(cleaned_string)
  end
end
