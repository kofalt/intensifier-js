# intensifier

Intensifies gif maker

## Run with containers:

```
podman run -it --rm -v "$PWD":/app -w /app -p 3000:3000 docker.io/node:12-stretch bash

npm install
node ./node_modules/.bin/webpack-dev-server --inline --hot --port 3000 --host '0.0.0.0'
```

## Run with node:

```
npm install

npm start
```
