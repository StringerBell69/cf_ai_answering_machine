import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

// POST /api/webhooks/stripe - Webhook Stripe
export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = (await headers()).get('stripe-signature');

  // TODO: Vérifier signature
  // TODO: Parser event
  // TODO: Gérer selon event.type

  return NextResponse.json({ received: true });
}
