import pytest
from django.test import client

from api.models import User


@pytest.mark.django_db
class TestJWT:
    def test_token(cls, c):
        # POST : accepts username and password. Returns access and refresh tokens.
        res = c.admin.post(
            '/api/token/',
            dict(
                username='admin',
                password='Montreuil#',
            ),
            'json', # todo: 'application/json' breaks requests here
        )
        assert res.status_code == 200
        assert 'refresh' in res.data['tokens']
        assert 'access' in res.data['tokens']
        breakpoint()

