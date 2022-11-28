import Config

# For development, we disable any cache and enable
# debugging and code reloading.
#
# The watchers configuration can be used to run external
# watchers to your application. For example, we use it
# with brunch.io to recompile .js and .css sources.
config :pleroma, Pleroma.Web.Endpoint,
  http: [
    port: 4000,
    protocol_options: [max_request_line_length: 8192, max_header_value_length: 8192]
  ],
  protocol: "http",
  debug_errors: true,
  code_reloader: true,
  check_origin: false,
  watchers: [],
  secure_cookie_flag: false

config :pleroma, Pleroma.Emails.Mailer, adapter: Swoosh.Adapters.Local

# ## SSL Support
#
# In order to use HTTPS in development, a self-signed
# certificate can be generated by running the following
# command from your terminal:
#
#     openssl req -new -newkey rsa:4096 -days 365 -nodes -x509 -subj "/C=US/ST=Denial/L=Springfield/O=Dis/CN=www.example.com" -keyout priv/server.key -out priv/server.pem
#
# The `http:` config above can be replaced with:
#
#     https: [port: 4000, keyfile: "priv/server.key", certfile: "priv/server.pem"],
#
# If desired, both `http:` and `https:` keys can be
# configured to run both http and https servers on
# different ports.

# Do not include metadata nor timestamps in development logs
config :logger, :console, format: "[$level] $message\n"

# Set a higher stacktrace during development. Avoid configuring such
# in production as building large stacktraces may be expensive.
config :phoenix, :stacktrace_depth, 20

# Configure your database
config :pleroma, Pleroma.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "pleroma_dev",
  hostname: "localhost",
  pool_size: 10

config :pleroma, Pleroma.Web.ApiSpec.CastAndValidate, strict: true

# Reduce recompilation time
# https://dashbit.co/blog/speeding-up-re-compilation-of-elixir-projects
config :phoenix, :plug_init_mode, :runtime

if File.exists?("./config/dev.secret.exs") do
  import_config "dev.secret.exs"
else
  IO.puts(
    :stderr,
    "!!! RUNNING IN LOCALHOST DEV MODE! !!!\nFEDERATION WON'T WORK UNTIL YOU CONFIGURE A dev.secret.exs"
  )
end

if File.exists?("./config/dev.exported_from_db.secret.exs"),
  do: import_config("dev.exported_from_db.secret.exs")
