FROM node:alpine

RUN mkdir -p /usr/src/preservetube/redirector
WORKDIR /usr/src/preservetube/redirector

COPY . /usr/src/preservetube/redirector
RUN yarn

CMD ["node", "index.js"]