import pytest
from django.test import client

endpoint = '/api/user/register/'

from api.models import User


@pytest.mark.django_db
class TestUser:
    def test_post_by_external(cls, c):
        assert c.external.post(endpoint).status_code == 400

