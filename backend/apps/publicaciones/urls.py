from rest_framework.routers import DefaultRouter
from .views import ResolucionViewSet, CategoriasResolucionViewSet, PonenciasViewSet

router = DefaultRouter()


router.register(r'resoluciones', ResolucionViewSet, basename='resoluciones')
router.register(r'resoluciones-categorias', CategoriasResolucionViewSet, basename='resoluciones-categorias')
router.register(r'ponencias', PonenciasViewSet, basename='ponencias')


urlpatterns = router.urls


