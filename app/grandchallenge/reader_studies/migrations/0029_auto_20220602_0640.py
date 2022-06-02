# Generated by Django 3.2.13 on 2022-06-02 06:40

import stdimage.models
from django.db import migrations

import grandchallenge.core.storage


class Migration(migrations.Migration):

    dependencies = [
        ("reader_studies", "0028_auto_20220517_0740"),
    ]

    operations = [
        migrations.AlterField(
            model_name="readerstudy",
            name="logo",
            field=stdimage.models.JPEGField(
                force_min_size=False,
                storage=grandchallenge.core.storage.PublicS3Storage(),
                upload_to=grandchallenge.core.storage.get_logo_path,
                variations={
                    "full": (None, None, False),
                    "x02": (64, 64, True),
                    "x10": (320, 320, True),
                    "x15": (480, 480, True),
                    "x20": (640, 640, True),
                },
            ),
        ),
        migrations.AlterField(
            model_name="readerstudy",
            name="social_image",
            field=stdimage.models.JPEGField(
                blank=True,
                force_min_size=False,
                help_text="An image for this reader study which is displayed when you post the link on social media. Should have a resolution of 640x320 px (1280x640 px for best display).",
                storage=grandchallenge.core.storage.PublicS3Storage(),
                upload_to=grandchallenge.core.storage.get_social_image_path,
                variations={
                    "full": (None, None, False),
                    "x10": (640, 320, False),
                    "x15": (960, 480, False),
                    "x20": (1280, 640, False),
                },
            ),
        ),
    ]
