defmodule Importer.Application do
  use Application

  def start(_type, _args) do
    HelloWorld.say()
    XML.list()
    IO.puts("Aplication Run")

    # Inicia uma árvore de supervisão mínima
    children = [
      Importer.Repo,  # Certifique-se de que o Repo está correto
    ]

    opts = [strategy: :one_for_one, name: Importer.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
