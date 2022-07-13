FROM registry.soft-fx.lv/com/docker/node:16.13.0-alpine.build as build

COPY . /tmp
WORKDIR /tmp/
RUN npm install && npm run build
