# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-10-24 13:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('request', '0004_auto_20181024_1321'),
    ]

    operations = [
        migrations.AlterField(
            model_name='request',
            name='status',
            field=models.CharField(max_length=255),
        ),
    ]
