export const dynamic = "force-dynamic";

import OpenAI from "openai";

const openAI = new OpenAI();

export async function POST(request: Request) {
  const body = await request.json();
  const response = await openAI.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "Você é um assistente solícito desenhado para quebrar tarefas em passos menores e retorná-las em formato JSON",
      },
      {
        role: "user",
        content: `Me dê uma lista de passos que eu devo completar para que a seguinte tarefa seja feita: "limpar a minha casa de 2 quartos, 1 sala, 1 cozinha e 1 banheiro".`,
      },
      {
        role: "assistant",
        content: `
              {
                "passos": [
                  "Limpar o pó dos móveis do quarto 1", 
                  "Trocar a roupa de cama do quarto 1",
                  "Limpar o pó dos móveis do quarto 2", 
                  "Trocar a roupa de cama do quarto 2"
                ]
              }
            `,
      },
      {
        role: "user",
        content: `Me dê uma lista de passos que eu devo completar para que a seguinte tarefa seja feita: "${body.input}".`,
      },
    ],
    model: "gpt-3.5-turbo-1106",
    response_format: { type: "json_object" },
  });

  if (response.choices.length > 0) {
    const choice = response.choices[0];

    if (choice.finish_reason != "length") {
      const content = JSON.parse(choice.message.content ?? "");
      return Response.json(content.passos);
    }
  }
}
