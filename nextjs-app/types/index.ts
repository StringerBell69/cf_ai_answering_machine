// TODO: Ajouter types métier selon besoins

export interface Agent {
  id: string;
  userId: string;
  name: string;
  phoneNumber?: string;
  voiceConfig?: any;
  systemPrompt?: string;
  knowledgeBaseId?: string;
  createdAt: string;
  updatedAt: string;
  // TODO: Ajouter props
}

export interface Conversation {
  id: string;
  agentId: string;
  phoneNumber?: string;
  direction: 'inbound' | 'outbound';
  status: 'active' | 'completed' | 'failed';
  durationSeconds?: number;
  recordingUrl?: string;
  transcript?: string;
  createdAt: string;
  endedAt?: string;
  // TODO: Ajouter props
}

export interface Message {
  id: string;
  conversationId: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Subscription {
  id: string;
  userId: string;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  plan: string;
  status: string;
  currentPeriodEnd?: string;
  createdAt: string;
  updatedAt: string;
}
