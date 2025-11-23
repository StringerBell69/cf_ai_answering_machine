// Client pour appeler l'API Cloudflare Workers
const WORKERS_API_URL = process.env.NEXT_PUBLIC_WORKERS_URL || 'http://localhost:8787';

// TODO: Fonction générique pour appeler Workers API
export async function callWorkersAPI(
  endpoint: string,
  options?: RequestInit
) {
  // TODO: Implémenter
  throw new Error('TODO: callWorkersAPI not implemented');
}

// TODO: Créer agent
export async function createAgent(data: any) {
  // TODO: Implémenter
  throw new Error('TODO: createAgent not implemented');
}

// TODO: Liste agents
export async function listAgents() {
  // TODO: Implémenter
  throw new Error('TODO: listAgents not implemented');
}

// TODO: Get agent
export async function getAgent(id: string) {
  // TODO: Implémenter
  throw new Error('TODO: getAgent not implemented');
}

// TODO: Update agent
export async function updateAgent(id: string, data: any) {
  // TODO: Implémenter
  throw new Error('TODO: updateAgent not implemented');
}

// TODO: Delete agent
export async function deleteAgent(id: string) {
  // TODO: Implémenter
  throw new Error('TODO: deleteAgent not implemented');
}
