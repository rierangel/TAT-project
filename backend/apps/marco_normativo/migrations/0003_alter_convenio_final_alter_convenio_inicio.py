# Generated by Django 4.1.2 on 2022-11-18 17:43

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('marco_normativo', '0002_remove_convenio_año_convenio_final_convenio_inicio_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='convenio',
            name='final',
            field=models.DateField(default=datetime.date.today),
        ),
        migrations.AlterField(
            model_name='convenio',
            name='inicio',
            field=models.DateField(default=datetime.date.today),
        ),
    ]