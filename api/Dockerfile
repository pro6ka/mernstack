# syntax=docker/dockerfile:1
FROM node:16
RUN apt-get update && apt-get install -y netcat
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
RUN chown node:node package*.json
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 8080
CMD ["nodemon", "app.js"]
