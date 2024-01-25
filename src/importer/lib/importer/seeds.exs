alias Importer.{Repo, SeuModelo}

params = %{
  reportingdistrictcode: row[:reportingdistrictcode],
  reportingdistrictname: row[:reportingdistrictname],
  category: row[:category],
  studentgroup: row[:studentgroup],
  studentcount_current: row[:studentcount_current],
  attrate_ytd: row[:attrate_ytd],
  studentcount_202021: row[:studentcount_202021],
  attrate_201920: row[:attrate_201920],
  reportingperiod: row[:reportingperiod],
  date_update: row[:date_update],
}

Repo.insert!(Importer.changeset(%Importer{}, params))
