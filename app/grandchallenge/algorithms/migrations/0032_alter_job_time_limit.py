# Generated by Django 3.2.13 on 2022-06-29 18:42

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("algorithms", "0031_auto_20220611_0704"),
    ]

    operations = [
        migrations.AlterField(
            model_name="job",
            name="time_limit",
            field=models.PositiveSmallIntegerField(
                default=3600,
                help_text="Time limit for the job in seconds",
                validators=[
                    django.core.validators.MinValueValidator(limit_value=60),
                    django.core.validators.MaxValueValidator(limit_value=3600),
                ],
            ),
        ),
    ]
