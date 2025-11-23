import { Hono } from 'hono';
import { cors } from 'hono/cors';
import type { Env } from './types/env';

// Import routes
import webhooks from './routes/webhooks';
import voice from './routes/voice';
import agents from './routes/agents';

const app = new Hono<{ Bindings: Env }>();

// Middleware
app.use('*', cors());

// Routes
app.route('/api/webhooks', webhooks);
app.route('/api/voice', voice);
app.route('/api/agents', agents);

// Health check
app.get('/health', (c) => c.json({ status: 'ok' }));

export default app;
