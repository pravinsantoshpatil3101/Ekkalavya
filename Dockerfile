
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN apk add --no-cache git
RUN git clone https://github.com/pravinsantoshpatil3101/Ekkalavya.git .
RUN npm install
COPY . . 
RUN npm run build
EXPOSE 3000
CMD ["npm","start"]


