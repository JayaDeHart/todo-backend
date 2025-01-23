#!/bin/sh

echo "running database migrations"
npx prisma migrate deploy

echo "starting the server"
npm run start
