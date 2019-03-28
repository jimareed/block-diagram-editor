FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install
RUN npm install -g serve

ADD src /usr/src/app/src
ADD public /usr/src/app/public

RUN npm run build

CMD [ "serve", "-s", "build" ]