FROM alpine:latest
RUN apk add --no-cache nodejs npm
RUN mkdir -p react
WORKDIR /react
COPY . /react
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]

