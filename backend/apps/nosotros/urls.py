from .views import DepartamentoViewSet, OficinaViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'oficinas', OficinaViewSet, basename='oficinas')
router.register(r'departamentos', DepartamentoViewSet, basename='departamentos')

urlpatterns = router.urls

