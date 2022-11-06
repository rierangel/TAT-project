from django.contrib import admin

# Register your models here.
from .models import Oficina, Departamento, Autoridad, Equipo




admin.site.register(Oficina)
admin.site.register(Departamento)
admin.site.register(Autoridad)
admin.site.register(Equipo)

