from django.contrib import admin

# Register your models here.
from django_summernote.admin import SummernoteModelAdmin

from .models import Noticia, GaleriaNoticia, HaciendoDiferencia, GaleriaHaciendoDiferencia, Congreso, GaleriaCongreso, GaleriaCulturaTributaria, CulturaTributaria

# NOTICIAS
class GaleriaNoticiaInline(admin.StackedInline):
    extra = 1
    model = GaleriaNoticia

@admin.register(Noticia)
class SeccionAdmin(SummernoteModelAdmin):
    list_display = ( 'fecha','titulo',  )
    list_filter = ('fecha',)
    exclude = ('slug',)
    # ordering = ('-fecha',)
    inlines = [GaleriaNoticiaInline, ]

# HaciendoDiferencia
class GaleriaHaciendoDiferenciaInline(admin.StackedInline):
    extra = 1
    model = GaleriaHaciendoDiferencia

@admin.register(HaciendoDiferencia)
class SeccionAdmin(SummernoteModelAdmin):
    list_display = ( 'fecha','titulo',  )
    list_filter = ('fecha',)
    inlines = [GaleriaHaciendoDiferenciaInline, ]

# Congreso
class GaleriaCongresoInline(admin.StackedInline):
    extra = 1
    model = GaleriaCongreso

@admin.register(Congreso)
class SeccionAdmin(SummernoteModelAdmin):
    list_display = ( 'fecha','titulo',  )
    list_filter = ('fecha',)
    inlines = [GaleriaCongresoInline, ]


# cultura

class GaleriaCulturaTributariaInline(admin.StackedInline):
    extra = 1
    model = GaleriaCulturaTributaria

@admin.register(CulturaTributaria)
class SeccionAdmin(SummernoteModelAdmin):
    list_display = ( 'fecha','titulo',  )
    list_filter = ('fecha',)
    exclude = ('slug',)
    # ordering = ('-fecha',)
    inlines = [GaleriaCulturaTributariaInline, ]