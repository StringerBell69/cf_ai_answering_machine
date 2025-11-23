export interface Env {
  // Cloudflare bindings
  AI: Ai;
  DB: D1Database;
  VECTORIZE: VectorizeIndex;
  AUDIO_BUCKET: R2Bucket;
  CACHE: KVNamespace;

  // Secrets
  STRIPE_SECRET_KEY: string;
  STRIPE_WEBHOOK_SECRET: string;
  TWILIO_ACCOUNT_SID: string;
  TWILIO_AUTH_TOKEN: string;
  TWILIO_PHONE_NUMBER: string;

  // Vars
  ENVIRONMENT: 'development' | 'production';
}
