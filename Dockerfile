FROM node:latest

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
 RUN npm install

 COPY . /app

 EXPOSE 3007

 ENTRYPOINT ["node"]

 CMD ["server.js"]
