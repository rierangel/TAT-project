# Generated by Django 4.1.2 on 2022-11-21 04:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('transparencia', '0002_rename_a94_manualesdeprocedimientos_a094_manualesdeprocedimientos_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='a115_informesdeviajesinternacionalesresumen',
            name='fecha',
        ),
        migrations.RemoveField(
            model_name='a115_informesdeviajesnacionalesresumen',
            name='fecha',
        ),
    ]
