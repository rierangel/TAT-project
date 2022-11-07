from django.shortcuts import render

# Create your views here.
from .models import Noticia, GaleriaNoticia
from .serializer import NoticiaSerializers, GaleriaNoticiaSerializers


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from rest_framework.pagination import PageNumberPagination
from django.db.models import Q

from core.pagination import CustomPagination, PaginationHandlerMixinApiView


class NoticiasListView(APIView, PaginationHandlerMixinApiView):
    queryset = Noticia.objects.all().order_by("-fecha")
    serializer_class = NoticiaSerializers
    pagination_class = CustomPagination

    # List all with filter and query search
    def get(self, request, format=None, *args, **kwargs):
        """
        lista completa con paginacion: http://127.0.0.1:8000/noticias/
        filtro de año: http://127.0.0.1:8000/noticias/?page=1&year=2005
        parametro de busqueda: http://127.0.0.1:8000/noticias/?search=hola&year=2005
        """
        # products = Noticia.objects.filter(Q(title__icontains=query) | Q(description__icontains=query))
        search = request.GET.get('search', '')
        year = request.GET.get('year', '')

        queryset = Noticia.objects.all().order_by("-fecha")
        if year:
            queryset = queryset.filter(fecha__year=year)
        if search:
            queryset = queryset.filter(Q(titulo__icontains=search) | Q(contenido__icontains=search))

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_paginated_response(self.serializer_class(page, many=True).data)
        else:
            serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class NoticiaView(APIView):
    """
    url: http://127.0.0.1:8000/noticias/titulo
    """
    def get(self, request, titulo):
        queryset = Noticia.objects.filter(titulo=titulo)
        serializer = NoticiaSerializers(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)



# Informes de Viajes Nacionales
# Edictos
# Convenios
# Acuerdos
# Leyes y Decretos
# combinando
