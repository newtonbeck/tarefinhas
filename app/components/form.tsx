export default function Form() {
  return (
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
  );
}
