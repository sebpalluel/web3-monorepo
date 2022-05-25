import pytest

from django.core.management import call_command
from rest_framework.test import APIClient

from api.models import User

# Use an In-Memory File Storage Backend
DEFAULT_FILE_STORAGE = "inmemorystorage.InMemoryStorage"


# Populate the test database
@pytest.fixture(scope='session')
def django_db_setup(django_db_setup, django_db_blocker):
    with django_db_blocker.unblock():
        call_command('loaddata', 'data.json')


class TestService:
    def __init__(self):
        self.cache = dict()

    def client(self, email):
        user = User.objects.get(email=email)

        c = APIClient()
        c.force_authenticate(user)
        c.force_login(user)
        c.user = user
        return c

    @property
    def external(self):
        return APIClient()

    def __getattr__(self, name):
        clients = ('admin',
                   'test',
                   )
        if name in clients:
            if name in self.cache:
                return self.cache[name]
            self.cache[name] = self.client(name)
            return self.cache[name]
        raise AttributeError(name)


@pytest.fixture
def c(db):
    pytest.t = TestService()
    yield pytest.t
