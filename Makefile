SHELL := /bin/bash

.PHONY: hasura-console install run clean db-clean db-migrate db-dump prune update populate-backend django-bash test-frontend-client generate-gql

all: run

install:
	@npm i

build:
	@docker-compose -f ./local/docker-compose.yaml build

# django create superuser username / password and email are set in environment variables
populate-backend:
	@docker-compose exec backend-django ./manage.py createsuperuser --noinput

run:	build
	@docker-compose -f ./local/docker-compose.yaml up

update:
	@git submodule init
	@git submodule update
	@git submodule foreach 'git checkout main && git pull || :'

prune:
	@docker-compose -f ./local/docker-compose.yaml rm -f

clean:	prune
	@npm run clean

django-bash:
	@docker-compose -f ./local/docker-compose.yaml exec backend-django bash

db-clean:
	@docker-compose -f ./local/docker-compose.yaml down
	@docker volume rm governance_db_data
	@docker-compose -f ./local/docker-compose.yaml up

db-migrate:
	@docker-compose -f ./local/docker-compose.yaml exec backend-django python manage.py migrate

db-dump:
	@docker-compose -f ./local/docker-compose.yaml exec backend-django python manage.py dumpdata --indent=4 api.User api.Profile > backend/django/dump.json

# frontend
test-frontend-client:
	@docker-compose -f ./local/docker-compose.yaml exec frontend-client yarn test
generate-gql:
	@docker-compose -f ./local/docker-compose.yaml exec frontend-client yarn generate-gql