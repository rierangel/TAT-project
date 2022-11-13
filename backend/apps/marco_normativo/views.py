from django.shortcuts import render

# Create your views here.



from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from rest_framework.pagination import PageNumberPagination

from django.db.models import Q


from .models import  Competencia
from .serializer import CompetenciaSerializers

class CompetenciaList(APIView):
    queryset = Competencia.objects.all().order_by("-order")
    serializer_class = CompetenciaSerializers

    def get(self, request, format=None, *args, **kwargs):
        
        queryset = Competencia.objects.all().order_by("-order")
        serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
        
# leyes y decretos
# acuerdos