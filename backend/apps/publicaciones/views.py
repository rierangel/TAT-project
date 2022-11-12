
# Create your views here.
from django.shortcuts import get_object_or_404

from rest_framework import viewsets, renderers
from rest_framework.views import APIView
from rest_framework import status


from rest_framework.response import Response
from rest_framework.decorators import action

from django.http import FileResponse

from core.pagination import PaginationHandlerMixinApiView, CustomPagination
  
from django.db.models import Q


from .serializer import ResolucionSerializers, CategoriasResolucionesSerializers, PonenciasSerializers, RevistasTributariaSerializers
from .models import Resolucion, CategoriasResoluciones, Ponencia, PonenciasArchivos, RevistasTributaria


class ResolucionViewSet(viewsets.ModelViewSet):
    """
    url: http://localhost:8000/publicaciones/resoluciones/
    """
    serializer_class = ResolucionSerializers
    pagination_class = CustomPagination
    queryset = Resolucion.objects.all().order_by("-pk")

    def list(self, request, format=None, *args, **kwargs):
        queryset = Resolucion.objects.all().order_by("-pk")

        search = request.GET.get('search', '')
        year = request.GET.get('year', '')
        tag = request.GET.get('tag', '')

        if year:
            queryset = queryset.filter(año=year)
        if search:
            queryset = queryset.filter(Q(titulo__icontains=search))
        if tag:
            queryset = queryset.filter(tag__titulo=tag)


        page = self.paginate_queryset(queryset)


        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk):
        instance = get_object_or_404(Resolucion, pk=pk )
        # get an open file handle (I'm just using a file attached to the model for this example):
        file_handle = instance.archivo.open()
        # send file
        response = FileResponse(file_handle, content_type='whatever')
        response['Content-Length'] = instance.archivo.size
        response['Content-Disposition'] = 'attachment; filename="%s"' % instance.archivo.name

        return response


class CategoriasResolucionViewSet(viewsets.ModelViewSet):
    """
    url: http://localhost:8000/publicaciones/categorias-resoluciones/
    """
    queryset = CategoriasResoluciones.objects.all().order_by("-pk")
    serializer_class = CategoriasResolucionesSerializers
    pagination_class = None


class PonenciasViewSet(viewsets.ModelViewSet):
    """
    url: http://localhost:8000/publicaciones/Ponenciases/
    """
    serializer_class = PonenciasSerializers
    pagination_class = None #CustomPagination
    queryset = Ponencia.objects.all().order_by("-titulo")

    def list(self, request, format=None, *args, **kwargs):

        page = self.paginate_queryset(self.queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(self.queryset, many=True)

        return Response(serializer.data)

    def retrieve(self, request, pk):
        instance = get_object_or_404(PonenciasArchivos, pk=pk )
        # get an open file handle (I'm just using a file attached to the model for this example):
        file_handle = instance.archivo.open()
        # send file
        response = FileResponse(file_handle, content_type='whatever')
        response['Content-Length'] = instance.archivo.size
        response['Content-Disposition'] = 'attachment; filename="%s"' % instance.archivo.name

        return response


class RevistasTributariaViewSet(viewsets.ModelViewSet):
    """
    url: http://localhost:8000/publicaciones/revista-tributaria/
    """
    serializer_class = RevistasTributariaSerializers
    pagination_class = CustomPagination
    queryset = RevistasTributaria.objects.all().order_by("-pk")

    def list(self, request, format=None, *args, **kwargs):

        page = self.paginate_queryset(self.queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(self.queryset, many=True)

        return Response(serializer.data)

    def retrieve(self, request, pk):
        instance = get_object_or_404(RevistasTributaria, pk=pk )
        # get an open file handle (I'm just using a file attached to the model for this example):
        file_handle = instance.archivo.open()
        # send file
        response = FileResponse(file_handle, content_type='whatever')
        response['Content-Length'] = instance.archivo.size
        response['Content-Disposition'] = 'attachment; filename="%s"' % instance.archivo.name

        return response


# Otras publicaciones
# memorias