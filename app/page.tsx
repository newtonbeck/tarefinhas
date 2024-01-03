export default function Home() {
  return (
    <main className="m-3">
      <form className="flex flex-col gap-2.5">
        <label htmlFor="task">
          Digite abaixo a tarefa que você quer quebrar em tarefas menores:
        </label>
        <textarea
          className="border-2"
          id="task"
          cols={10}
          rows={5}
          placeholder="Exemplo: preparar a mala da minha viagem de 3 dias para Praga"
        />
        <button className="bg-zinc-500">Quebrar em tarefas</button>
      </form>

      <section className="mt-3">
        <ul>
          <li>
            <label className="leading-10">
              <input type="checkbox" /> Limpar o primeiro quarto
            </label>
          </li>
          <li>
            <label className="leading-10">
              <input type="checkbox" /> Limpar o segundo quarto
            </label>
          </li>
          <li>
            <label className="leading-10">
              <input type="checkbox" /> Limpar o primeiro banheiro
            </label>
          </li>
          <li>
            <label className="leading-10">
              <input type="checkbox" /> Limpar o segundo banheiro
            </label>
          </li>
        </ul>
      </section>
    </main>
  );
}
