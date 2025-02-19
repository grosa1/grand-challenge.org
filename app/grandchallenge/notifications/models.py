from actstream.actions import is_following
from actstream.models import Follow, followers
from django.conf import settings
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.contrib.humanize.templatetags.humanize import naturaltime
from django.db import models
from django.utils.html import format_html
from django.utils.translation import gettext_lazy as _
from guardian.models import GroupObjectPermissionBase, UserObjectPermissionBase
from guardian.shortcuts import assign_perm

from grandchallenge.core.models import UUIDModel
from grandchallenge.profiles.templatetags.profiles import user_profile_link
from grandchallenge.subdomains.utils import reverse


class FollowUserObjectPermission(UserObjectPermissionBase):
    content_object = models.ForeignKey(Follow, on_delete=models.CASCADE)


class FollowGroupObjectPermission(GroupObjectPermissionBase):
    content_object = models.ForeignKey(Follow, on_delete=models.CASCADE)


class NotificationTypeChoices(models.TextChoices):
    """Notification type choices."""

    GENERIC = "GENERIC", _("Generic")
    FORUM_POST = "FORUM-POST", _("Forum post")
    FORUM_POST_REPLY = "FORUM-REPLY", _("Forum post reply")
    ACCESS_REQUEST = "ACCESS-REQUEST", _("Access request")
    REQUEST_UPDATE = "REQUEST-UPDATE", _("Request update")
    NEW_ADMIN = "NEW-ADMIN", _("New admin")
    EVALUATION_STATUS = "EVALUATION-STATUS", _("Evaluation status update")
    MISSING_METHOD = "MISSING-METHOD", _("Missing method")
    JOB_STATUS = "JOB-STATUS", _("Job status update")
    IMAGE_IMPORT_STATUS = "IMAGE-IMPORT", _("Image import status update")
    FILE_COPY_STATUS = "FILE-COPY", _("Validation failed while copying file")


class NotificationType:
    """Notification type."""

    NotificationTypeChoices = NotificationTypeChoices


class Notification(UUIDModel):
    Type = NotificationType.NotificationTypeChoices

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        help_text="Which user does this notification correspond to?",
        on_delete=models.CASCADE,
    )

    type = models.CharField(
        max_length=20,
        choices=Type.choices,
        default=Type.GENERIC,
        help_text="Of what type is this notification?",
    )

    read = models.BooleanField(default=False, db_index=True)

    context_class = models.CharField(
        max_length=10,
        blank=True,
        null=True,
        help_text="Bootstrap contextual class to style notification list items.",
    )

    # action-related fields (taken from actstream.models.Action)
    actor_content_type = models.ForeignKey(
        ContentType,
        blank=True,
        null=True,
        related_name="notification_actor",
        on_delete=models.CASCADE,
        db_index=True,
    )
    actor_object_id = models.CharField(
        max_length=255, db_index=True, blank=True, null=True
    )
    actor = GenericForeignKey("actor_content_type", "actor_object_id")

    message = models.CharField(
        max_length=255, db_index=True, blank=True, null=True
    )
    description = models.TextField(blank=True, null=True)

    target_content_type = models.ForeignKey(
        ContentType,
        blank=True,
        null=True,
        related_name="notification_target",
        on_delete=models.CASCADE,
        db_index=True,
    )
    target_object_id = models.CharField(
        max_length=255, blank=True, null=True, db_index=True
    )
    target = GenericForeignKey("target_content_type", "target_object_id")

    action_object_content_type = models.ForeignKey(
        ContentType,
        blank=True,
        null=True,
        related_name="notification_action_object",
        on_delete=models.CASCADE,
        db_index=True,
    )
    action_object_object_id = models.CharField(
        max_length=255, blank=True, null=True, db_index=True
    )
    action_object = GenericForeignKey(
        "action_object_content_type", "action_object_object_id"
    )

    def __str__(self):
        return f"Notification for {self.user}"

    def save(self, *args, **kwargs):
        adding = self._state.adding

        super().save(*args, **kwargs)

        if adding:
            self._assign_permissions()

    def _assign_permissions(self):
        assign_perm("view_notification", self.user, self)
        assign_perm("delete_notification", self.user, self)
        assign_perm("change_notification", self.user, self)

    @staticmethod
    def send(
        *,
        kind,
        actor=None,
        action_object=None,
        target=None,
        message=None,
        description=None,
        context_class=None,
    ):
        receivers = Notification.get_receivers(
            action_object=action_object, actor=actor, kind=kind, target=target
        )

        for receiver in receivers:
            Notification.objects.create(
                user=receiver,
                type=kind,
                message=message,
                actor=actor,
                action_object=action_object,
                target=target,
                description=description,
                context_class=context_class,
            )

    @staticmethod
    def get_receivers(*, kind, actor, action_object, target):  # noqa: C901
        if (
            kind == NotificationType.NotificationTypeChoices.FORUM_POST
            or kind
            == NotificationType.NotificationTypeChoices.FORUM_POST_REPLY
            or kind == NotificationType.NotificationTypeChoices.ACCESS_REQUEST
            and target._meta.model_name != "algorithm"
            or kind == NotificationType.NotificationTypeChoices.REQUEST_UPDATE
        ):
            if actor:
                return {
                    follower
                    for follower in followers(target)
                    if follower != actor
                }
            else:
                return followers(target)
        elif (
            kind == NotificationType.NotificationTypeChoices.ACCESS_REQUEST
            and target._meta.model_name == "algorithm"
        ):
            return {
                follower
                for follower in followers(target, flag="access_request")
                if follower != actor
            }
        elif kind == NotificationType.NotificationTypeChoices.NEW_ADMIN:
            return {action_object}
        elif (
            kind == NotificationType.NotificationTypeChoices.EVALUATION_STATUS
        ):
            receivers = {
                admin
                for admin in target.challenge.get_admins()
                if is_following(admin, target)
            }
            if actor and is_following(actor, target):
                receivers.add(actor)
            return receivers
        elif kind == NotificationType.NotificationTypeChoices.MISSING_METHOD:
            return {
                admin
                for admin in target.challenge.get_admins()
                if is_following(admin, target)
            }
        elif kind == NotificationType.NotificationTypeChoices.JOB_STATUS:
            if actor and is_following(actor, target, flag="job-active"):
                return {actor}
            else:
                return set()
        elif (
            kind
            == NotificationType.NotificationTypeChoices.IMAGE_IMPORT_STATUS
        ):
            return followers(action_object)
        elif kind == NotificationType.NotificationTypeChoices.FILE_COPY_STATUS:
            return {actor}
        else:
            raise RuntimeError(f"Unhandled notification type {kind!r}")

    def print_notification(self, user):  # noqa: C901
        if self.type == NotificationType.NotificationTypeChoices.FORUM_POST:
            return format_html(
                "{} {} {} in {} {}.",
                user_profile_link(self.actor),
                self.message,
                format_html(
                    '<a href="{}">{}</a>',
                    self.action_object.get_absolute_url(),
                    self.action_object.subject,
                ),
                format_html(
                    '<a href="{}">{}</a>',
                    self.target.get_absolute_url(),
                    self.target,
                ),
                naturaltime(self.created),
            )
        elif (
            self.type
            == NotificationType.NotificationTypeChoices.FORUM_POST_REPLY
        ):
            return format_html(
                "{} {} {} {}.",
                user_profile_link(self.actor),
                self.message,
                format_html(
                    '<a href="{}">{}</a>',
                    self.target.get_absolute_url(),
                    self.target.subject,
                ),
                naturaltime(self.created),
            )
        elif (
            self.type
            == NotificationType.NotificationTypeChoices.ACCESS_REQUEST
        ):
            if self.target_content_type.model == "challenge":
                notification_addition = format_html(
                    '<span class="text-truncate font-italic text-muted align-middle '
                    'mx-2">| Accept or decline <a href="{}"> here </a>.</span>',
                    reverse(
                        "participants:registration-list",
                        kwargs={
                            "challenge_short_name": self.target.short_name
                        },
                    ),
                )
            else:
                notification_addition = ""
            return format_html(
                "{} {} {} {}. {}",
                user_profile_link(self.actor),
                self.message,
                format_html(
                    '<a href="{}">{}</a>',
                    self.target.get_absolute_url(),
                    self.target,
                ),
                naturaltime(self.created),
                notification_addition,
            )
        elif (
            self.type
            == NotificationType.NotificationTypeChoices.REQUEST_UPDATE
        ):
            if self.target._meta.model_name == "registrationrequest":
                target_url = self.target.challenge.get_absolute_url()
                target_name = self.target.challenge.short_name
            else:
                target_url = self.target.base_object.get_absolute_url()
                target_name = self.target.object_name
            return format_html(
                "Your registration request for {} {} {}.",
                format_html('<a href="{}">{}</a>', target_url, target_name),
                self.message,
                naturaltime(self.created),
            )
        elif self.type == NotificationType.NotificationTypeChoices.NEW_ADMIN:
            return format_html(
                "You were {} {} {}.",
                self.message,
                format_html(
                    '<a href="{}">{}</a>',
                    self.target.get_absolute_url(),
                    self.target,
                ),
                naturaltime(self.created),
            )
        elif (
            self.type
            == NotificationType.NotificationTypeChoices.EVALUATION_STATUS
            and self.actor == user
        ):
            if self.action_object.error_message:
                error_message = format_html(
                    '<span class ="text-truncate font-italic text-muted align-middle '
                    'mx-2">| {}</span>',
                    self.action_object.error_message,
                )
            else:
                error_message = ""

            return format_html(
                "Your {} to {} {} {}. {}",
                format_html(
                    '<a href="{}">{}</a>',
                    self.action_object.submission.get_absolute_url(),
                    "submission",
                ),
                format_html(
                    '<a href="{}">{}</a>',
                    self.target.challenge.get_absolute_url(),
                    self.target.challenge.short_name,
                ),
                self.message,
                naturaltime(self.created),
                error_message,
            )
        elif (
            self.type
            == NotificationType.NotificationTypeChoices.EVALUATION_STATUS
            and self.actor != user
            and self.message == "failed"
        ):
            return format_html(
                "The {} from {} to {} {} {}. | {}",
                format_html(
                    '<a href="{}">{}</a>',
                    self.action_object.submission.get_absolute_url(),
                    "submission",
                ),
                user_profile_link(self.actor),
                format_html(
                    '<a href="{}">{}</a>',
                    self.target.challenge.get_absolute_url(),
                    self.target.challenge.short_name,
                ),
                self.message,
                naturaltime(self.created),
                format_html(
                    '<span class ="text-truncate font-italic text-muted align-middle '
                    'mx-2">{}</span>',
                    self.action_object.error_message,
                ),
            )
        elif (
            self.type
            == NotificationType.NotificationTypeChoices.EVALUATION_STATUS
            and self.actor != user
            and self.message == "succeeded"
        ):
            return format_html(
                "There is a new {} for {} from {} {}.",
                format_html(
                    '<a href="{}">{}</a>',
                    self.action_object.submission.get_absolute_url(),
                    "result",
                ),
                format_html(
                    '<a href="{}">{}</a>',
                    self.target.challenge.get_absolute_url(),
                    self.target.challenge.short_name,
                ),
                user_profile_link(self.actor),
                naturaltime(self.created),
            )
        elif (
            self.type
            == NotificationType.NotificationTypeChoices.MISSING_METHOD
        ):
            return format_html(
                "The {} from {} {} could not be evaluated because "
                "there is no valid evaluation method for {}.",
                format_html(
                    '<a href="{}">{}</a>',
                    self.action_object.get_absolute_url(),
                    "submission",
                ),
                user_profile_link(self.actor),
                naturaltime(self.created),
                format_html(
                    '<a href="{}">{}</a>',
                    self.target.get_absolute_url(),
                    self.target,
                ),
            )
        elif self.type == NotificationType.NotificationTypeChoices.JOB_STATUS:
            if self.actor and self.actor != user:
                addition = format_html(" | {}", user_profile_link(self.actor))
            else:
                addition = ""
            return format_html(
                "{} {}. {} {}",
                self.message,
                naturaltime(self.created),
                addition,
                format_html(
                    '<span class="text-truncate font-italic text-muted align-middle '
                    'mx-2 ">| Inspect the output and any error messages <a href="{}">'
                    "here</a>.</span>",
                    self.description,
                ),
            )
        elif (
            self.type
            == NotificationType.NotificationTypeChoices.IMAGE_IMPORT_STATUS
        ):
            return format_html(
                "Your {} {} {}.",
                format_html(
                    '<a href="{}">{}</a>',
                    self.action_object.get_absolute_url(),
                    "upload",
                ),
                naturaltime(self.created),
                self.message,
            )
        elif (
            self.type
            == NotificationType.NotificationTypeChoices.FILE_COPY_STATUS
        ):
            return self.description


class NotificationUserObjectPermission(UserObjectPermissionBase):
    content_object = models.ForeignKey(Notification, on_delete=models.CASCADE)


class NotificationGroupObjectPermission(GroupObjectPermissionBase):
    content_object = models.ForeignKey(Notification, on_delete=models.CASCADE)
