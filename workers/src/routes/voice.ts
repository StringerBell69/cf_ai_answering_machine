import { Hono } from 'hono';
import type { Env } from '../types/env';

const voice = new Hono<{ Bindings: Env }>();

// TODO: Webhook Twilio appel entrant
voice.post('/incoming', async (c) => {
  // TODO: Implémenter
  return c.text('<?xml version="1.0" encoding="UTF-8"?><Response></Response>');
});

// TODO: Recording callback
voice.post('/recording', async (c) => {
  // TODO: Implémenter
  return c.json({ success: true });
});

// TODO: Status callback
voice.post('/status', async (c) => {
  // TODO: Implémenter
  return c.json({ success: true });
});

export default voice;
