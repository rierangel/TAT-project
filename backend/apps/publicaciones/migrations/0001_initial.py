# Generated by Django 4.1.2 on 2022-11-06 16:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CategoriasResoluciones',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=500, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Resolucion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=500, unique=True)),
                ('año', models.IntegerField(default='%Y', max_length=4)),
                ('archivo', models.FileField(upload_to='uploads/resoluciones/%Y/%m/%d/')),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='resolicion', to='publicaciones.categoriasresoluciones')),
            ],
        ),
    ]
