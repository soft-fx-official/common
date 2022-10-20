FROM registry.soft-fx.lv/org/nodejs/node:18.5.0-alpine3.16-build as build
ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/certs.crt

COPY . /tmp
WORKDIR /tmp/
RUN npm install && npm run build
