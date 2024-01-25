defmodule HelloWorld do
  def say do
    IO.puts("Olá, Mundo!!")
  end
end

defmodule XML do
  import SweetXml

  def list do
    IO.puts("Listando todos os arquivos XML disponíveis!")
    case File.ls("/data") do
      {:ok, files} ->
        files
        |> Enum.filter(&String.ends_with?(&1, ".xml"))
        |> Enum.each(&process_file/1)
      {:error, reason} ->
        IO.puts("Erro ao acessar data: #{reason}")
    end
  end


  defp process_file(file_name) do
    IO.puts("Processando arquivo: #{file_name}")
    file_path = Path.join("/data", file_name)

    file_path
    |> File.read!()
    |> parse_xml()
  end

  defmodule Importer do
    use Application

    alias Importer.Repo

    def start(_type, _args) do
      import Supervisor.Spec, warn: false

      children = [
        Repo
      ]

      opts = [strategy: :one_for_one, name: Importer.Supervisor]
      Supervisor.start_link(children, opts)
    end
  end

  defp parse_xml(xml_content) do
    #IO.puts("Conteúdo XML do arquivo: \n#{xml_content}")
    xml_content
    |> xpath(
      ~x"/response/row/row", reportingdistrictcode: ~x"reportingdistrictcode/text()",
      reportingdistrictname: ~x"reportingdistrictname/text()",
      category: ~x"category/text()",
      studentgroup: ~x"studentgroup/text()",
      studentcount_current: ~x"studentcount_current/text()",
      attrate_ytd: ~x"attrate_ytd/text()",
      studentcount_202021: ~x"studentcount_202021/text()",
      attrate_202021: ~x"attrate_202021/text()",
      studentcount_201920: ~x"studentcount_201920/text()",
      attrate_201920: ~x"attrate_201920/text()",
      reportingperiod: ~x"reportingperiod/text()",
      date_update: ~x"date_update/text()"
    )
    |> Enum.each(&IO.inspect/1)
  end

  defp insert_data(row) do
    IO.puts("Codigo Foi corrido insert data")

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

    IO.puts("Inserting data into the database: #{inspect(params)}")
    Context.insert_data(params)
  end


  defmodule Importer do
    IO.puts("Codigo Foi corrido Importer")
    import Ecto.Query


    def inserir_dados do
      alias Importer.{Schema, Repo}

      params = %{
        reportingdistrictcode: "123",
        reportingdistrictname: "Sample District",
        category: "catchorro",
        studentgroup: "mestrado",
        studentcount_current: "2",
        attrate_ytd: "4",
        studentcount_202021: "2",
        attrate_202021: "17",
        studentcount_201920: "12",
        attrate_201920: "8",
        reportingperiod: "nunca ",
        date_update: "date_update"
      }

      # Importer.Schema.changeset(params)
      IO.puts("Tentativa 1")

      # Insere os dados diretamente usando Repo.insert/1
      Repo.insert(Schema, params)

      IO.puts "Dados inseridos com sucesso!"
    end
  end
end
