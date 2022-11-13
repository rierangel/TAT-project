from django.shortcuts import render

# Create your views here.
from .models import  Competencias
from .serializer import CompetenciasSerializers


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from rest_framework.pagination import PageNumberPagination

from django.db.models import Q

class CompetenciasList(APIView):
    queryset = Competencias.objects.all().order_by("-order")
    serializer_class = CompetenciasSerializers

    def get(self, request, format=None, *args, **kwargs):
        
        queryset = Competencias.objects.all().order_by("-order")
        serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
        
# leyes y decretos
# acuerdos