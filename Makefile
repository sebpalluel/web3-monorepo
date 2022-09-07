SHELL := /bin/bash

.PHONY: hasura-console install run clean db-clean db-migrate db-dump prune update populate-backend django-bash test-web generate-gql web

all: run

install:
	@pnpm i

web:
	@pnpm start

build:
	@docker-compose -f docker-compose.yaml --env-file .env.local build

build-no-cache:
	@docker-compose -f docker-compose.yaml --env-file .env.local build --no-cache

# # django create superuser username / password and email are set in environment variables
# populate-backend:
# 	@docker-compose exec backend-django ./manage.py createsuperuser --noinput

run: build web
	
# run-no-cache:
# 		@docker-compose -f docker-compose.yaml --env-file .env.local up --force-recreate


build-run-no-cache:	build-no-cache
	run-no-cache

update:
	@git submodule init
	@git submodule update
	@git submodule foreach 'git checkout main && git pull || :'

prune:
	@docker-compose -f docker-compose.yaml --env-file .env.local down
	@docker-compose -f docker-compose.yaml --env-file .env.local rm -f

clean:	prune
	@pnpm run clean

# django-bash:
# 	@docker-compose -f docker-compose.yaml exec backend-django bash

db-clean:
	@docker-compose -f docker-compose.yaml down
	@docker volume rm governance_db_data
	@docker-compose -f docker-compose.yaml --env-file .env.local up

# db-migrate:
# 	@docker-compose -f docker-compose.yaml exec backend-django python manage.py migrate

# db-dump:
# 	@docker-compose -f docker-compose.yaml exec backend-django python manage.py dumpdata --indent=4 api.User api.Profile > backend/django/dump.json

restart-hasura:
	@docker-compose -f docker-compose.yaml --env-file .env.local restart hasura-engine

idpkit:
	@docker-compose -f docker-compose.yaml --env-file .env.local exec idpkit ./bin/waltid-idpkit

idpkit-register-client:
	@docker-compose -f docker-compose.yaml --env-file .env.local exec idpkit ./bin/waltid-idpkit config --oidc clients register -n "MyApp" --all-redirect-uris