FROM node:20.5.1-slim

USER node

WORKDIR /home/nome/app

CMD ["tail", "-f", "/dev/null"]