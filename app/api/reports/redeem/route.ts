import { NextResponse } from 'next/server';
import type { PersonalReport } from '../../../resgatar-relatorio/report';
export const dynamic = 'force-dynamic';
const headers = { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' };
export async function GET() {
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!base || !key) return NextResponse.json({ error: 'Os relatórios estão temporariamente indisponíveis.' }, { status: 503, headers });
  try {
    const response = await fetch(`${base}/rest/v1/wd_report_deliveries?select=payload`, {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
      cache: 'no-store', signal: AbortSignal.timeout(12000),
    });
    if (!response.ok) throw new Error('Report service unavailable');
    const rows: { payload: { role: string; reports: PersonalReport[] } }[] = await response.json();
    const reports = rows.filter(row => row.payload.role === 'participant').flatMap(row => row.payload.reports)
      .sort((a,b) => a.name.localeCompare(b.name, 'pt-BR'));
    return NextResponse.json({ role: 'coordinator', reports }, { headers });
  } catch { return NextResponse.json({ error: 'Não foi possível carregar os relatórios agora. Tente novamente.' }, { status: 503, headers }); }
}
