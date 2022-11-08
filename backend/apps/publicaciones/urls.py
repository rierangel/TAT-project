from .views import ResolucionViewSet, CategoriasResolucionViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()


router.register(r'resoluciones', ResolucionViewSet, basename='resoluciones')
router.register(r'resoluciones-categorias', CategoriasResolucionViewSet, basename='resoluciones-categorias')


urlpatterns = router.urls


