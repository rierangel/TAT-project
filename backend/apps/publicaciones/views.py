
# Create your views here.
from django.shortcuts import get_object_or_404
from .serializer import ResolucionSerializers
from .models import Resolucion

from rest_framework import viewsets
from rest_framework.response import Response

class ResolucionViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = Resolucion.objects.all()
        serializer = ResolucionSerializers(queryset, many=True)
        return Response(serializer.data)

