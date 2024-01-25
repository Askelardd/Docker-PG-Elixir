defmodule Importer.Schema do
  use Ecto.Schema
  import Ecto.Changeset

  @fields [:reportingdistrictcode, :reportingdistrictname, :category, :studentgroup, :studentcount_current,
  :attrate_ytd, :studentcount_202021, :attrate_201920, :reportingperiod, :date_update]

  IO.puts("Samples Run")
  schema "samples" do
    field :reportingdistrictcode, :string
    field :reportingdistrictname, :string
    field :category, :string
    field :studentgroup, :string
    field :studentcount_current, :string
    field :attrate_ytd, :string
    field :studentcount_202021, :string
    field :attrate_202021, :string
    field :studentcount_201920, :string
    field :attrate_201920, :string
    field :reportingperiod, :string
    field :date_update, :string

    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, @fields)
    |> validate_required(@fields)
  end

end
