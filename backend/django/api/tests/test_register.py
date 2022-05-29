import pytest
from django.test import client

endpoint = '/api/user/register/'

from api.models import User


@pytest.mark.django_db
class TestUser:
    def test_register_by_external(cls, c):
        assert c.external.post(endpoint).status_code == 401

    def test_register_by_already_registered(cls, c):
        assert c.admin.post(endpoint).status_code == 400

    def test_register_with_invalid_email(cls, c):
        res = client.Client().post(
            endpoint,
            dict(
                username='toto',
                email='notanemail.com',
            ),
        )
        assert res.status_code == 400
        data = res.json()
        assert 'email' in data

    def test_register_ok(cls, c):
        username = 'foo'
        email = 'foo@governance.io'
        res = client.Client().post(
            endpoint,
            dict(
                username=username,
                email=email,
                password='Montreuil#',
            ),
            'application/json',
        )
        assert res.status_code == 201
        data = res.data
        assert 'id' in data
        assert 'email' in data
        assert 'username' in data
        assert 'tokens' in data
        assert 'refresh' in data['tokens']
        assert 'access' in data['tokens']
        assert data['email'] == email
