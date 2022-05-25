#!/bin/bash -x
echo "Make Migrations"
python manage.py makemigrations --noinput
echo "Migrate DB"
python manage.py migrate --noinput || exit 1
echo "Creating cache table"
python manage.py createcachetable # todo: document why this is useful
if [ "$DJANGO_SUPERUSER_USERNAME" ]
then
    echo "Creating super user"
    python manage.py createsuperuser \
        --noinput
fi
echo "Loading dump"
python manage.py loaddata dump.json
echo "Start server"
python manage.py runserver 0.0.0.0:8000
