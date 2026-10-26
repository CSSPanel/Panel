FROM node:26.12.1 AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# pnpm 10 reads this lockfile's format (9.0). Unpinned, `npm install -g pnpm` now gets pnpm 12,
# which stops the install on the build scripts it skips (esbuild, sharp).
RUN npm install -g pnpm@10.34.9

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