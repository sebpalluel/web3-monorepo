from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth import get_user_model
from api.models import Profile

User = get_user_model()



# Define an inline admin descriptor for Employee model
# which acts a bit like a singleton
class profileInline(admin.StackedInline):
    model = Profile
    can_delete = False
    verbose_name_plural = 'profiles'

# Define a new User admin
class UserAdmin(BaseUserAdmin):
    model = User
    inlines = (profileInline,)

# Re-register UserAdmin
admin.site.register(User, UserAdmin)
