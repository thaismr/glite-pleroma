# Pleroma: A lightweight social networking server
# Copyright © 2017-2022 Pleroma Authors <https://pleroma.social/>
# SPDX-License-Identifier: AGPL-3.0-only

defmodule Pleroma.Web.MastodonAPI.MediaView do
  use Pleroma.Web, :view
  alias Pleroma.Web.MastodonAPI

  def render(view, opts), do: MastodonAPI.StatusView.render(view, opts)
end
