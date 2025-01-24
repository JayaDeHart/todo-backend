#!/bin/sh

echo "running database migrations"
npx prisma db push

echo "starting the server"
npm run start
