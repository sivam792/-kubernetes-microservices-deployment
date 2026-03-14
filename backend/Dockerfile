FROM node:18

WORKDIR /app

COPY server.js .

RUN npm init -y
RUN npm install express

EXPOSE 5000

CMD ["node","server.js"]
