
# Create your views here.
from django.shortcuts import get_object_or_404
from .serializer import ResolucionSerializers
from .models import Resolucion

from rest_framework import viewsets, renderers
from rest_framework.views import APIView
from rest_framework import status


from rest_framework.response import Response
from rest_framework.decorators import action

from django.http import FileResponse

from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination

from core.pagination import PaginationHandlerMixinApiView, CustomPagination
  
from django.db.models import Q


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

        if year:
            queryset = queryset.filter(año=year)
        if search:
            queryset = queryset.filter(Q(titulo__icontains=search))


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
    url: http://localhost:8000/publicaciones/categorias/
    """
    queryset = Resolucion.objects.all().order_by("-pk")
    serializer_class = ResolucionSerializers
    pagination_class = CustomPagination

    def list(self, request):
        page = self.paginate_queryset(self.queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(self.queryset, many=True)
        return Response( serializer.data)

    def retrieve(self, request, pk):
        instance = get_object_or_404(Resolucion, pk=pk )
        # get an open file handle (I'm just using a file attached to the model for this example):
        file_handle = instance.archivo.open()
        # send file
        response = FileResponse(file_handle, content_type='whatever')
        response['Content-Length'] = instance.archivo.size
        response['Content-Disposition'] = 'attachment; filename="%s"' % instance.archivo.name

        return response

