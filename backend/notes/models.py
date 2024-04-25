from django.db import models

# Create your models here.
class Item(models.Model):
    title=models.CharField(max_length=5000)
    content = models.CharField(max_length=5000)
    created_At=models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title

