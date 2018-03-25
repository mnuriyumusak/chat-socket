FROM ubuntu:16.04
RUN apt-get update -y
RUN apt-get install -y 
RUN apt-get install npm -y
RUN apt-get install curl -y
RUN npm install -g n
RUN n stable
RUN npm install socket.io
RUN npm install express --save
COPY . /app
WORKDIR /app
WORKDIR /app
ENTRYPOINT ["node", "index.js"] 



