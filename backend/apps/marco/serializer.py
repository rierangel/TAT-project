
from rest_framework import serializers
from .models import Competencias


class CompetenciasSerializers(serializers.ModelSerializer):
    class Meta:
        model = Competencias
        fields = '__all__'







