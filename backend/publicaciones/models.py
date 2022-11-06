from email.policy import default
from django.db import models

# Create your models here.


def upload_path(instance, filename):
    if " " in instance.nombre:
        instance.nombre.replace(" ", "_")
    return '/'.join(['equipo_y_autoridades',instance.nombre, filename])

class CategoriasResoluciones(models.Model):
    titulo = models.CharField(max_length=500, unique=True)
    
    def __str__(self):
        return self.titulo

class Resolucion(models.Model):
    titulo = models.CharField(max_length=500, unique=True)
    año = models.IntegerField(default=2020 ,max_length=4)
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

