import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Extraindo os dados preenchidos no formulário
    const { nome, celular, segmento, faturamento } = data;

    console.log("Novo lead capturado:", {
      nome,
      celular,
      segmento,
      faturamento,
    });

    // URL do webhook do n8n
    const n8nWebhookUrl = 'https://teste-n8n.pxohxs.easypanel.host/webhook/leads';

    // Disparando os dados para o n8n
    await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome,
        celular,
        segmento,
        faturamento,
        origem: 'campanha follow-up v2', // Origem fixa do lead
        dataCadastro: new Date().toISOString() // Adiciona a data no formato ISO
      })
    });

    return NextResponse.json({
      success: true,
      message: "Lead cadastrado com sucesso!",
    });
  } catch (error) {
    console.error("Erro na API de leads:", error);
    return NextResponse.json(
      { success: false, message: "Erro ao processar dados." },
      { status: 500 },
    );
  }
}
