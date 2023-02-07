SHELL := /bin/bash

.PHONY: hasura-console install run clean db-clean db-migrate db-dump prune update populate-backend django-bash test-web generate-gql web

all: run

install:
	@pnpm i

build:
	@docker-compose -f docker-compose.yaml --env-file .env.local build

build-no-cache:
	@docker-compose -f docker-compose.yaml --env-file .env.local build --no-cache

run: install build
	
build-run-no-cache:	build-no-cache
	run-no-cache

prune:
	@docker-compose -f docker-compose.yaml --env-file .env.local down
	@docker-compose -f docker-compose.yaml --env-file .env.local rm -f

clean:	prune
	@pnpm run clean

db-clean:
	@docker-compose -f docker-compose.yaml down
	@docker volume rm db_data prisma_db_data
	@docker-compose -f docker-compose.yaml --env-file .env.local up

restart-hasura:
	@docker-compose -f docker-compose.yaml --env-file .env.local restart hasura-engine
