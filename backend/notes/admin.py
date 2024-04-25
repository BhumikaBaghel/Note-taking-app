from django.contrib import admin
from .models import Item
from .models import CustomUser

# Register your models here.
admin.site.register(CustomUser)
admin.site.register(Item)

