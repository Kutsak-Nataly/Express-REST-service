FROM node:14-alpine
LABEL maintainer="artworknataly@gmail.com"
WORKDIR ./app
COPY package*.json ./
COPY tsconfig.json ./
COPY nodemon.json ./
RUN npm install
COPY . .
EXPOSE ${PORT}
CMD ["npm", "run", "start-nodemon"]


