
# Create your views here.
from django.shortcuts import get_object_or_404
from .serializer import OficinaSerializers, DepartamentoSerializers
from .models import Oficina, Departamento

from rest_framework import viewsets
from rest_framework.response import Response

class OficinaViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """
    def list(self, request):
        queryset = Oficina.objects.all().order_by("-order")
        serializer = OficinaSerializers(queryset, many=True)
        return Response(serializer.data)

class DepartamentoViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """
    def list(self, request):
        queryset = Departamento.objects.all()#.order_by("-order")
        serializer = DepartamentoSerializers(queryset, many=True)
        return Response(serializer.data)