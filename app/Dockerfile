FROM node:lts

WORKDIR /usr/src/app

#=------ DOCKERIZE usado para verificar se uma imagem/container já subiu ----=
RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz
#=--------------------------------------------------------------------------=

COPY . .

#=------ Install deps ------------------------------------------------------=
RUN npm install && npm install -g sequelize-cli  && chmod +x startup.sh
#=--------------------------------------------------------------------------=

EXPOSE 3001

#=------ RUN sequelize db:create ------------------------------------------------------=# 
ENTRYPOINT [ "sh", "startup.sh" ]
#=--------------------------------------------------------------------------=