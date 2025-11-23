import Stripe from 'stripe';
import type { Env } from '../types/env';

export function initStripe(env: Env): Stripe {
  return new Stripe(env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-11-20.acacia',
    httpClient: Stripe.createFetchHttpClient(),
  });
}

// TODO: Implémenter les fonctions métier
export async function createCheckoutSession(/* ... */): Promise<string> {
  throw new Error('TODO: À implémenter');
}

export async function createPortalSession(/* ... */): Promise<string> {
  throw new Error('TODO: À implémenter');
}

export async function handleWebhookEvent(/* ... */): Promise<void> {
  throw new Error('TODO: À implémenter');
}
