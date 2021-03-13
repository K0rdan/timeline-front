# BUILDER
FROM node:14-alpine AS next-build

WORKDIR /usr/src/app

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn --non-interactive --no-progress

COPY . .
RUN npx next telemetry disable
RUN yarn build

#RUNNER
FROM node:14-alpine

WORKDIR /usr/src/app

COPY --from=next-build /usr/src/app/ .

CMD [ "yarn", "start" ]