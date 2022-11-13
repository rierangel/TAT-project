from django.urls import path, include
from .views import CompetenciasList

urlpatterns = [
    path('competencias/',  CompetenciasList.as_view(), name="competencias"),
]