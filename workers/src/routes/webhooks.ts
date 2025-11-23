import { Hono } from 'hono';
import type { Env } from '../types/env';

const webhooks = new Hono<{ Bindings: Env }>();

// TODO: Webhook Stripe
webhooks.post('/stripe', async (c) => {
  const signature = c.req.header('stripe-signature');
  const body = await c.req.text();

  // TODO: Vérifier signature
  // TODO: Parser event
  // TODO: Gérer selon event.type

  return c.json({ received: true });
});

export default webhooks;
