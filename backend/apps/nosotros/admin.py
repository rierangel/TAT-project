from django.contrib import admin

# Register your models here.
from .models import Oficina, Departamento, Autoridad, Equipo
from django_summernote.admin import SummernoteModelAdmin


class PostAdmin(SummernoteModelAdmin):
    summernote_fields = ('text',)



admin.site.register(Oficina)
admin.site.register(Departamento)
admin.site.register(Autoridad, PostAdmin)
admin.site.register(Equipo, PostAdmin)

