# Generated by Django 4.1.2 on 2022-11-11 13:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('publicaciones', '0003_ponenciaentrada_remove_ponencia_archivo_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ponenciaentrada',
            name='categoria',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='entradas', to='publicaciones.ponencia'),
        ),
    ]
