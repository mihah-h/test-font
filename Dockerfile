FROM node:18-alpine as build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:1.21
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/test-font/browser /usr/share/nginx/html

EXPOSE 80
