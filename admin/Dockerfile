FROM node:16

WORKDIR /app
RUN npm install pnpm -g
COPY ./ /app
RUN pnpm install;

CMD \
  pnpm run start