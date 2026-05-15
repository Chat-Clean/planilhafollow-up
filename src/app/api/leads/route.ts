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

    // =========================================================================
    // DICA DE AUTOMAÇÃO AQUI:
    // Como você estruturou esse projeto em Next.js e Node, esta é a camada perfeita
    // para disparar um POST para um Webhook (como no n8n ou similar).
    // Assim, o lead cai direto no seu CRM ou dispara uma mensagem no WhatsApp.
    // Exemplo:
    // await fetch('SUA_URL_DO_WEBHOOK_N8N', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // });
    // =========================================================================

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
