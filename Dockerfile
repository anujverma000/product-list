FROM node:alpine

WORKDIR /app/

COPY . /app

RUN yarn
RUN yarn build

WORKDIR /app/server
RUN yarn

CMD yarn start
