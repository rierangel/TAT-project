from .views import ResolucionViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'resoluciones', ResolucionViewSet, basename='resoluciones')


urlpatterns = router.urls

