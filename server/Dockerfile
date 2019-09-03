FROM node:alpine

WORKDIR /app/server

COPY package.json /app/server/package.json
COPY yarn.lock /app/server/yarn.lock
RUN yarn

CMD ["yarn", "start"]