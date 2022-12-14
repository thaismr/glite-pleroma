# Pleroma: A lightweight social networking server
# Copyright © 2017-2022 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Repo.Migrations.CreateSafeJsonbSet do
  use Ecto.Migration

  def change do
    execute("""
    create or replace function safe_jsonb_set(target jsonb, path text[], new_value jsonb, create_missing boolean default true) returns jsonb as $$
    declare
      result jsonb;
    begin
      result := jsonb_set(target, path, coalesce(new_value, 'null'::jsonb), create_missing);
      if result is NULL then
        raise 'jsonb_set tried to wipe the object, please report this incident to Pleroma bug tracker. https://git.pleroma.social/pleroma/pleroma/issues/new';
        return target;
      else
        return result;
      end if;
    end;
    $$ language plpgsql;
    """)
  end
end
