# Pleroma: A lightweight social networking server
# Copyright © 2017-2022 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Repo.Migrations.CreatePasswordResetTokens do
  use Ecto.Migration

  def change do
    create_if_not_exists table(:password_reset_tokens) do
      add(:token, :string)
      add(:user_id, references(:users))
      add(:used, :boolean, default: false)

      timestamps()
    end
  end
end
