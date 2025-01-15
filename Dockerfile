FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma/
RUN npx prisma generate

COPY . .
RUN npm run build


EXPOSE 8000

CMD ["npm", "run", "start"]