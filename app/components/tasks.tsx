export default function Tasks() {
  return (
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
  );
}
