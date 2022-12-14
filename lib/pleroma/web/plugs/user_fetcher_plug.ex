# Pleroma: A lightweight social networking server
# Copyright © 2017-2022 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Web.Plugs.UserFetcherPlug do
  @moduledoc """
  Assigns `:auth_user` basing on `:auth_credentials`.

  NOTE: no checks are performed at this step, auth_credentials/username could be easily faked.
  """

  alias Pleroma.User
  import Plug.Conn

  def init(options) do
    options
  end

  def call(conn, _options) do
    with %{auth_credentials: %{username: username}} <- conn.assigns,
         %User{} = user <- User.get_by_nickname_or_email(username) do
      assign(conn, :auth_user, user)
    else
      _ -> conn
    end
  end
end
