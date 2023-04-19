# Creating a payment transaction API using SOLID and TDD

## Architecture

### Entities:
1. Transaction
2. Installment

### Use cases:
1. CreateTransaction
2. GetTransaction

### I/O:
1. API
2. BD

## Configuring

First run the following command to install the dependencies:
`npm install`

## Starting the NodeJS project

`npm init`

## Adding dependencies for Express, Typescript and Jest

`npm install express typescript axios pg-promise`
`npm install -D @types/jest ts-node ts-jest @types/express nodemon`

## Starting Typescript settings file

`npx tsc --init`

## Starting Jest settings file

`npx ts-jest config:init`

## Run server

Run the following command to generate and start the server:

`npm run nodemon`

or 

`npx nodemon src/main_api.ts`

## Run tests

Run the following command to start the tests:

`npx jest`