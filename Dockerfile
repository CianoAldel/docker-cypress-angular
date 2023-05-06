# BASE IMAGE
FROM node:alpine AS build
WORKDIR /build
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /build/dist/docker-cypress-angular /usr/share/nginx/html 