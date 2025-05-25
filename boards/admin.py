# Register your models here.
from django.contrib import admin
from .models import GuidePost, CommunityPost

admin.site.register(GuidePost)
admin.site.register(CommunityPost)
