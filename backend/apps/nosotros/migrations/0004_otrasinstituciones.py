# Generated by Django 4.1.2 on 2022-12-06 19:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nosotros', '0003_vacante'),
    ]

    operations = [
        migrations.CreateModel(
            name='OtrasInstituciones',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=500)),
                ('url', models.URLField()),
            ],
        ),
    ]