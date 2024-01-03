"use client";

import { useState } from "react";
import Form from "./components/form";
import Tasks from "./components/tasks";

export default function Home() {
  const [tasks, setTasks] = useState([
    "Limpar o primeiro quarto",
    "Limpar o segundo quarto",
    "Limpar o primeiro banheiro",
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
