from email.policy import default
from django.db import models

# Create your models here.



class CategoriasResoluciones(models.Model):
    titulo = models.CharField(max_length=500)
    def __str__(self):
        return self.titulo

class Resolucion(models.Model):
    titulo = models.CharField(max_length=500)
    año = models.IntegerField(default=2020)
    archivo = models.FileField(upload_to='uploads/resoluciones/%Y/%m/%d/')
    tag = models.ForeignKey(CategoriasResoluciones, on_delete=models.CASCADE, related_name="resolucion")

    @property
    def categoria(self):
        return self.tag.titulo
    @property
    def ver(self):
        return self.archivo.url
    @property
    def descargar(self):
        return self.pk
    def __str__(self):
        return self.titulo

class Ponencia(models.Model):
    titulo = models.CharField(max_length=500)
    def __str__(self):
        return self.titulo

class PonenciasArchivos(models.Model):
    titulo = models.CharField(max_length=500)
    archivo = models.FileField(upload_to='uploads/ponencias/%Y/%m/%d/')
    categoria = models.ForeignKey(Ponencia, on_delete=models.CASCADE, related_name="archivos")

    @property
    def ver(self):
        return self.archivo.url
    @property
    def descargar(self):
        return self.pk
        
    def __str__(self):
        return self.titulo

class RevistasTributaria(models.Model):
    titulo = models.CharField(max_length=500)
    archivo = models.FileField(upload_to='uploads/revistas-tributaria/%Y/%m/%d/')

    @property
    def ver(self):
        return self.archivo.url
    @property
    def descargar(self):
        return self.pk
    def __str__(self):
        return self.titulo


