

# base image
FROM node:12.2.0-alpine

#Author
LABEL maintainer="USAC - josephccaceres@gmail.com "
LABEL author="josephccaceres@gmail.com"

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH



# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install

#Install vue-cli 4
RUN npm install -g @vue/cli

# start app
CMD ["npm", "run", "serve"]

