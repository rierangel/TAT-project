# Generated by Django 4.1.2 on 2022-12-22 19:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transparencia', '0005_rename_ver_a263_participaciónciudadana_link'),
    ]

    operations = [
        migrations.CreateModel(
            name='A00Staticos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=500)),
                ('archivo', models.FileField(upload_to='transparencias/94')),
            ],
        ),
    ]