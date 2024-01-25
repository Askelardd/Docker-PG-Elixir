use Mix.Config

config :importer, Importer.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "sd",
  password: "sd",
  database: "sd",
  hostname: "localhost",
  pool_size: 10,
  show_sensitive_data_on_connection_error: true
