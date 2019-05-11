from django.db import models

# Create your models here.
class Business(models.Model):
  name = models.CharField(max_length=150)
  businessId = models.IntegerField(unique=True)
  registrationDate = models.CharField(max_length=200)
  companyForm = models.CharField(max_length=200, blank=True)
  detailsUri = models.CharField(max_length=500, blank=True)
  bisDetailsUri = models.CharField(max_length=500, blank=True)