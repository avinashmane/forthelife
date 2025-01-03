# 
# Use the official lightweight Node.js image.
# https://hub.docker.com/_/node
FROM node:18-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_ENV="production" 
RUN corepack enable

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.

# -------- 
# Install production dependencies.
FROM base AS prod-deps
COPY package*.json ./
COPY pnpm-lock.yaml .
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install firebase primevue lodash-es nuxt pinia
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
# RUN pnpm run build

# --------
FROM base AS build_old
# If you add a package-lock.json, speed your build by switching to 'npm ci'.
# RUN npm ci --only=production
RUN ls /usr/bin
# RUN /usr/bin/apt install pnpm
# RUN npm install --production --omit=dev --loglevel verbose --force
RUN pnpm install --production --loglevel verbose 

# Run the web service on container startup.
ENTRYPOINT [ "node", "./server/index.mjs" ]

# help: node index.js [SCAN|CLUSTER|SCANCLUSTER|NO_LISTEN|SERVER] [RACEID]

# -------- 
FROM prod-deps AS build
# Copy local code to the container image.
COPY .output ./

ENV PORT=8080
ENV HOST=0.0.0.0

ENTRYPOINT [ "node", "./server/index.mjs" ]

    