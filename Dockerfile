# builds the application
FROM node:22.14.0-alpine as build
WORKDIR /usr
COPY ["eslint.config.js", "package.json", "package-lock.json", "tsconfig.json", "vite.config.ts", "svelte.config.js", "./"]
COPY src ./src
RUN npm install 
RUN npm run build

# outputs the production app
FROM node:22.14.0-alpine as output
WORKDIR /usr
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
RUN npm install pm2 -g
COPY --from=build /usr/build ./
EXPOSE 3000

# Do not run as root
RUN addgroup -S localgroup
RUN adduser -S localuser -G localgroup
USER localuser

CMD ["pm2-runtime","index.js"]
