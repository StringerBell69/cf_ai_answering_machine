import { NextRequest, NextResponse } from 'next/server';

// POST /api/billing/portal - Créer portal session
export async function POST(request: NextRequest) {
  // TODO: Implémenter avec lib/stripe.ts
  return NextResponse.json({ error: 'Not implemented' }, { status: 501 });
}
