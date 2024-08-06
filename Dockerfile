FROM node:22-alpine3.19

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ENV PORT=8081

EXPOSE 8081

CMD ["npm","start"]   
