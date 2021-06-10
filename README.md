# Craftnote challenge

This project the craftnote technical challenge

## How to run (setup)

Requirements: node, npm

1. run `npm i`
1. run `npm start` and the project if running in port 3000 (configurable in package.json)

## How to run locally

1. Send a get request in `localhost:3000/direction` with two url parameters `heading` and `target` both are rational numbers between 0 and 359
1. Receive the response with an object giving the direction `{ direction: string }`

## Formatter (prettier)

1. To get the benefit of auto formatting in vscode install prettier globally `npm i -g prettier` and the [prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
