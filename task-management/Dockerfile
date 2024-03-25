FROM node:latest as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./ .
RUN npm run buildFROM nginx:latest
RUN mkdir /app
COPY --from=build /app/dist/task-management/ /app
COPY nginx.conf /etc/nginx/nginx.conf
USER nginx