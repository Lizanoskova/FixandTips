# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-11-21 18:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('request', '0005_auto_20181024_1328'),
    ]

    operations = [
        migrations.AddField(
            model_name='request',
            name='is_shown',
            field=models.BooleanField(default=True),
        ),
    ]