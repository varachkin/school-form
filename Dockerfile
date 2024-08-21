FROM node:14.20.0-alpine

WORKDIR /usr/server

COPY package*.json ./ 


RUN npm i -g serve 

RUN npm i

COPY . .

RUN npm run build

EXPOSE 5000


CMD serve -s dist -p 5000