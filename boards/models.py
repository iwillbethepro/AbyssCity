from django.db import models

# Create your models here.
from django.db import models
from django.conf import settings

class GuidePost(models.Model):
    title       = models.CharField(max_length=200)
    content     = models.TextField()
    author      = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class CommunityPost(models.Model):
    title       = models.CharField(max_length=200)
    content     = models.TextField()
    author      = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
