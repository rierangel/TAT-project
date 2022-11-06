from email.policy import default
from django.db import models

# Create your models here.


class Oficina(models.Model):
    lugar = models.CharField(max_length=500)
    order = models.IntegerField(default=1)
    calle = models.CharField(max_length=500, blank=True, null=True)
    tlf = models.CharField(max_length=500, blank=True, null=True)
    correo = models.EmailField(max_length=500, blank=True, null=True)
    mapa = models.URLField()
    def __str__(self):
        return self.lugar

class Departamento(models.Model):
    titulo = models.CharField(max_length=200)
    telefono = models.CharField(max_length=200)
    def __str__(self):
        return self.titulo