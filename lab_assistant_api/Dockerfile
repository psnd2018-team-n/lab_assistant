FROM node
ENV APP_ROOT /usr/src/plise_api

WORKDIR $APP_ROOT

COPY package.json $APP_ROOT
COPY package-lock.json $APP_ROOT

RUN npm install

COPY bin $APP_ROOT
COPY public $APP_ROOT
COPY routes $APP_ROOT
COPY views $APP_ROOT
COPY app.js $APP_ROOT

EXPOSE 3000

CMD ["npm", "start"]
