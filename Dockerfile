# syntax=docker.io/docker/dockerfile:1

FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Ensure Corepack is enabled
RUN corepack enable pnpm

# Generate Prisma client
RUN pnpm dlx prisma generate --no-engine

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED=1

RUN \
  --mount=type=secret,id=NEXT_PUBLIC_STACK_PROJECT_ID \
  --mount=type=secret,id=NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY \
  --mount=type=secret,id=STACK_SECRET_SERVER_KEY \
  --mount=type=secret,id=DATABASE_URL \
  --mount=type=secret,id=PULSE_API_KEY \
  export NEXT_PUBLIC_STACK_PROJECT_ID=$(cat /run/secrets/NEXT_PUBLIC_STACK_PROJECT_ID) && \
  export NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=$(cat /run/secrets/NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY) && \
  export STACK_SECRET_SERVER_KEY=$(cat /run/secrets/STACK_SECRET_SERVER_KEY) && \
  export DATABASE_URL=$(cat /run/secrets/DATABASE_URL) && \
  export PULSE_API_KEY=$(cat /run/secrets/PULSE_API_KEY) && \

  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma

CMD ["node", "server.js"]