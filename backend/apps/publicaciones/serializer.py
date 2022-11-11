
from rest_framework import serializers
from .models import Resolucion, CategoriasResoluciones, PonenciaEntrada, Ponencia


class CategoriasResolucionesSerializers(serializers.ModelSerializer):
    class Meta:
        model = CategoriasResoluciones
        fields = ('titulo',)


class ResolucionSerializers(serializers.ModelSerializer):

    # def is_named_bar(self):
    #     return self.ver == "bar"
    ver = serializers.SerializerMethodField(source='ver')
    categoria = serializers.SerializerMethodField(source='categoria')

    class Meta:
        model = Resolucion
        fields = ('titulo', 'año', 'categoria', 'ver', 'descargar')

    def get_ver(self, obj):
        return obj.ver

    def get_descargar(self, obj):
        return obj.ver

    def get_categoria(self, obj):
        return obj.categoria


class EntradasPonenciasSerializers(serializers.ModelSerializer):


    class Meta:
        model = PonenciaEntrada
        # fields = '__all__'

        fields = ('titulo', 'ver', 'descargar')

    def get_ver(self, obj):
        return obj.ver

    def get_descargar(self, obj):
        return obj.ver



class PonenciasSerializers(serializers.ModelSerializer):
    class Meta:
        model = Ponencia
        fields = '__all__'
    entradas = EntradasPonenciasSerializers(many=True)