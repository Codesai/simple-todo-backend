FROM node:8.9.4-alpine

RUN mkdir /app
WORKDIR /app
COPY . .

RUN npm install
