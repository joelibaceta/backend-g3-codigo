# Generated by Django 3.2.7 on 2021-09-18 23:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_mesa'),
    ]

    operations = [
        migrations.AddField(
            model_name='mesa',
            name='mesa_cap',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='mesa',
            name='mesa_nro',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
