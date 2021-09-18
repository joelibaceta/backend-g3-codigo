from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    usu_nom = models.CharField(max_length=50)
    usu_ape=models.CharField(max_length=50)
    usu_tipo=models.CharField(max_length=50)