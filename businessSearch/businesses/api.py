from businesses.models import Business
from rest_framework import viewsets, permissions
from .serializers import BusinessSerializer

#Business Viewset
class BusinessViewSet(viewsets.ModelViewSet):
  queryset = Business.objects.all()
  permission_classes = [
    permissions.AllowAny #we don't need to change this since we have no users
  ]
  serializer_class = BusinessSerializer