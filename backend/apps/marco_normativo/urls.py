from django.urls import path, include
from .views import CompetenciaList

urlpatterns = [
    path('competencias/',  CompetenciaList.as_view(), name="competencias"),
]