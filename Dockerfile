FROM node:12

WORKDIR /usr/app

RUN rm -rf node_modules/

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]