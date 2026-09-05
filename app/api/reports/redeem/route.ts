import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
const headers = { 'Cache-Control': 'private, no-store', 'X-Content-Type-Options': 'nosniff' };
export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) return NextResponse.json({ error: 'Acesso não permitido.' }, { status: 403, headers });
  let code: unknown;
  try { code = (await request.json()).code; } catch { return NextResponse.json({ error: 'Informe seu código de acesso.' }, { status: 400, headers }); }
  if (typeof code !== 'string' || !/^[a-f0-9]{48}$/.test(code)) return NextResponse.json({ error: 'Confira o código recebido e tente novamente.' }, { status: 401, headers });
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!base || !key) return NextResponse.json({ error: 'O acesso está temporariamente indisponível. Tente novamente em instantes.' }, { status: 503, headers });
  try {
    const response = await fetch(`${base}/rest/v1/wd_report_deliveries?select=payload&limit=1`, {
      headers: { apikey: key, Authorization: `Bearer ${key}`, 'x-report-code': code },
      cache: 'no-store', signal: AbortSignal.timeout(12000),
    });
    if (!response.ok) throw new Error('Report service unavailable');
    const rows = await response.json();
    if (!rows[0]?.payload) return NextResponse.json({ error: 'Código não encontrado. Confira o código recebido.' }, { status: 401, headers });
    return NextResponse.json(rows[0].payload, { headers });
  } catch { return NextResponse.json({ error: 'Não foi possível carregar seu relatório agora. Tente novamente.' }, { status: 503, headers }); }
}
