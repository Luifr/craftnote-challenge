# Craftnote challenge

This project the craftnote technical challenge

## Technical info

### Api

This rest api is provided by express and protected by [helmet](https://www.npmjs.com/package/helmet) and [cors](https://www.npmjs.com/package/cors)
After the project starts, it lists all endpoints with [express-list-endpoints](https://www.npmjs.com/package/express-list-endpoints)

### Development

While developing run `npm run dev` instead of `npm run start`. In that way the project with restart whenever a .ts file changes because of [nodemon](https://www.npmjs.com/package/nodemon)

### Pre commit hook (Husky)

Before any commit husky runs tsc (transpiler), lint (Eslint) and tests (Jest)

### Test (Jest & Supertest)

Run `npm run test`

### Lint (Eslint)

Run `npm run lint`

### Formatter (prettier)

1. To get the benefit of auto formatting in vscode install prettier globally `npm i -g prettier` and the [prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Setup & Running

### How to setup locally

Requirements: node, npm

1. run `npm i`
1. run `npm start` and the project if running in port 3000 (configurable in package.json)

### How to run locally

1. Send a get request in `localhost:3000/direction` with two url parameters `heading` and `target` both are rational numbers between 0 and 359
1. Receive the response with an object giving the direction `{ direction: string }`, direction can be left, right or straight
1. If there is any problem in the validation the response will be like this `{ error: string }`

### How to run with Docker

Simply run `npm run docker:init` or the following steps

1. `docker build . -t <image-name>`
1. `docker run -p <any-free-port>:3000 -d <image-name>`
