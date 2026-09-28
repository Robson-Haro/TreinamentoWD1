import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type Participant = { name?: string; email?: string };

function getConfig() {
  const url = String(process.env.NEXT_PUBLIC_SUPABASE_URL || "").replace(/\/$/, "");
  const key = String(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "");
  return { url, key };
}

async function rpc(name: string, body: Record<string, unknown>) {
  const { url, key } = getConfig();
  if (!url || !key) {
    return { configured: false, ok: false, status: 503, data: null };
  }

  const response = await fetch(url + "/rest/v1/rpc/" + name, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: "Bearer " + key,
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  const data = await response.json().catch(() => null);
  return { configured: true, ok: response.ok, status: response.status, data };
}

function validParticipant(participant?: Participant) {
  const name = String(participant?.name || "").trim();
  const email = String(participant?.email || "").trim().toLowerCase();
  if (name.length < 3 || !email.includes("@")) return null;
  return { name, email };
}

export async function GET(request: NextRequest) {
  const moduleId = String(request.nextUrl.searchParams.get("module") || "").trim();
  if (moduleId) {
    const result = await rpc("uc_get_questionnaire", {
      p_journey: "lideranca",
      p_module_id: moduleId,
    });

    if (!result.configured) {
      return NextResponse.json({ configured: false, questions: [] });
    }
    if (!result.ok) {
      return NextResponse.json({ error: "Falha ao carregar questionário.", details: result.data }, { status: result.status });
    }
    return NextResponse.json({ configured: true, questions: result.data || [] });
  }

  const email = String(request.nextUrl.searchParams.get("email") || "").trim().toLowerCase();
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Informe um e-mail válido." }, { status: 400 });
  }

  const result = await rpc("uc_get_progress", { p_email: email });
  if (!result.configured) {
    return NextResponse.json({ configured: false, progress: [], certificates: [] });
  }
  if (!result.ok) {
    return NextResponse.json({ error: "Falha ao carregar progresso.", details: result.data }, { status: result.status });
  }

  const payload = result.data || {};
  return NextResponse.json({
    configured: true,
    progress: payload.progress || [],
    certificates: payload.certificates || [],
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null) as Record<string, unknown> | null;
  if (!body) return NextResponse.json({ error: "Payload inválido." }, { status: 400 });

  const participant = validParticipant(body.participant as Participant | undefined);
  if (!participant) {
    return NextResponse.json({ error: "Nome e e-mail do participante são obrigatórios." }, { status: 400 });
  }

  if (body.action === "assessment") {
    const moduleId = String(body.module_id || "");
    if (moduleId !== "modulo-1" && moduleId !== "modulo-2") {
      return NextResponse.json({ error: "Módulo inválido." }, { status: 400 });
    }

    const result = await rpc("uc_submit_assessment", {
      p_email: participant.email,
      p_nome: participant.name,
      p_journey: "lideranca",
      p_module_id: moduleId,
      p_answers: body.answers || {},
    });

    if (!result.configured) {
      return NextResponse.json({ ok: true, configured: false, storage: "local" }, { status: 202 });
    }
    if (!result.ok) {
      return NextResponse.json({ error: "Falha ao registrar avaliação.", details: result.data }, { status: result.status });
    }

    const row = Array.isArray(result.data) ? result.data[0] : result.data;
    return NextResponse.json({
      ok: true,
      configured: true,
      score: Number(row?.score || 0),
      passed: Boolean(row?.passed),
    });
  }

  if (body.action === "certificate") {
    const result = await rpc("uc_issue_certificate", {
      p_email: participant.email,
      p_nome: participant.name,
      p_journey: "lideranca",
    });

    if (!result.configured) {
      return NextResponse.json({ ok: true, configured: false, storage: "local" }, { status: 202 });
    }
    if (!result.ok) {
      return NextResponse.json({ error: "Certificado ainda não pode ser emitido.", details: result.data }, { status: result.status });
    }

    const row = Array.isArray(result.data) ? result.data[0] : result.data;
    return NextResponse.json({
      ok: true,
      configured: true,
      certificate_code: row?.certificate_code || "",
      issued_at: row?.issued_at || null,
      module_1_score: Number(row?.module_1_score || 0),
      module_2_score: Number(row?.module_2_score || 0),
    });
  }

  return NextResponse.json({ error: "Ação não reconhecida." }, { status: 400 });
}
