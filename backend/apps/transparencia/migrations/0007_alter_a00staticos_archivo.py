# Generated by Django 4.1.2 on 2022-12-22 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transparencia', '0006_a00staticos'),
    ]

    operations = [
        migrations.AlterField(
            model_name='a00staticos',
            name='archivo',
            field=models.FileField(upload_to='transparencias/staticos'),
        ),
    ]
