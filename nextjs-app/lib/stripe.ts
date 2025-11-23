import Stripe from 'stripe';

// Initialiser Stripe côté serveur
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
});

// TODO: Créer session checkout
export async function createCheckoutSession(params: {
  priceId: string;
  customerId?: string;
  successUrl: string;
  cancelUrl: string;
}) {
  // TODO: Implémenter
  throw new Error('TODO: createCheckoutSession not implemented');
}

// TODO: Créer portal session
export async function createPortalSession(customerId: string) {
  // TODO: Implémenter
  throw new Error('TODO: createPortalSession not implemented');
}

// TODO: Gérer webhook
export async function handleStripeWebhook(body: string, signature: string) {
  // TODO: Implémenter
  throw new Error('TODO: handleStripeWebhook not implemented');
}
