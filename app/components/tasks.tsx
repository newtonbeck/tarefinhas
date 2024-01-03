interface Props {
  tasks: string[];
}

export default function Tasks({ tasks }: Props) {
  return (
    <section className="mt-3">
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            <label className="leading-10">
              <input type="checkbox" /> {task}
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}
