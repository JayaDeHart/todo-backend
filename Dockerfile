FROM node:20-alpine

ARG DATABASE_URL

ENV DATABASE_URL=$DATABASE_URL

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma/
RUN npx prisma generate

COPY . .
RUN npm run build


EXPOSE 8000

CMD ["sh", "migrate-and-start.sh"]