# Pleroma: A lightweight social networking server
# Copyright © 2017-2022 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Repo.Migrations.SetNotNullForApps do
  use Ecto.Migration

  # modify/3 function will require index recreation, so using execute/1 instead

  def up do
    execute("ALTER TABLE apps
    ALTER COLUMN client_name SET NOT NULL,
    ALTER COLUMN redirect_uris SET NOT NULL")
  end

  def down do
    execute("ALTER TABLE apps
    ALTER COLUMN client_name DROP NOT NULL,
    ALTER COLUMN redirect_uris DROP NOT NULL")
  end
end
