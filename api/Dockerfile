# syntax=docker/dockerfile:1
FROM node:16
RUN apt-get update && apt-get install -y netcat \
    && mkdir -p /home/node/app/node_modules \
    && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
RUN chown node:node package*.json
USER node
RUN npm install
COPY --chown=node:node . /home/node/app
RUN pwd && ls -al
EXPOSE 8080
# CMD ["/home/node/app/node_modules/.bin/nodemon", "app.js"]
# CMD ["node", "app.js"]
