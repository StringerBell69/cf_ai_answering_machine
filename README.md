# EdgeVoice - AI Phone Assistant

Answering machine using Cloudflare stack with Next.js frontend.

## 📁 Project Structure

```
/
├── workers/              # Cloudflare Workers backend API
│   ├── src/
│   │   ├── index.ts     # Main router
│   │   ├── routes/      # API routes (voice, agents, webhooks)
│   │   ├── types/       # TypeScript types
│   │   └── utils/       # Utilities (Stripe, etc.)
│   ├── wrangler.toml    # Cloudflare configuration
│   └── package.json
│
├── nextjs-app/          # Next.js 15 frontend
│   ├── app/            # App Router pages & API routes
│   ├── components/     # React components
│   ├── lib/           # Stripe, Twilio, API clients
│   ├── types/         # TypeScript types
│   └── package.json
│
└── schema/             # D1 database schema
    └── d1-schema.sql
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm
- Cloudflare account
- Stripe account
- Twilio account

### 1. Install Dependencies

```bash
# Workers
cd workers
npm install

# Next.js
cd ../nextjs-app
npm install
```

### 2. Setup Cloudflare Resources

```bash
cd workers

# Create D1 database
wrangler d1 create edgevoice-db

# Update wrangler.toml with the database_id from the output

# Create KV namespace
wrangler kv:namespace create CACHE

# Update wrangler.toml with the KV namespace id

# Create R2 bucket
wrangler r2 bucket create edgevoice-audio

# Create Vectorize index
wrangler vectorize create edgevoice-embeddings --dimensions=768 --metric=cosine
```

### 3. Run Database Migrations

```bash
cd workers
npm run db:migrate
```

### 4. Setup Environment Variables

**Workers (.dev.vars):**
```bash
cd workers
cp .dev.vars.example .dev.vars
# Edit .dev.vars with your actual credentials
```

**Next.js (.env.local):**
```bash
cd nextjs-app
cp .env.example .env.local
# Edit .env.local with your actual credentials
```

**Production Secrets (Workers):**
```bash
cd workers
wrangler secret put STRIPE_SECRET_KEY
wrangler secret put STRIPE_WEBHOOK_SECRET
wrangler secret put TWILIO_ACCOUNT_SID
wrangler secret put TWILIO_AUTH_TOKEN
```

### 5. Run Development Servers

**Terminal 1 - Workers:**
```bash
cd workers
npm run dev
# Runs on http://localhost:8787
```

**Terminal 2 - Next.js:**
```bash
cd nextjs-app
npm run dev
# Runs on http://localhost:3000
```

## 🔧 Configuration

### Stripe Setup

1. Create a Stripe account at https://stripe.com
2. Get your API keys from the Stripe Dashboard
3. Set up webhook endpoints:
   - Development: Use Stripe CLI (`stripe listen --forward-to localhost:3000/api/webhooks/stripe`)
   - Production: Add webhook endpoint in Stripe Dashboard

### Twilio Setup

1. Create a Twilio account at https://twilio.com
2. Get your Account SID and Auth Token
3. Purchase a phone number
4. Configure webhook URLs for incoming calls and messages

### Cloudflare Setup

1. Create a Cloudflare account
2. Install Wrangler CLI: `npm install -g wrangler`
3. Login: `wrangler login`
4. Follow steps in Quick Start to create resources

## 📦 Deployment

### Deploy Workers

```bash
cd workers
npm run deploy
```

### Deploy Next.js

Deploy to Vercel, Cloudflare Pages, or your preferred hosting:

```bash
cd nextjs-app
npm run build
```

For Vercel:
```bash
vercel
```

For Cloudflare Pages:
```bash
npm run build
wrangler pages deploy out/
```

## 🛠️ Development

### Available Scripts

**Workers:**
- `npm run dev` - Start development server
- `npm run deploy` - Deploy to Cloudflare
- `npm run db:migrate` - Run database migrations

**Next.js:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📚 Tech Stack

### Backend (Cloudflare Workers)
- **Hono** - Fast web framework
- **D1** - Serverless SQL database
- **R2** - Object storage for audio files
- **Vectorize** - Vector database for embeddings
- **KV** - Key-value cache
- **AI** - Cloudflare AI models
- **Stripe** - Payment processing
- **Zod** - Schema validation

### Frontend (Next.js)
- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **TanStack Query** - Data fetching & caching
- **Stripe** - Payment integration
- **Twilio** - Phone API
- **Lucide React** - Icon library
- **TypeScript** - Type safety

## 🔒 Security

- API keys and secrets stored in environment variables
- Stripe webhook signature verification
- CORS configured for production domains
- Input validation with Zod

## 📝 License

MIT

## 🤝 Contributing

This project was bootstrapped with Claude Code. Feel free to contribute!

---

**Note:** This is a basic setup. All API routes and functions contain TODO comments indicating where business logic needs to be implemented.
