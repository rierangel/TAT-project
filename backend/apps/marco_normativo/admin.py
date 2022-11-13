from django.contrib import admin

# Register your models here.
from .models import Competencias, LeyesYDecretos
from django_summernote.admin import SummernoteModelAdmin


class PostAdmin(SummernoteModelAdmin):
    summernote_fields = ('text',)


admin.site.register(Competencias, PostAdmin)
admin.site.register(LeyesYDecretos)