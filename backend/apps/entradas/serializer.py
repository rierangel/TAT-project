
from rest_framework import serializers
from .models import Noticia, GaleriaNoticia



class NoticiaSerializers(serializers.ModelSerializer):
    class Meta:
        model = Noticia
        fields = '__all__'



class GaleriaNoticiaSerializers(serializers.ModelSerializer):
    class Meta:
        model = GaleriaNoticia
        fields = ('imagen',)

class ViewNoticiaSerializers(serializers.ModelSerializer):
    class Meta:
        model = Noticia
        fields = '__all__'
    galeria = GaleriaNoticiaSerializers(many=True)




