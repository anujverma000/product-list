FROM node:alpine

RUN yarn global add pm2

WORKDIR /app/

ADD . /app

RUN yarn
RUN yarn build

WORKDIR /app/server
RUN yarn


CMD ["pm2-runtime", "../process.yml"]
