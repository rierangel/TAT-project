
from rest_framework import serializers
from .models import Oficina, Departamento



class OficinaSerializers(serializers.ModelSerializer):
    class Meta:
        model = Oficina
        fields = '__all__'

class DepartamentoSerializers(serializers.ModelSerializer):
    class Meta:
        model = Departamento
        fields = '__all__'








