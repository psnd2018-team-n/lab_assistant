FROM alpine:latest

ENV APP_ROOT /lab_assistant_api

WORKDIR $APP_ROOT

RUN apk add --no-cache nodejs
RUN apk add --no-cache npm

RUN npm install npm -g

ADD package.json $APP_ROOT
ADD package-lock.json $APP_ROOT

RUN npm install

ADD bin $APP_ROOT
ADD public $APP_ROOT
ADD routes $APP_ROOT
ADD views $APP_ROOT
ADD app.js $APP_ROOT

EXPOSE 3000

CMD ["npm", "start"]
