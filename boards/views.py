from django.shortcuts import render

# Create your views here.
# boards/views.py
from rest_framework import viewsets
from .models import GuidePost, CommunityPost
from .serializers import GuidePostSerializer, CommunityPostSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class GuidePostViewSet(viewsets.ModelViewSet):
    queryset = GuidePost.objects.all().order_by('-created_at')
    serializer_class = GuidePostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class CommunityPostViewSet(viewsets.ModelViewSet):
    queryset = CommunityPost.objects.all().order_by('-created_at')
    serializer_class = CommunityPostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
