from django.db import models


class Item(models.Model):
    name = models.CharField(max_length=120)
    category = models.CharField(max_length=70)
    image_url = models.CharField(max_length=200)
    description = models.TextField()
    price = models.FloatField()

    def __str__(self):
        return self.name
