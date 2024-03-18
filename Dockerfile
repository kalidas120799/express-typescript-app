FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

RUN apk add --no-cache libc6-compat bash && \
    mkdir /usr/src/app/logs && \
    apk add --no-cache git

# Install app dependencies
COPY package.json ./

RUN npm install  && \
    apk del git

# Bundle app source
COPY . .

CMD [ "npm", "run" , "serve" ]
