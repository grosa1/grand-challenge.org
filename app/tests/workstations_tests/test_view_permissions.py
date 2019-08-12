import pytest
from django.conf import settings

from tests.factories import WorkstationImageFactory
from tests.utils import validate_staff_only_view


@pytest.mark.django_db
def test_session_redirect_staff_only(client):
    # Create the default image
    WorkstationImageFactory(
        workstation__title=settings.DEFAULT_WORKSTATION_SLUG, ready=True
    )
    wsi = WorkstationImageFactory(ready=True)

    # Validate
    validate_staff_only_view(
        client=client,
        viewname="workstations:default-session-redirect",
        reverse_kwargs={},
        should_redirect=True,
    )
    validate_staff_only_view(
        client=client,
        viewname="workstations:workstation-session-redirect",
        reverse_kwargs={"slug": wsi.workstation.slug},
        should_redirect=True,
    )
    validate_staff_only_view(
        client=client,
        viewname="workstations:workstation-image-session-redirect",
        reverse_kwargs={"slug": wsi.workstation.slug, "pk": wsi.pk},
        should_redirect=True,
    )
