from django.contrib import admin

# Register your models here.
from .models import Resolucion, CategoriasResoluciones
from django_summernote.admin import SummernoteModelAdmin


class PostAdmin(SummernoteModelAdmin):
    summernote_fields = ('text',)



admin.site.register(Resolucion)
admin.site.register(CategoriasResoluciones)

