# Generated by Django 3.2.14 on 2022-07-25 15:24

from django.db import migrations, models

import grandchallenge.core.validators


class Migration(migrations.Migration):

    dependencies = [
        ("hanging_protocols", "0005_alter_hangingprotocol_json"),
    ]

    operations = [
        migrations.AlterField(
            model_name="hangingprotocol",
            name="json",
            field=models.JSONField(
                validators=[
                    grandchallenge.core.validators.JSONValidator(
                        schema={
                            "$schema": "http://json-schema.org/draft-06/schema#",
                            "contains": {
                                "properties": {
                                    "viewport_name": {
                                        "pattern": "^main$",
                                        "type": "string",
                                    }
                                },
                                "type": "object",
                            },
                            "definitions": {},
                            "items": {
                                "additionalProperties": False,
                                "properties": {
                                    "draggable": {"type": "boolean"},
                                    "fullsizable": {"type": "boolean"},
                                    "h": {"type": "integer"},
                                    "label": {"type": "string"},
                                    "linkable": {"type": "boolean"},
                                    "opacity": {
                                        "maximum": 1,
                                        "minimum": 0,
                                        "type": "number",
                                    },
                                    "order": {"type": "integer"},
                                    "orientation": {
                                        "enum": [
                                            "axial",
                                            "coronal",
                                            "sagittal",
                                        ],
                                        "type": "string",
                                    },
                                    "parent_id": {
                                        "enum": [
                                            "main",
                                            "secondary",
                                            "tertiary",
                                            "quaternary",
                                            "quinary",
                                            "senary",
                                            "septenary",
                                            "octonary",
                                            "nonary",
                                            "denary",
                                            "undenary",
                                            "duodenary",
                                            "tredenary",
                                            "quattuordenary",
                                            "quindenary",
                                            "sexdenary",
                                            "septendenary",
                                            "octodenary",
                                            "novemdenary",
                                            "vigintenary",
                                        ],
                                        "type": "string",
                                    },
                                    "selectable": {"type": "boolean"},
                                    "show_current_slice": {"type": "boolean"},
                                    "show_mouse_coordinate": {
                                        "type": "boolean"
                                    },
                                    "show_mouse_voxel_value": {
                                        "type": "boolean"
                                    },
                                    "slice_plane_indicator": {
                                        "enum": [
                                            "main",
                                            "secondary",
                                            "tertiary",
                                            "quaternary",
                                            "quinary",
                                            "senary",
                                            "septenary",
                                            "octonary",
                                            "nonary",
                                            "denary",
                                            "undenary",
                                            "duodenary",
                                            "tredenary",
                                            "quattuordenary",
                                            "quindenary",
                                            "sexdenary",
                                            "septendenary",
                                            "octodenary",
                                            "novemdenary",
                                            "vigintenary",
                                        ],
                                        "type": "string",
                                    },
                                    "viewport_name": {
                                        "enum": [
                                            "main",
                                            "secondary",
                                            "tertiary",
                                            "quaternary",
                                            "quinary",
                                            "senary",
                                            "septenary",
                                            "octonary",
                                            "nonary",
                                            "denary",
                                            "undenary",
                                            "duodenary",
                                            "tredenary",
                                            "quattuordenary",
                                            "quindenary",
                                            "sexdenary",
                                            "septendenary",
                                            "octodenary",
                                            "novemdenary",
                                            "vigintenary",
                                        ],
                                        "type": "string",
                                    },
                                    "w": {"type": "integer"},
                                    "x": {"type": "integer"},
                                    "y": {"type": "integer"},
                                },
                                "required": ["viewport_name"],
                                "title": "The Layout Object Schema",
                                "type": "object",
                            },
                            "minItems": 1,
                            "title": "The Hanging Protocol Schema",
                            "type": "array",
                            "uniqueItems": True,
                        }
                    )
                ]
            ),
        ),
    ]
