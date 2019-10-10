FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app
# Installing dependencies
COPY ./package*.json ./
RUN npm --silent install

# Copying source files
COPY . .

EXPOSE 4000

# Running the app
CMD [ "npm", "start" ]