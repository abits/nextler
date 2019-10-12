FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app
# Installing dependencies
COPY package*.json ./
RUN npm --silent --only=production install

# copying source files
COPY . .

# Building app
RUN npm run build

EXPOSE 3000

# Running the app
CMD [ "npm", "start" ]