FROM node:16-alpine as builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM node:16-alpine

WORKDIR /app

EXPOSE 3000

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/build ./
RUN npm install --only=production

CMD ["./index.ts"]