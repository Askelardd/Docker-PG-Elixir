defmodule MyApp.samples do
  use Ecto.Schema

  schema "samples" do
    field :reportingdistrictcode, :string
    field :reportingdistrictname, :string
    field :category, :string
    field :studentgroup, :string
    field :studentcount_current, :integer
    field :attrate_ytd, :float
    field :studentcount_202021, :integer
    field :attrate_202021, :float
    field :studentcount_201920, :integer
    field :attrate_201920, :float
    field :reportingperiod, :string
    field :date_update, :string
    field :_id, :string

    timestamps()
  end
end
