# Todo Backend

## About

A simple CRUD backend using Prisma and Express

## Getting Started

#### Setting up the database

1. First, make sure you have Mysql installed locally.

2. Then, rename `.env.sample` to `.env`, and replace the username and password with the credentials for your postgres instance. Ensure your mysql user has the requisite permissions to create tables. You can also use the default root user if you wish.

3. Run this command: `npx prisma migrate dev --name init`. This will create a new migration file with the project schema, and run it against the database.

For additional reference you can look at the official documentation [here](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/using-prisma-migrate-typescript-postgresql)

#### Running

Use the command `npm run dev` to run the server without compiling to javascript

#### Testing

Use [this](https://cloudy-star-256114.postman.co/workspace/Team-Workspace~e2b1dcb9-cc83-40fd-83c8-b2f054e4073b/collection/13575361-06472c82-d0bd-4e44-b79b-7c9041968e18?action=share&creator=13575361) postman schema to test the API endpoints
