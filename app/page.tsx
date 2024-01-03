"use client";

import { useState } from "react";
import Form from "./components/form";
import Tasks from "./components/tasks";

export default function Home() {
  const [tasks, setTasks] = useState([
    "Escolher roupas adequadas para a praia e clima",
    "Separar roupa de banho e acessórios de praia",
    "Escolher calçados adequados",
    "Separar itens de higiene pessoal",
    "Separar protetor solar e itens de proteção contra o sol",
    "Escolher roupas para saídas noturnas ou atividades específicas",
    "Verificar a necessidade de levar uma toalha de banho",
    "Separar acessórios como óculos de sol, chapéus, etc.",
    "Organizar eletrônicos e carregadores",
    "Fazer uma lista para garantir que nada seja esquecido",
  ]);
  async function handleChatGPTInquiry(input: string) {
    const response = await fetch("/api/task", {
      method: "POST",
      body: JSON.stringify({
        input,
      }),
    });
    const tasks = await response.json();
    setTasks(tasks);
  }
  return (
    <main className="m-3">
      <Form onChatGPTInquiry={handleChatGPTInquiry} />
      <Tasks tasks={tasks} />
    </main>
  );
}
