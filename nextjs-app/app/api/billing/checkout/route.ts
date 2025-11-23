import { NextRequest, NextResponse } from 'next/server';

// POST /api/billing/checkout - Créer session Stripe
export async function POST(request: NextRequest) {
  // TODO: Implémenter avec lib/stripe.ts
  return NextResponse.json({ error: 'Not implemented' }, { status: 501 });
}
