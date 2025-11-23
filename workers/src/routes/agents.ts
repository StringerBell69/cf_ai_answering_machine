import { Hono } from 'hono';
import type { Env } from '../types/env';

const agents = new Hono<{ Bindings: Env }>();

// TODO: CRUD agents
agents.get('/', async (c) => {
  // TODO: Liste agents depuis D1
  return c.json([]);
});

agents.post('/', async (c) => {
  // TODO: Créer agent dans D1
  return c.json({ id: 'todo' }, 201);
});

agents.get('/:id', async (c) => {
  // TODO: Get agent
  return c.json({});
});

agents.put('/:id', async (c) => {
  // TODO: Update agent
  return c.json({});
});

agents.delete('/:id', async (c) => {
  // TODO: Delete agent
  return c.json({ success: true });
});

export default agents;
