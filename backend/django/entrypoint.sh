#!/bin/bash -x
echo "Make Migrations"
python manage.py makemigrations --noinput
echo "Migrate DB"
python manage.py migrate --noinput || exit 1
echo "Start server"
python manage.py runserver 0.0.0.0:8000