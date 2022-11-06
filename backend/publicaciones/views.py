
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

class PassthroughRenderer(renderers.BaseRenderer):
    """
        Return data as-is. View should supply a Response.
    """
    media_type = ''
    format = ''
    def render(self, data, accepted_media_type=None, renderer_context=None):
        return data


class ResolucionViewSet(viewsets.ViewSet):
    """
    url: http://localhost:8000/publicaciones/resoluciones/
    """
    def list(self, request):
        queryset = Resolucion.objects.all()
        for i in queryset:
            print(i)
        serializer = ResolucionSerializers(queryset, many=True)
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

