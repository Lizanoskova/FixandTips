# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-11-06 22:17
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_auto_20181103_1715'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='role',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='role.Role'),
        ),
    ]