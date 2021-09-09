# Generated by Django 3.1.1 on 2020-12-02 13:26

import uuid
from decimal import Decimal

import django.db.models.manager
import django_extensions.db.fields
from django.conf import settings
from django.db import migrations, models

import grandchallenge.components.models
import grandchallenge.core.storage
import grandchallenge.core.validators


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("workstation_configs", "0001_squashed_0008_auto_20201001_0758"),
        ("workstations", "0001_squashed_0011_auto_20201001_0758"),
        ("auth", "0012_alter_user_first_name_max_length"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("components", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Algorithm",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("modified", models.DateTimeField(auto_now=True)),
                (
                    "title",
                    models.CharField(max_length=255, verbose_name="title"),
                ),
                (
                    "description",
                    models.TextField(
                        blank=True, null=True, verbose_name="description"
                    ),
                ),
                (
                    "slug",
                    django_extensions.db.fields.AutoSlugField(
                        blank=True,
                        editable=False,
                        populate_from="title",
                        verbose_name="slug",
                    ),
                ),
                (
                    "logo",
                    models.ImageField(
                        storage=grandchallenge.core.storage.PublicS3Storage(),
                        upload_to=grandchallenge.core.storage.get_logo_path,
                    ),
                ),
                (
                    "public",
                    models.BooleanField(
                        default=False,
                        help_text="Should this algorithm be visible to all users on the algorithm overview page? This does not grant all users permission to use this algorithm. Users will still need to be added to the algorithm users group in order to do that.",
                    ),
                ),
                ("detail_page_markdown", models.TextField(blank=True)),
                ("job_create_page_markdown", models.TextField(blank=True)),
                (
                    "additional_terms_markdown",
                    models.TextField(
                        blank=True,
                        help_text="By using this algortihm, users agree to the site wide terms of service. If your algorithm has any additional terms of usage, define them here.",
                    ),
                ),
                (
                    "result_template",
                    models.TextField(
                        blank=True,
                        default="<pre>{{ results|tojson(indent=2) }}</pre>",
                        help_text="Define the jinja template to render the content of the results.json to html. For example, the following template will print out all the keys and values of the result.json. Use results to access the json root. {% for key, value in results.metrics.items() -%}{{ key }}  {{ value }}{% endfor %}",
                    ),
                ),
                (
                    "credits_per_job",
                    models.PositiveIntegerField(
                        default=0,
                        help_text="The number of credits that are required for each execution of this algorithm.",
                    ),
                ),
                (
                    "editors_group",
                    models.OneToOneField(
                        editable=False,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="editors_of_algorithm",
                        to="auth.group",
                    ),
                ),
                (
                    "inputs",
                    models.ManyToManyField(
                        related_name="algorithm_inputs",
                        to="components.ComponentInterface",
                    ),
                ),
                (
                    "outputs",
                    models.ManyToManyField(
                        related_name="algorithm_outputs",
                        to="components.ComponentInterface",
                    ),
                ),
                (
                    "users_group",
                    models.OneToOneField(
                        editable=False,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="users_of_algorithm",
                        to="auth.group",
                    ),
                ),
                (
                    "workstation",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="workstations.workstation",
                    ),
                ),
                (
                    "workstation_config",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to="workstation_configs.workstationconfig",
                    ),
                ),
            ],
            options={
                "ordering": ("created",),
                "permissions": [
                    ("execute_algorithm", "Can execute algorithm")
                ],
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="AlgorithmImage",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("modified", models.DateTimeField(auto_now=True)),
                (
                    "staged_image_uuid",
                    models.UUIDField(blank=True, editable=False, null=True),
                ),
                (
                    "image",
                    models.FileField(
                        blank=True,
                        help_text=".tar.xz archive of the container image produced from the command 'docker save IMAGE | xz -c > IMAGE.tar.xz'. See https://docs.docker.com/engine/reference/commandline/save/",
                        storage=grandchallenge.core.storage.PrivateS3Storage(),
                        upload_to=grandchallenge.components.models.docker_image_path,
                        validators=[
                            grandchallenge.core.validators.ExtensionValidator(
                                allowed_extensions=(
                                    ".tar",
                                    ".tar.gz",
                                    ".tar.xz",
                                )
                            )
                        ],
                    ),
                ),
                (
                    "image_sha256",
                    models.CharField(editable=False, max_length=71),
                ),
                (
                    "ready",
                    models.BooleanField(
                        default=False,
                        editable=False,
                        help_text="Is this image ready to be used?",
                    ),
                ),
                ("status", models.TextField(editable=False)),
                ("requires_gpu", models.BooleanField(default=False)),
                (
                    "requires_gpu_memory_gb",
                    models.PositiveIntegerField(default=4),
                ),
                ("requires_memory_gb", models.PositiveIntegerField(default=4)),
                (
                    "requires_cpu_cores",
                    models.DecimalField(
                        decimal_places=2, default=Decimal("1.0"), max_digits=4
                    ),
                ),
                (
                    "queue_override",
                    models.CharField(blank=True, max_length=128),
                ),
                (
                    "algorithm",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="algorithm_container_images",
                        to="algorithms.algorithm",
                    ),
                ),
                (
                    "creator",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={"ordering": ("created", "creator"), "abstract": False},
        ),
        migrations.CreateModel(
            name="Job",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("modified", models.DateTimeField(auto_now=True)),
                (
                    "status",
                    models.PositiveSmallIntegerField(
                        choices=[
                            (0, "Queued"),
                            (1, "Started"),
                            (2, "Re-Queued"),
                            (3, "Failed"),
                            (4, "Succeeded"),
                            (5, "Cancelled"),
                        ],
                        default=0,
                    ),
                ),
                ("stdout", models.TextField()),
                ("stderr", models.TextField(default="")),
                (
                    "error_message",
                    models.CharField(default="", max_length=1024),
                ),
                ("started_at", models.DateTimeField(null=True)),
                ("completed_at", models.DateTimeField(null=True)),
                (
                    "public",
                    models.BooleanField(
                        default=False,
                        help_text="If True, allow anyone to download this result along with the input image. Otherwise, only the job creator and algorithm editor(s) will have permission to download and view this result.",
                    ),
                ),
                ("comment", models.TextField(blank=True, default="")),
                (
                    "algorithm_image",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="algorithms.algorithmimage",
                    ),
                ),
                (
                    "creator",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "inputs",
                    models.ManyToManyField(
                        related_name="algorithms_jobs_as_input",
                        to="components.ComponentInterfaceValue",
                    ),
                ),
                (
                    "outputs",
                    models.ManyToManyField(
                        related_name="algorithms_jobs_as_output",
                        to="components.ComponentInterfaceValue",
                    ),
                ),
                (
                    "viewer_groups",
                    models.ManyToManyField(
                        help_text="Which groups should have permission to view this job?",
                        to="auth.Group",
                    ),
                ),
                (
                    "viewers",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="viewers_of_algorithm_job",
                        to="auth.group",
                    ),
                ),
            ],
            options={"ordering": ("created",)},
            managers=[("credits_set", django.db.models.manager.Manager())],
        ),
        migrations.CreateModel(
            name="AlgorithmPermissionRequest",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("changed", models.DateTimeField(auto_now=True)),
                (
                    "status",
                    models.CharField(
                        choices=[
                            ("PEND", "Pending"),
                            ("ACPT", "Accepted"),
                            ("RJCT", "Rejected"),
                        ],
                        default="PEND",
                        max_length=4,
                    ),
                ),
                (
                    "rejection_text",
                    models.TextField(
                        blank=True,
                        help_text="The text that will be sent to the user with the reason for their rejection.",
                    ),
                ),
                (
                    "algorithm",
                    models.ForeignKey(
                        help_text="To which algorithm has the user requested access?",
                        on_delete=django.db.models.deletion.CASCADE,
                        to="algorithms.algorithm",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        help_text="which user requested to participate?",
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "abstract": False,
                "unique_together": {("algorithm", "user")},
            },
        ),
    ]
