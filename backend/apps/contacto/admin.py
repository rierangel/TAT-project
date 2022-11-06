from django.contrib import admin

# Register your models here.
from .models import Oficina, Departamento




admin.site.register(Oficina)
admin.site.register(Departamento)