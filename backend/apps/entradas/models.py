from statistics import mode
from django.db import models

# Create your models here.


class Noticia(models.Model):
    titulo = models.CharField(max_length=500,blank=True,null=True)
    fecha = models.DateField()
    contenido = models.TextField(blank=True,null=True)
    imagen_principal = models.ImageField(upload_to="entradas/noticias")
    def __str__(self):
        return f'{self.fecha} {self.titulo}'

class GaleriaNoticia(models.Model):
    imagen = models.ImageField(upload_to="entradas/noticias/galeria")
    entrada = models.ForeignKey(Noticia, on_delete=models.CASCADE, related_name="galeria")
    def __str__(self):
        return f'{self.entrada}'

class HaciendoDiferencia(models.Model):
    titulo = models.CharField(max_length=500,blank=True,null=True)
    fecha = models.DateField()
    contenido = models.TextField(blank=True,null=True)
    imagen_principal = models.ImageField(upload_to="entradas/galeria_haciendo_diferencia")
    def __str__(self):
        return f'{self.fecha} {self.titulo}'

class GaleriaHaciendoDiferencia(models.Model):
    imagen = models.ImageField(upload_to="entradas/galeria_haciendo_diferencia/galeria")
    entrada = models.ForeignKey(HaciendoDiferencia, on_delete=models.CASCADE, related_name="galeria")
    def __str__(self):
        return f'{self.entrada}'


class Congreso(models.Model):
    titulo = models.CharField(max_length=500,blank=True,null=True)
    fecha = models.DateField()
    contenido = models.TextField(blank=True,null=True)
    imagen_principal = models.ImageField(upload_to="entradas/congreso")
    def __str__(self):
        return f'{self.fecha} {self.titulo}'

class GaleriaCongreso(models.Model):
    imagen = models.ImageField(upload_to="entradas/congreso/galeria")
    entrada = models.ForeignKey(Congreso, on_delete=models.CASCADE, related_name="galeria")
    def __str__(self):
        return f'{self.entrada}'