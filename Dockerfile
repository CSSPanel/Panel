FROM node:20 AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies using pnpm
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

# Build the project using pnpm
# RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/ ./
RUN chown nextjs:nodejs ./

ENV HOME=/app
USER nextjs

EXPOSE 3000
ENV HOSTNAME "0.0.0.0"

CMD ["npm", "start"]