# Build the project
FROM node:12 as builder

ARG environment
ENV NODE_ENV=development
ENV ENV=$environment

WORKDIR /app

COPY [".", "/app"]

RUN npm config set unsafe-perm=true
RUN npm i -g ionic
RUN npm i
CMD ['/usr/local/bin/ionic', 'serve']