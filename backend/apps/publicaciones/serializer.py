
from rest_framework import serializers
from .models import Resolucion, CategoriasResoluciones



class CategoriasResolucionesSerializers(serializers.ModelSerializer):
    class Meta:
        model = CategoriasResoluciones
        fields = '__all__'

class ResolucionSerializers(serializers.ModelSerializer):
    class Meta:
        model = Resolucion
        fields = '__all__'










