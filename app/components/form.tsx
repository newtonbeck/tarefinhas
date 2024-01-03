"use client";

import { FormEvent, useState } from "react";

interface Props {
  onChatGPTInquiry: (input: string) => void;
}

export default function Form({ onChatGPTInquiry }: Props) {
  const [input, setInput] = useState("");

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onChatGPTInquiry(input);
  }

  return (
    <form className="flex flex-col gap-2.5" onSubmit={handleFormSubmit}>
      <label htmlFor="task">
        Digite abaixo a tarefa que você quer quebrar em tarefas menores:
      </label>
      <textarea
        className="border-2"
        id="task"
        cols={10}
        rows={5}
        placeholder="Exemplo: preparar a mala da minha viagem de 3 dias para Praga"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button className="bg-zinc-500">Quebrar em tarefas</button>
    </form>
  );
}
