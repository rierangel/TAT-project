from .views import ResolucionViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path

router = DefaultRouter()


router.register(r'resoluciones', ResolucionViewSet, basename='resoluciones')


urlpatterns = router.urls


