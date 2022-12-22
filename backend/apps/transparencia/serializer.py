
from rest_framework import serializers
from .models import A094_ManualesDeProcedimientos, A095_EstructuraOrganizativa, A096_SeguimientoDeDocumentos, A097_DescripciónDeFormularios, A098_ReglasDeProcedimiento, A102_EjecucionesPresupuestarias, A103_Estadisticas, A112_DesignaciónDeColaboradores, A113_Planilla, A113_PlanillaArchivos, A114_GastosDeRepresentación, A114_GastosDeRepresentaciónArchivos, A115_informesDeViajesNacionales, A115_informesDeViajesNacionalesResumen, A115_informesDeViajesInternacionales, A115_informesDeViajesInternacionalesResumen, A261_SolicitudDeInformaciónPresentadaALaInstitución, A262_AdjuntosDeSolicitudesResueltasYNegadas, A263_ParticipaciónCiudadana, A00Estaticos


class A00StaticosSerializers(serializers.ModelSerializer):
    class Meta:
        model = A00Estaticos
        fields = ('__all__')



class A094_ManualesDeProcedimientosSerializers(serializers.ModelSerializer):
    class Meta:
        model = A094_ManualesDeProcedimientos
        fields = ('titulo', 'ver', 'descargar')

    def get_ver(self, obj):
        return obj.ver

    def get_descargar(self, obj):
        return obj.pk


class A095_EstructuraOrganizativaSerializers(serializers.ModelSerializer):
    class Meta:
        model = A095_EstructuraOrganizativa
        fields = ('titulo', 'ver', 'descargar')

    def get_ver(self, obj):
        return obj.ver

    def get_descargar(self, obj):
        return obj.pk


class A096_SeguimientoDeDocumentosSerializers(serializers.ModelSerializer):
    class Meta:
        model = A096_SeguimientoDeDocumentos
        fields = ('titulo', 'ver', 'descargar')

    def get_ver(self, obj):
        return obj.ver

    def get_descargar(self, obj):
        return obj.pk


class A097_DescripciónDeFormulariosSerializers(serializers.ModelSerializer):
    class Meta:
        model = A097_DescripciónDeFormularios
        fields = ('titulo', 'ver', 'descargar')

    def get_ver(self, obj):
        return obj.ver

    def get_descargar(self, obj):
        return obj.pk


class A098_ReglasDeProcedimientoSerializers(serializers.ModelSerializer):
    class Meta:
        model = A098_ReglasDeProcedimiento
        fields = ('titulo', 'ver', 'descargar')

    def get_ver(self, obj):
        return obj.ver

    def get_descargar(self, obj):
        return obj.pk

class A102_EjecucionesPresupuestariasSerializers(serializers.ModelSerializer):
    class Meta:
        model = A102_EjecucionesPresupuestarias
        fields = '__all__'


class A103_EstadisticasSerializers(serializers.ModelSerializer):
    class Meta:
        model = A103_Estadisticas
        fields = ('titulo', 'ver', 'descargar')

    def get_ver(self, obj):
        return obj.ver

    def get_descargar(self, obj):
        return obj.pk



class A112_DesignaciónDeColaboradoresSerializers(serializers.ModelSerializer):
    class Meta:
        model = A112_DesignaciónDeColaboradores
        fields = ('titulo', 'ver', 'descargar')

    def get_ver(self, obj):
        return obj.ver

    def get_descargar(self, obj):
        return obj.pk


class A113_PlanillaSerializers(serializers.ModelSerializer):
    class Meta:
        model = A113_Planilla
        fields = '__all__'


class A113_PlanillaArchivosSerializers(serializers.ModelSerializer):
    class Meta:
        model = A113_PlanillaArchivos
        fields = '__all__'



class A114_GastosDeRepresentaciónSerializers(serializers.ModelSerializer):
    class Meta:
        model = A114_GastosDeRepresentación
        fields = '__all__'


class A114_GastosDeRepresentaciónArchivosSerializers(serializers.ModelSerializer):
    class Meta:
        model = A114_GastosDeRepresentaciónArchivos
        fields = '__all__'


class A115_informesDeViajesNacionalesSerializers(serializers.ModelSerializer):
    class Meta:
        model = A115_informesDeViajesNacionales
        fields = '__all__'


class A115_informesDeViajesNacionalesResumenSerializers(serializers.ModelSerializer):
    class Meta:
        model = A115_informesDeViajesNacionalesResumen
        fields = '__all__'


class A115_informesDeViajesInternacionalesSerializers(serializers.ModelSerializer):
    class Meta:
        model = A115_informesDeViajesInternacionales
        fields = '__all__'


class A115_informesDeViajesInternacionalesResumenSerializers(serializers.ModelSerializer):
    class Meta:
        model = A115_informesDeViajesInternacionalesResumen
        fields = '__all__'


class A261_SolicitudDeInformaciónPresentadaALaInstituciónSerializers(serializers.ModelSerializer):
    class Meta:
        model = A261_SolicitudDeInformaciónPresentadaALaInstitución
        fields = ('titulo', 'ver', 'descargar')

    def get_ver(self, obj):
        return obj.ver

    def get_descargar(self, obj):
        return obj.pk

class A262_AdjuntosDeSolicitudesResueltasYNegadasSerializers(serializers.ModelSerializer):
    class Meta:
        model = A262_AdjuntosDeSolicitudesResueltasYNegadas
        fields = ('titulo', 'ver', 'descargar')

    def get_ver(self, obj):
        return obj.ver

    def get_descargar(self, obj):
        return obj.pk


class A263_ParticipaciónCiudadanaSerializers(serializers.ModelSerializer):
    class Meta:
        model = A263_ParticipaciónCiudadana
        fields = ('titulo', 'mes', 'año', "link")
    def get_mes(self, obj):
        return obj.mes

    def get_año(self, obj):
        return obj.año


    def get_descargar(self, obj):
        return obj.pk