FROM node:12
WORKDIR ./usr/src/docker_node
COPY package.json .
COPY index.js .
RUN npm install 
EXPOSE 3000
CMD npm start
