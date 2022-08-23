FROM debian:buster-slim

RUN apt-get update -y && apt-get install -y curl socat
RUN curl -L https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh | INSTALL_PATH=$HOME/bin bash

WORKDIR /usr/src/hasura