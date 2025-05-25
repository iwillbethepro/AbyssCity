# boards/serializers.py
from rest_framework import serializers
from .models import GuidePost, CommunityPost

class GuidePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = GuidePost
        fields = '__all__'

class CommunityPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommunityPost
        fields = '__all__'
