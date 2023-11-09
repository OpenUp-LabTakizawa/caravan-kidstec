FROM oven/bun:latest
WORKDIR /home/bun/app
COPY . .
RUN bun i
