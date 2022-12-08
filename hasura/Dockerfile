FROM debian:buster-slim

RUN apt-get update -y && apt-get install --no-install-recommends -y curl socat ca-certificates \
	&& apt-get clean \
	&& rm -rf /var/lib/apt/lists/*
RUN curl -L https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh | VERSION=v2.15.2 bash

WORKDIR /usr/src/hasura