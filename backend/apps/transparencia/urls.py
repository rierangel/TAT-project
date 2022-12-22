from rest_framework.routers import DefaultRouter
from .views import A094_ManualesDeProcedimientosViewSet, A095_EstructuraOrganizativaViewSet, A096_SeguimientoDeDocumentosViewSet, A097_DescripciónDeFormulariosViewSet, A098_ReglasDeProcedimientoViewSet, A102_EjecucionesPresupuestariasViewSet, A103_EstadisticasViewSet, A112_DesignaciónDeColaboradoresViewSet, A113_PlanillaViewSet, A113_PlanillaArchivosViewSet, A114_GastosDeRepresentaciónViewSet, A114_GastosDeRepresentaciónArchivosViewSet, A115_informesDeViajesNacionalesViewSet, A115_informesDeViajesNacionalesResumenViewSet, A115_informesDeViajesInternacionalesViewSet, A115_informesDeViajesInternacionalesResumenViewSet, A261_SolicitudDeInformaciónPresentadaALaInstituciónViewSet, A262_AdjuntosDeSolicitudesResueltasYNegadasViewSet, A263_ParticipaciónCiudadanaViewSet, A00StaticosViewSet


router = DefaultRouter()

router.register(r'A00StaticosViewSet',
                A00StaticosViewSet, basename="A00StaticosViewSet")
router.register(r'A094_ManualesDeProcedimientosViewSet',
                A094_ManualesDeProcedimientosViewSet, basename="A094_ManualesDeProcedimientosViewSet")
router.register(r'A095_EstructuraOrganizativaViewSet',
                A095_EstructuraOrganizativaViewSet, basename="A095_EstructuraOrganizativaViewSet")
router.register(r'A096_SeguimientoDeDocumentosViewSet',
                A096_SeguimientoDeDocumentosViewSet, basename="A096_SeguimientoDeDocumentosViewSet")
router.register(r'A097_DescripciónDeFormulariosViewSet',
                A097_DescripciónDeFormulariosViewSet, basename="A097_DescripciónDeFormulariosViewSet")
router.register(r'A098_ReglasDeProcedimientoViewSet',
                A098_ReglasDeProcedimientoViewSet, basename="A098_ReglasDeProcedimientoViewSet")
router.register(r'A102_EjecucionesPresupuestariasViewSet',
                A102_EjecucionesPresupuestariasViewSet, basename="A102_EjecucionesPresupuestariasViewSet")
router.register(r'A103_EstadisticasViewSet',
                A103_EstadisticasViewSet, basename="A103_EstadisticasViewSet")
router.register(r'A112_DesignaciónDeColaboradoresViewSet',
                A112_DesignaciónDeColaboradoresViewSet, basename="A112_DesignaciónDeColaboradoresViewSet")
router.register(r'A113_PlanillaViewSet', A113_PlanillaViewSet,
                basename="A113_PlanillaViewSet")
router.register(r'A113_PlanillaArchivosViewSet',
                A113_PlanillaArchivosViewSet, basename="A113_PlanillaArchivosViewSet")
router.register(r'A114_GastosDeRepresentaciónViewSet',
                A114_GastosDeRepresentaciónViewSet, basename="A114_GastosDeRepresentaciónViewSet")
router.register(r'A114_GastosDeRepresentaciónArchivosViewSet',
                A114_GastosDeRepresentaciónArchivosViewSet, basename="A114_GastosDeRepresentaciónArchivosViewSet")
router.register(r'A115_informesDeViajesNacionalesViewSet',
                A115_informesDeViajesNacionalesViewSet, basename="A115_informesDeViajesNacionalesViewSet")
router.register(r'A115_informesDeViajesNacionalesResumenViewSet',
                A115_informesDeViajesNacionalesResumenViewSet, basename="A115_informesDeViajesNacionalesResumenViewSet")
router.register(r'A115_informesDeViajesInternacionalesViewSet',
                A115_informesDeViajesInternacionalesViewSet, basename="A115_informesDeViajesInternacionalesViewSet")
router.register(r'A115_informesDeViajesInternacionalesResumenViewSet',
                A115_informesDeViajesInternacionalesResumenViewSet, basename="A115_informesDeViajesInternacionalesResumenViewSet")
router.register(r'A261_SolicitudDeInformaciónPresentadaALaInstituciónViewSet',
                A261_SolicitudDeInformaciónPresentadaALaInstituciónViewSet, basename="A261_SolicitudDeInformaciónPresentadaALaInstituciónViewSet")
router.register(r'A262_AdjuntosDeSolicitudesResueltasYNegadasViewSet',
                A262_AdjuntosDeSolicitudesResueltasYNegadasViewSet, basename="A262_AdjuntosDeSolicitudesResueltasYNegadasViewSet")
router.register(r'A263_ParticipaciónCiudadanaViewSet',
                A263_ParticipaciónCiudadanaViewSet, basename="A263_ParticipaciónCiudadanaViewSet")


urlpatterns = router.urls
