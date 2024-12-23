# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# [START cloudrun_helloworld_dockerfile]
# [START run_helloworld_dockerfile]

# Use the official lightweight Node.js image.
# https://hub.docker.com/_/node
FROM node:18-slim

# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
# RUN corepack enable
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
# RUN pnpm run build
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_ENV="production" 
RUN corepack enable

# Create and change to the app directory.
WORKDIR /usr/src/app
ENV PORT=8080
ENV HOST=0.0.0.0

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY package*.json ./

# Copy local code to the container image.
COPY .output ./
# COPY server ./server

RUN ls

# RUN ping 8.8.8.8 -c 4  
# Install production dependencies.
# If you add a package-lock.json, speed your build by switching to 'npm ci'.
# RUN npm ci --only=production
RUN ls /usr/bin
# RUN /usr/bin/apt install pnpm
# RUN npm install --production --omit=dev --loglevel verbose --force
RUN pnpm install --production --loglevel verbose 

# Run the web service on container startup.
ENTRYPOINT [ "node", "./server/index.mjs" ]

# help: node index.js [SCAN|CLUSTER|SCANCLUSTER|NO_LISTEN|SERVER] [RACEID]

