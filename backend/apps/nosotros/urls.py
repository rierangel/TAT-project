from .views import DepartamentoViewSet, OficinaViewSet, AutoridadViewSet, EquipoViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'oficinas', OficinaViewSet, basename='oficinas')
router.register(r'departamentos', DepartamentoViewSet, basename='departamentos')
router.register(r'autoridades', AutoridadViewSet, basename='autoridades')
router.register(r'equipo', EquipoViewSet, basename='equipo')

urlpatterns = router.urls

