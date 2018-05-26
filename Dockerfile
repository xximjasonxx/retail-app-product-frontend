FROM node:carbon
WORKDIR /app

# COPY package*.json ./
# RUN npm install --silent
# RUN npm install react-scripts@1.1.1 -g --silent

CMD [ "npm", "start" ]