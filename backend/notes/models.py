from django.db import models
from django.contrib.auth.models import AbstractUser,Group,Permission


class Item(models.Model):
    title = models.CharField(max_length=5000)
    content = models.CharField(max_length=5000)
    created_At = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=30, unique=True)
    password = models.CharField(max_length=128)

    # Specify unique related_name for groups and user_permissions
    groups = models.ManyToManyField(Group, related_name='customuser_set')
    user_permissions = models.ManyToManyField(Permission, related_name='customuser_set')

    def __str__(self):
        return self.username

