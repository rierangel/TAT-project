# Generated by Django 4.1.2 on 2022-11-06 02:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('nosotros', '0003_rename_descrpcion_autoridad_descripcion_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='autoridad',
            old_name='descripcion',
            new_name='text',
        ),
        migrations.RenameField(
            model_name='equipo',
            old_name='descripcion',
            new_name='text',
        ),
    ]
