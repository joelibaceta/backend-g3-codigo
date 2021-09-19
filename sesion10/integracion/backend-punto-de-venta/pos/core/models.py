from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.deletion import CASCADE

# Create your models here.
class User(AbstractUser):
    usu_nom = models.CharField(max_length=50)
    usu_ape=models.CharField(max_length=50)
    usu_tipo=models.CharField(max_length=50)

class Mesa(models.Model):
    mesa_nro = models.IntegerField(null=True, blank=True)
    mesa_cap = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Categoria(models.Model):
    categoria_nom = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Plato(models.Model):
    plato_pre = models.FloatField()
    plato_nom = models.CharField(max_length=50)
    plato_img = models.ImageField(upload_to="plato_fotos")
    categoria = models.ForeignKey(Categoria, on_delete=CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

