FROM alpine:latest

ENV APP_ROOT /lab_assistant

WORKDIR $APP_ROOT

RUN apk add --no-cache nodejs
RUN apk add --no-cache npm

RUN npm install npm -g

ADD package.json $APP_ROOT
ADD package-lock.json $APP_ROOT

EXPOSE 3000
