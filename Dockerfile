FROM oven/bun:latest

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN bun install --silent && mv node_modules ../

COPY . .

RUN bun run build
# RUN bun run start

EXPOSE 3000

CMD ["bun", "run", "start"]
