from email.policy import default
from django.db import models

# Create your models here.
import datetime
from django.utils.translation import gettext_lazy as _

class Competencias(models.Model):
    titulo = models.CharField(max_length=500)
    order = models.IntegerField(default=1)
    text = models.TextField()
    def __str__(self):
        return self.titulo


# solo año parametro de busqueda

YEAR_CHOICES = []
for r in range(2005, (datetime.datetime.now().year+1)):
    YEAR_CHOICES.append((r,r))


class LeyesYDecretos(models.Model):
    titulo = models.CharField(max_length=500)
    año = models.IntegerField(_('año'), choices=YEAR_CHOICES, default=datetime.datetime.now().year)
    archivo = models.FileField(max_length=500)
    def __str__(self):
        return self.titulo

class Acuerdos(models.Model):
    titulo = models.CharField(max_length=500)
    año = models.IntegerField(_('año'), choices=YEAR_CHOICES, default=datetime.datetime.now().year)
    archivo = models.FileField(max_length=500)
    def __str__(self):
        return self.titulo

class Convenios(models.Model):
    titulo = models.CharField(max_length=500)
    año = models.IntegerField(_('año'), choices=YEAR_CHOICES, default=datetime.datetime.now().year)
    archivo = models.FileField(max_length=500)
    def __str__(self):
        return self.titulo

class Edictos(models.Model):
    titulo = models.CharField(max_length=500)
    año = models.IntegerField(_('año'), choices=YEAR_CHOICES, default=datetime.datetime.now().year)
    archivo = models.FileField(max_length=500)
    def __str__(self):
        return self.titulo

class Flujograma(models.Model):
    titulo = models.CharField(max_length=500)
    inicio = models.DateField(auto_now=True)
    final = models.DateField(auto_now=True)
    archivo = models.FileField(max_length=500)
    def __str__(self):
        return self.titulo

# Leyes y Decretos año | descargar
# acuerdos año | descargar
# Convenios año | descargar
# Edictos año | vigencia descargar
# flujograma | descargar