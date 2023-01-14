FROM node:19-alpine

RUN yarn global add nodemon

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 4000

CMD ["yarn", "run", "dev"]