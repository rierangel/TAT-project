from django.contrib import admin

# Register your models here.
from django_summernote.admin import SummernoteModelAdmin

from .models import Resolucion, CategoriasResoluciones, Ponencia, PonenciaEntrada

class PostAdmin(SummernoteModelAdmin):
    summernote_fields = ('text',)


admin.site.register(Resolucion)
admin.site.register(CategoriasResoluciones)
admin.site.register(PonenciaEntrada)


class PonenciaEntradaInline(admin.StackedInline):
    extra = 1
    model = PonenciaEntrada

@admin.register(Ponencia)
class AuthorAdmin(admin.ModelAdmin):
    inlines = [PonenciaEntradaInline, ]




