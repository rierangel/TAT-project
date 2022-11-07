from .views import ResolucionViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path

router = DefaultRouter()


router.register(r'resoluciones', ResolucionViewSet, basename='resoluciones')

# user_list = ResolucionViewSet.as_view({'get': 'list'})
# user_detail = ResolucionViewSet.as_view({'get': 'retrieve'})

urlpatterns = router.urls


