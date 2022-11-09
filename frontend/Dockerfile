FROM node:alpine

ENV NODE_VERSION 19.0.0

ENV PORT 3000

# Create app directory
# RUN mkdir -p ./
WORKDIR /app
COPY ./ ./

# Installing dependencies
# COPY package*.json ./
RUN npm install

# Copying source files

# Building app
# RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "dev"