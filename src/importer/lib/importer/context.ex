
defmodule Importer.Context do
  alias Importer.{Schema, Repo}

  def insert_data(attrs) do
    %Schema{}
    |> Schema.changeset(attrs)
    |> Repo.insert()
  end
end
