
<<<<<<< HEAD
FROM node:18-alpine
=======
FROM node:20-alpine
>>>>>>> 93dfc1cd011b1c8aa70e530af1dcd36e39c726f5
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . . 
RUN npm run build
EXPOSE 3000
<<<<<<< HEAD
CMD ["npm","start"]
=======
CMD ["npm","start"]
>>>>>>> 93dfc1cd011b1c8aa70e530af1dcd36e39c726f5
