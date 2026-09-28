import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type Participant = { name?: string; email?: string };

function getConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
  return { url: url.replace(/\/$/, ""), key };
}

function headers(prefer?: string) {
  const { key } = getConfig();
  return {
    apikey: key,
    Authorization: "Bearer " + key,
    "content-type": "application/json",
    ...(prefer ? { Prefer: prefer } : {}),
  };
}

async function rest(path: string, init: RequestInit = {}) {
  const { url, key } = getConfig();
  if (!url || !key) return { configured: false, ok: false, status: 503, data: null };

  const response = await fetch(url + "/rest/v1/" + path, {
    ...init,
    headers: {
      ...headers(),
      ...(init.headers || {}),
    },
    cache: "no-store",
  });

  let data: unknown = null;
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) data = await response.json().catch(() => null);
  return { configured: true, ok: response.ok, status: response.status, data };
}

function validParticipant(participant?: Participant) {
  const name = String(participant?.name || "").trim();
  const email = String(participant?.email || "").trim().toLowerCase();
  if (name.length < 3 || !email.includes("@")) return null;
  return { name, email };
}

async function upsertParticipant(participant: { name: string; email: string }) {
  return rest("uc_participants?on_conflict=email", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify({
      email: participant.email,
      nome: participant.name,
      updated_at: new Date().toISOString(),
    }),
  });
}

export async function GET(request: NextRequest) {
  const email = String(request.nextUrl.searchParams.get("email") || "").trim().toLowerCase();
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }

  const { url, key } = getConfig();
  if (!url || !key) {
    return NextResponse.json({ configured: false, progress: [], certificates: [] });
  }

  const encoded = encodeURIComponent(email);
  const [progress, certificates] = await Promise.all([
    rest("uc_progress?email=eq." + encoded + "&select=journey,module_id,status,score,updated_at&order=updated_at.asc"),
    rest("uc_certificates?email=eq." + encoded + "&select=journey,certificate_code,issued_at,module_1_score,module_2_score&order=issued_at.desc"),
  ]);

  return NextResponse.json({
    configured: true,
    progress: progress.ok ? progress.data : [],
    certificates: certificates.ok ? certificates.data : [],
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null) as Record<string, unknown> | null;
  if (!body) return NextResponse.json({ error: "Payload inválido." }, { status: 400 });

  const participant = validParticipant(body.participant as Participant | undefined);
  if (!participant) {
    return NextResponse.json({ error: "Nome e e-mail do participante são obrigatórios." }, { status: 400 });
  }

  const { url, key } = getConfig();
  if (!url || !key) {
    return NextResponse.json({
      ok: true,
      configured: false,
      storage: "local",
      message: "Backend Supabase ainda não configurado; o navegador preservou o progresso localmente.",
    }, { status: 202 });
  }

  const personResult = await upsertParticipant(participant);
  if (!personResult.ok) {
    return NextResponse.json({ error: "Falha ao registrar participante.", details: personResult.data }, { status: 500 });
  }

  if (body.action === "assessment") {
    const journey = String(body.journey || "lideranca");
    const moduleId = String(body.module_id || "");
    const score = Number(body.score || 0);
    const passed = Boolean(body.passed);
    const answers = body.answers || {};

    const attempt = await rest("uc_assessment_attempts", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({
        email: participant.email,
        journey,
        module_id: moduleId,
        score,
        passed,
        answers,
      }),
    });

    if (!attempt.ok) {
      return NextResponse.json({ error: "Falha ao registrar tentativa.", details: attempt.data }, { status: 500 });
    }

    const progress = await rest("uc_progress?on_conflict=email,journey,module_id", {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify({
        email: participant.email,
        journey,
        module_id: moduleId,
        status: passed ? "passed" : "attempted",
        score,
        updated_at: new Date().toISOString(),
      }),
    });

    if (!progress.ok) {
      return NextResponse.json({ error: "Falha ao atualizar progresso.", details: progress.data }, { status: 500 });
    }

    return NextResponse.json({ ok: true, configured: true });
  }

  if (body.action === "certificate") {
    const code = String(body.certificate_code || "").trim();
    if (!code) return NextResponse.json({ error: "Código do certificado ausente." }, { status: 400 });

    const certificate = await rest("uc_certificates?on_conflict=certificate_code", {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify({
        email: participant.email,
        journey: String(body.journey || "lideranca"),
        certificate_code: code,
        module_1_score: Number(body.module_1_score || 0),
        module_2_score: Number(body.module_2_score || 0),
      }),
    });

    if (!certificate.ok) {
      return NextResponse.json({ error: "Falha ao registrar certificado.", details: certificate.data }, { status: 500 });
    }

    return NextResponse.json({ ok: true, configured: true, certificate_code: code });
  }

  return NextResponse.json({ error: "Ação não reconhecida." }, { status: 400 });
}
