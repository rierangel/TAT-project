
from rest_framework import serializers
from .models import Competencia


class CompetenciaSerializers(serializers.ModelSerializer):
    class Meta:
        model = Competencia
        fields = '__all__'







