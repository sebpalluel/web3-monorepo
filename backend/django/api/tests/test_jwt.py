import json
import pytest
from django.test import client

from api.models import User


@pytest.mark.django_db
class TestJWT:
    def test_token_story(cls, c):
        # note that we are not using client.admin here to avoid login in user and getting false positive

        # 1. Log in and request refresh and access token
        res = client.Client().post(
            '/api/token/',  # POST : accepts username and password. Returns access and refresh tokens.
            dict(
                username='admin',
                password='Montreuil#',
            ),
            'application/json',  # todo: 'application/json' breaks requests here
        )

        assert res.status_code == 200
        assert 'refresh' in res.data
        assert 'access' in res.data

        refresh_token = res.data['refresh']
        access_token = res.data['access']

        # 2. Validate token by hitting endpoint

        res = client.Client().post(
            '/api/logic/hotdog/',
            json.dumps(
                dict(
                    input=dict(
                        food='apple'
                    )
                )
            ),
            'json',
            HTTP_AUTHORIZATION=f"Bearer {access_token}",
        )
        assert res.status_code == 200

        res_json = json.loads(res.content)
        assert 'hotdog' in res_json
