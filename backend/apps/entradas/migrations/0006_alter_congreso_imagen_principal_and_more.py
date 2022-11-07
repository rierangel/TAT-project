# Generated by Django 4.1.2 on 2022-11-06 16:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('entradas', '0005_congreso_contenido_haciendodiferencia_contenido_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='congreso',
            name='imagen_principal',
            field=models.ImageField(upload_to='entradas/congreso'),
        ),
        migrations.AlterField(
            model_name='galeriacongreso',
            name='imagen',
            field=models.ImageField(upload_to='entradas/congreso/galeria'),
        ),
        migrations.AlterField(
            model_name='galeriahaciendodiferencia',
            name='imagen',
            field=models.ImageField(upload_to='entradas/galeria_haciendo_diferencia/galeria'),
        ),
        migrations.AlterField(
            model_name='galerianoticia',
            name='imagen',
            field=models.ImageField(upload_to='entradas/noticias/galeria'),
        ),
        migrations.AlterField(
            model_name='haciendodiferencia',
            name='imagen_principal',
            field=models.ImageField(upload_to='entradas/galeria_haciendo_diferencia'),
        ),
        migrations.AlterField(
            model_name='noticia',
            name='imagen_principal',
            field=models.ImageField(upload_to='entradas/noticias'),
        ),
    ]