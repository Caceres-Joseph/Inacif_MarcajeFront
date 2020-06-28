# marcaje_front

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



# Build image


For create a build image from Dockerfile
```
docker build -t marcaje-front:dev .
```


For run the container
```
docker run -v ${PWD}:/app -v /app/node_modules -p 8081:8080 --rm marcaje-front:dev

docker run -it -v ${PWD}:/app -v /app/node_modules -p 8081:8080 --rm marcaje-front:dev

```