FROM node:boron

RUN mkdir -p /usr/src/app

COPY . /usr/src/app

WORKDIR /usr/src/app/MLS_GAP_BIOME_LIVEDOCS

EXPOSE 8080

CMD ["npm", "start"]