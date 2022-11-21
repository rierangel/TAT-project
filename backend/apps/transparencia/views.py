

from .models import A094_ManualesDeProcedimientos, A095_EstructuraOrganizativa, A096_SeguimientoDeDocumentos, A097_DescripciónDeFormularios, A098_ReglasDeProcedimiento, A102_EjecucionesPresupuestarias, A103_Estadisticas, A112_DesignaciónDeColaboradores, A113_Planilla, A113_PlanillaArchivos, A114_GastosDeRepresentación, A114_GastosDeRepresentaciónArchivos, A115_informesDeViajesNacionales, A115_informesDeViajesNacionalesResumen, A115_informesDeViajesInternacionales, A115_informesDeViajesInternacionalesResumen, A261_SolicitudDeInformaciónPresentadaALaInstitución, A262_AdjuntosDeSolicitudesResueltasYNegadas, A263_ParticipaciónCiudadana
from .serializer import A094_ManualesDeProcedimientosSerializers, A095_EstructuraOrganizativaSerializers, A096_SeguimientoDeDocumentosSerializers, A097_DescripciónDeFormulariosSerializers, A098_ReglasDeProcedimientoSerializers, A102_EjecucionesPresupuestariasSerializers, A103_EstadisticasSerializers, A112_DesignaciónDeColaboradoresSerializers, A113_PlanillaSerializers, A113_PlanillaArchivosSerializers, A114_GastosDeRepresentaciónSerializers, A114_GastosDeRepresentaciónArchivosSerializers, A115_informesDeViajesNacionalesSerializers, A115_informesDeViajesNacionalesResumenSerializers, A115_informesDeViajesInternacionalesSerializers, A115_informesDeViajesInternacionalesResumenSerializers, A261_SolicitudDeInformaciónPresentadaALaInstituciónSerializers, A262_AdjuntosDeSolicitudesResueltasYNegadasSerializers, A263_ParticipaciónCiudadanaSerializers


from rest_framework import viewsets
from rest_framework.response import Response
from django.http import FileResponse
from core.pagination import CustomPagination
from django.shortcuts import get_object_or_404
from django.db.models import Q


def make_view_with_dowload_link(model, serializer):

    class view(viewsets.ModelViewSet):
        serializer_class = serializer
        pagination_class = CustomPagination
        queryset = model.objects.all().order_by("-pk")

        def list(self, request, format=None, *args, **kwargs):
            queryset = model.objects.all().order_by("-pk")
            search = request.GET.get('search', '')
            year = request.GET.get('year', '')
            if year:
                queryset = queryset.filter(inicio_year=year)
            if search:
                queryset = queryset.filter(Q(titulo__icontains=search))

            page = self.paginate_queryset(queryset)

            if page is not None:
                serializer = self.get_serializer(page, many=True)
                return self.get_paginated_response(serializer.data)
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data)

        def retrieve(self, request, pk):
            instance = get_object_or_404(model, pk=pk)
            # get an open file handle (I'm just using a file attached to the model for this example):
            file_handle = instance.archivo.open()
            # send file
            response = FileResponse(file_handle, content_type='whatever')
            response['Content-Length'] = instance.archivo.size
            response['Content-Disposition'] = 'attachment; filename="%s"' % instance.archivo.name

            return response

    return view


A094_ManualesDeProcedimientosViewSet = make_view_with_dowload_link(
    A094_ManualesDeProcedimientos, A094_ManualesDeProcedimientosSerializers)
A095_EstructuraOrganizativaViewSet = make_view_with_dowload_link(
    A095_EstructuraOrganizativa, A095_EstructuraOrganizativaSerializers)
A096_SeguimientoDeDocumentosViewSet = make_view_with_dowload_link(
    A096_SeguimientoDeDocumentos, A096_SeguimientoDeDocumentosSerializers)
A097_DescripciónDeFormulariosViewSet = make_view_with_dowload_link(
    A097_DescripciónDeFormularios, A097_DescripciónDeFormulariosSerializers)
A098_ReglasDeProcedimientoViewSet = make_view_with_dowload_link(
    A098_ReglasDeProcedimiento, A098_ReglasDeProcedimientoSerializers)
A102_EjecucionesPresupuestariasViewSet = make_view_with_dowload_link(
    A102_EjecucionesPresupuestarias, A102_EjecucionesPresupuestariasSerializers)
A103_EstadisticasViewSet = make_view_with_dowload_link(
    A103_Estadisticas, A103_EstadisticasSerializers)
A112_DesignaciónDeColaboradoresViewSet = make_view_with_dowload_link(
    A112_DesignaciónDeColaboradores, A112_DesignaciónDeColaboradoresSerializers)
A113_PlanillaViewSet = make_view_with_dowload_link(
    A113_Planilla, A113_PlanillaSerializers)

A114_GastosDeRepresentaciónViewSet = make_view_with_dowload_link(
    A114_GastosDeRepresentación, A114_GastosDeRepresentaciónSerializers)

A115_informesDeViajesNacionalesViewSet = make_view_with_dowload_link(
    A115_informesDeViajesNacionales, A115_informesDeViajesNacionalesSerializers)

A115_informesDeViajesInternacionalesViewSet = make_view_with_dowload_link(
    A115_informesDeViajesInternacionales, A115_informesDeViajesInternacionalesSerializers)


A261_SolicitudDeInformaciónPresentadaALaInstituciónViewSet = make_view_with_dowload_link(
    A261_SolicitudDeInformaciónPresentadaALaInstitución, A261_SolicitudDeInformaciónPresentadaALaInstituciónSerializers)
A262_AdjuntosDeSolicitudesResueltasYNegadasViewSet = make_view_with_dowload_link(
    A262_AdjuntosDeSolicitudesResueltasYNegadas, A262_AdjuntosDeSolicitudesResueltasYNegadasSerializers)



A263_ParticipaciónCiudadanaViewSet = make_view_with_dowload_link(
    A263_ParticipaciónCiudadana, A263_ParticipaciónCiudadanaSerializers)





class A113_PlanillaArchivosViewSet(viewsets.ModelViewSet):
    serializer_class = A113_PlanillaArchivosSerializers
    queryset = A113_PlanillaArchivos.objects.all()

    def list(self, request, format=None, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer([queryset], many=True)
        return Response(serializer.data)

class A114_GastosDeRepresentaciónArchivosViewSet(viewsets.ModelViewSet):
    serializer_class = A114_GastosDeRepresentaciónArchivosSerializers
    queryset = A114_GastosDeRepresentaciónArchivos.objects.all()

    def list(self, request, format=None, *args, **kwargs):
        queryset = self.get_queryset()

        serializer = self.get_serializer([queryset], many=True)
        return Response(serializer.data)

class A115_informesDeViajesNacionalesResumenViewSet(viewsets.ModelViewSet):
    serializer_class = A115_informesDeViajesNacionalesResumenSerializers
    queryset = A115_informesDeViajesNacionalesResumen.objects.all()

    def list(self, request, format=None, *args, **kwargs):
        queryset = self.get_queryset()

        serializer = self.get_serializer([queryset], many=True)
        return Response(serializer.data)

class A115_informesDeViajesInternacionalesResumenViewSet(viewsets.ModelViewSet):
    serializer_class = A115_informesDeViajesInternacionalesResumenSerializers
    queryset = A115_informesDeViajesInternacionalesResumen.objects.all()

    def list(self, request, format=None, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer([queryset], many=True)
        return Response(serializer.data)




# class A261_SolicitudDeInformaciónPresentadaALaInstituciónViewSet(viewsets.ModelViewSet):
#     serializer_class = A261_SolicitudDeInformaciónPresentadaALaInstituciónSerializers
#     queryset = A261_SolicitudDeInformaciónPresentadaALaInstitución.objects.last()

#     def list(self, request, format=None, *args, **kwargs):
#         queryset = self.get_queryset()
#         serializer = self.get_serializer([queryset], many=True)
#         return Response(serializer.data)

# class A262_AdjuntosDeSolicitudesResueltasYNegadasViewSet(viewsets.ModelViewSet):
#     serializer_class = A262_AdjuntosDeSolicitudesResueltasYNegadasSerializers
#     queryset = A262_AdjuntosDeSolicitudesResueltasYNegadas.objects.last()

#     def list(self, request, format=None, *args, **kwargs):
#         queryset = self.get_queryset()
#         serializer = self.get_serializer([queryset], many=True)
#         return Response(serializer.data)