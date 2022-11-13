from .views import NoticiasListView, NoticiaView
from rest_framework.routers import DefaultRouter
from django.urls import path, include


router = DefaultRouter()
router.register(r'noticias', NoticiasListView, basename='noticias')



urlpatterns = [

    path('noticias/',  NoticiasListView.as_view(), name="noticias"),
    path('noticias/<str:slug>/',  NoticiaView.as_view(), name="view_noticias"),
]