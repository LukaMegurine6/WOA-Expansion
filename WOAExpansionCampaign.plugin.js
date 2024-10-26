module.exports = function ElusivesAddCampaign(controller) {
    // register the new campaign missions
    controller.addMission({
        "Data": {
            "Objectives": [
                {
                    "Type": "statemachine",
                    "Id": "47200c20-b79b-4fe8-b617-70b968880baa",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 335ce4e7-36bb-45cd-aa24-18564d48ed4e).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 335ce4e7-36bb-45cd-aa24-18564d48ed4e).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "335ce4e7-36bb-45cd-aa24-18564d48ed4e"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "335ce4e7-36bb-45cd-aa24-18564d48ed4e"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Type": "statemachine",

                    "Id": "334ea4f9-f631-4ad7-b575-a5bd6dd08ea7",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository f9c3905a-ec94-43b6-aae6-8b2f752467f7).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository f9c3905a-ec94-43b6-aae6-8b2f752467f7).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "f9c3905a-ec94-43b6-aae6-8b2f752467f7"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "f9c3905a-ec94-43b6-aae6-8b2f752467f7"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Type": "statemachine",
                    "Id": "335ea4f9-f631-4ad7-b576-a5bd6dd08ea7",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 124c40d5-b342-4288-b202-57e80148e0d7).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 124c40d5-b342-4288-b202-57e80148e0d7).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "124c40d5-b342-4288-b202-57e80148e0d7"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "124c40d5-b342-4288-b202-57e80148e0d7"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Type": "statemachine",
                    "Id": "336ea4f9-f631-4ad7-b515-a5bd6dd08ea7",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 1b21e6e6-beba-4f7e-8760-e9604a69c569).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 1b21e6e6-beba-4f7e-8760-e9604a69c569).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "1b21e6e6-beba-4f7e-8760-e9604a69c569"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "1b21e6e6-beba-4f7e-8760-e9604a69c569"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Type": "statemachine",
                    "Id": "337ea4f9-f631-4ad7-b499-a5bd6dd08ea7",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 46b78498-b470-4aad-b72b-d90f3126a7f6).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 46b78498-b470-4aad-b72b-d90f3126a7f6).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "46b78498-b470-4aad-b72b-d90f3126a7f6"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "46b78498-b470-4aad-b72b-d90f3126a7f6"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Id": "0c5eb0aa-6b87-4006-a80a-074612c9e782",
                    "Type": "statemachine",
                    "Category": "primary",
                    "Image": "images/FilesParis.jpg",
                    "BriefingName": "$loc UI_CONTRACT_STEAL_FILES_TITLE",
                    "BriefingText": "$loc UI_CONTRACT_STEAL_FILES_DESC",
                    "IsHidden": false,
                    "LongBriefingText": "$loc UI_CONTRACT_STEAL_FILES_DESC",
                    "ObjectiveType": "custom",
                    "ForceShowOnLoadingScreen": true,
                    "HUDTemplate": {
                        "display": "$loc UI_CONTRACT_STEAL_FILES_TITLE",
                        "iconType": 16
                    },
                    "Type": "statemachine",
                    "Scope": "hit",
                    "Definition": {
                        "Context": {
                            "Targets": [],
                            "ForceUpdateCounters": 0,
                            "FilesCollected": 0,
                            "FilesRemaining": 1,
                            "FilesTotal": 1
                        },
                        "ContextListeners": {
                            "FilesRemaining": {
                                "type": "objective-counter",
                                "header": "UI_CONTRACT_STEAL_FILES_TITLE",
                                "deactivate": 0
                            },
                            "ForceUpdateCounters": {
                                "type": "force-update",
                                "target": "FilesRemaining"
                            }
                        },
                        "States": {
                            "Start": {
                                "-": {
                                    "Condition": {
                                        "$eq": ["$.ForceUpdateCounters", 0]
                                    },
                                    "Actions": { "$inc": "ForceUpdateCounters" }
                                },
                                "ItemPickedUp": {
                                    "Condition": {
                                        "$eq": [
                                            "$Value.RepositoryId",
                                            "97152c6c-4410-45ab-9e27-50150ce05f9b"
                                        ]
                                    },
                                    "Actions": {
                                        "$inc": "FilesCollected",
                                        "$dec": "FilesRemaining"
                                    },
                                    "Transition": "CheckCount"
                                },
                                "ItemDropped": {
                                    "Condition": {
                                        "$eq": [
                                            "$Value.RepositoryId",
                                            "97152c6c-4410-45ab-9e27-50150ce05f9b"
                                        ]
                                    },
                                    "Actions": {
                                        "$dec": "FilesCollected",
                                        "$inc": "FilesRemaining"
                                    },
                                    "Transition": "CheckCount"
                                }
                            },
                            "CheckCount": {
                                "-": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$.FilesCollected",
                                                "$.FilesTotal"
                                            ]
                                        },
                                        "Actions": { "$set": ["FilesRemaining", 0] },
                                        "Transition": "Success"
                                    },
                                    { "Transition": "Start" }
                                ]
                            },
                            "Success": {
                                "ItemDropped": {
                                    "Condition": {
                                        "$eq": [
                                            "$Value.RepositoryId",
                                            "97152c6c-4410-45ab-9e27-50150ce05f9b"
                                        ]
                                    },
                                    "Actions": {
                                        "$dec": "FilesCollected",
                                        "$inc": "FilesRemaining"
                                    },
                                    "Transition": "CheckCount"
                                }
                            }
                        }
                    }
                }
            ],
            "GameDifficulties": [
                {
                    "Difficulty": "easy",
                    "Bricks": [
                        "assembly:/_pro/scenes/missions/paris/difficulty_easy_paris_peacock.brick",
                        "assembly:/_PRO/Scenes/Missions/Paris/_scene_kirroyal.brick",
                        "assembly:/_PRO/Scenes/Missions/Paris/_scene_Kamikaze.brick",
                        "assembly:/_PRO/Scenes/Missions/Paris/_Scene_TequilaSunrise_01.brick",
                        "assembly:/_pro/scenes/missions/paris/tod_night.brick",
                    ]
                },
                {
                    "Difficulty": "normal",
                    "Bricks": [
                        "assembly:/_PRO/Scenes/Missions/Paris/_scene_kirroyal.brick",
                        "assembly:/_PRO/Scenes/Missions/Paris/_scene_Kamikaze.brick",
                        "assembly:/_PRO/Scenes/Missions/Paris/_Scene_TequilaSunrise_01.brick",
                        "assembly:/_pro/scenes/missions/paris/tod_night.brick",
                    ]
                },
                {
                    "Difficulty": "hard",
                    "Bricks": [
                        "assembly:/_pro/scenes/missions/paris/difficulty_pro1_paris_fashionshow.brick",
                        "assembly:/_PRO/Scenes/Missions/Paris/_scene_kirroyal.brick",
                        "assembly:/_PRO/Scenes/Missions/Paris/_scene_Kamikaze.brick",
                        "assembly:/_PRO/Scenes/Missions/Paris/_Scene_TequilaSunrise_01.brick",
                        "assembly:/_pro/scenes/missions/paris/tod_night.brick",
                    ]
                }
            ],
            "VR": [
            {
                "Quality": "base",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_pro/scenes/missions/paris/vr_overrides_peacock.brick",
                    "assembly:/_pro/scenes/missions/paris/vr_agility_overrides_peacock.brick",
                    "assembly:/_pro/scenes/missions/paris/vr_overrides_ps4perf.brick"
                ]
            },
            {
                "Quality": "better",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_pro/scenes/missions/paris/vr_overrides_peacock.brick",
                    "assembly:/_pro/scenes/missions/paris/vr_agility_overrides_peacock.brick"
                ]
            }
        ],
            "GameChangers": [],
            "Bricks": []
        },
        "Metadata": {
            "Title": "UI_CONTRACT_THE_IMPOSTORS_TITLE",
            "Description": "UI_CONTRACT_THE_IMPOSTORS_DESC",
            "Entitlements": [
                "H1_LEGACY_STANDARD"
            ],
            "ScenePath": "assembly:/_PRO/Scenes/Missions/Paris/_scene_paris.entity",
            "Location": "LOCATION_PARIS",
            "IsPublished": true,
            "CreatorUserId": "fadb913c-e6bb-4283-a537-eb4d1150262e",
            "GameVersion": "8.10.0.0",
            "ServerVersion": "8.10.0.0",
            "CodeName_Hint": "Demara",
            "Type": "mission",
            "Subtype": "flashback",
            "Id": "d27ecffd-955a-4907-a5cc-72253ed56500",
            "PublicId": "194707810076",
            "TileImage": "images/Impostors.jpg",
            "GroupObjectiveDisplayOrder": [
                {
                    "Id": "335ce4e7-36bb-45cd-aa24-18564d48ed4e"
                },
                {
                    "Id": "f9c3905a-ec94-43b6-aae6-8b2f752467f7"
                },
                {
                    "Id": "124c40d5-b342-4288-b202-57e80148e0d7"
                },
                {
                    "Id": "1b21e6e6-beba-4f7e-8760-e9604a69c569"
                },
                {
                    "Id": "46b78498-b470-4aad-b72b-d90f3126a7f6"
                }
            ],
            "CreationTimestamp": "2024-05-11T21:33:17.090Z",
            "Release": "2.00.x",
            "Entitlements": ["H1_LEGACY_STANDARD"]
        },
        "UserData": {}
    })
    controller.addMission({
        "Data": {
            "Objectives": [
                {
                    "Type": "statemachine",
                    "Id": "296c73bb-d858-4d4f-8a6c-392fafb410f9",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 89fafd79-9c9f-4a0d-a4a1-13c2ffdcf039).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 89fafd79-9c9f-4a0d-a4a1-13c2ffdcf039).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "89fafd79-9c9f-4a0d-a4a1-13c2ffdcf039"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "89fafd79-9c9f-4a0d-a4a1-13c2ffdcf039"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Type": "statemachine",
                    "Id": "02ee376e-5454-455b-b584-eda741a77722",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository a5b1f605-7767-4db4-a24b-a9191a10f12d).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository a5b1f605-7767-4db4-a24b-a9191a10f12d).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "a5b1f605-7767-4db4-a24b-a9191a10f12d"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "a5b1f605-7767-4db4-a24b-a9191a10f12d"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Type": "statemachine",
                    "Id": "02ee376e-5454-455b-b584-eda741a77732",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 2da5acff-0025-4814-831f-30156a4ee38f).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 2da5acff-0025-4814-831f-30156a4ee38f).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "2da5acff-0025-4814-831f-30156a4ee38f"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "2da5acff-0025-4814-831f-30156a4ee38f"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                }
            ],
            "VR": [
            {
                "Quality": "base",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_pro/scenes/missions/coastaltown/vr_overrides_octopus.brick",
                    "assembly:/_pro/scenes/missions/coastaltown/vr_overrides_ps4perf.brick"
                ]
            },
            {
                "Quality": "better",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_pro/scenes/missions/coastaltown/vr_overrides_octopus.brick"
                ]
            }
        ],
            "GameDifficulties": [
                {
                    "Difficulty": "easy",
                    "Bricks": [
                        "assembly:/_pro/scenes/missions/coastaltown/difficulty_easy_sapienza_octopus.brick",
                        "assembly:/_PRO/Scenes/Missions/CoastalTown/mission_sazerac.brick",
                        "assembly:/_PRO/Scenes/Missions/CoastalTown/Scenario_CorpseReviver.brick",
                        "assembly:/_pro/scenes/missions/coastaltown/tod_wot_sunset.brick"
                    ]
                },
                {
                    "Difficulty": "normal",
                    "Bricks": [
                        "assembly:/_PRO/Scenes/Missions/CoastalTown/mission_sazerac.brick",
                        "assembly:/_PRO/Scenes/Missions/CoastalTown/Scenario_CorpseReviver.brick",
                        "assembly:/_pro/scenes/missions/coastaltown/tod_wot_sunset.brick"
                    ]
                },
                {
                    "Difficulty": "hard",
                    "Bricks": [
                        "assembly:/_pro/scenes/missions/coastaltown/octopus_pro1.brick",
                        "assembly:/_PRO/Scenes/Missions/CoastalTown/mission_sazerac.brick",
                        "assembly:/_PRO/Scenes/Missions/CoastalTown/Scenario_CorpseReviver.brick",
                        "assembly:/_pro/scenes/missions/coastaltown/tod_wot_sunset.brick"
                    ]
                }
            ],
            "Bricks": [],
            "GameChangers": [],
        },
        "Metadata": {
            "Title": "UI_CONTRACT_SECTERIAN_DRIFT_TITLE",
            "Description": "UI_CONTRACT_SECTERIAN_DRIFT_DESC",
            "Entitlements": [
                "H1_LEGACY_STANDARD"
            ],
            "ScenePath": "assembly:/_PRO/Scenes/Missions/CoastalTown/_scene_octopus.entity",
            "Location": "LOCATION_COASTALTOWN",
            "IsPublished": true,
            "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
            "GameVersion": "8.10.0.0",
            "ServerVersion": "8.10.0.0",
            "CodeName_Hint": "Damanhur",
            "Type": "mission",
            "Subtype": "flashback",
            "Id": "e07f9e22-53c1-4f28-9f2c-a4dff358180c",
            "PublicId": "137904207541",
            "TileImage": "images/Secterian.jpg",
            "GroupObjectiveDisplayOrder": [
                {
                    "Id": "89fafd79-9c9f-4a0d-a4a1-13c2ffdcf039"
                },
                {
                    "Id": "d749b0f2-d1f0-47d5-bab9-10e3ff4dac8b"
                },
                {
                    "Id": "a5b1f605-7767-4db4-a24b-a9191a10f12d"
                }
            ],
            "CreationTimestamp": "2024-05-11T21:33:17.090Z",
            "Release": "2.00.x",
            "Entitlements": ["H1_LEGACY_STANDARD"]
        },
        "UserData": {}
    })
    controller.addMission({
        "Data": {
            "Objectives": [
                {
                    "Type": "statemachine",
                    "Id": "1ed6b168-f0a4-45e5-b335-12d4d90b3370",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository ca31c88f-d15e-407b-8407-231f1b068402).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository ca31c88f-d15e-407b-8407-231f1b068402).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "ca31c88f-d15e-407b-8407-231f1b068402"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "ca31c88f-d15e-407b-8407-231f1b068402"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Type": "statemachine",
                    "Id": "fd3f496f-9b73-4747-9b70-01f0c34bb930",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 905e7cd5-1dd9-4ce3-bec2-a0120b921308).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 905e7cd5-1dd9-4ce3-bec2-a0120b921308).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "905e7cd5-1dd9-4ce3-bec2-a0120b921308"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "905e7cd5-1dd9-4ce3-bec2-a0120b921308"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Type": "statemachine",
                    "Id": "47200c20-b79b-4fe8-b617-70b968880baa",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 50cea951-bb99-431d-aa22-9a31afcaec59).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 50cea951-bb99-431d-aa22-9a31afcaec59).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "50cea951-bb99-431d-aa22-9a31afcaec59"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "50cea951-bb99-431d-aa22-9a31afcaec59"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Type": "statemachine",
                    "Id": "47200c20-b79b-4fe8-b617-70b978880baa",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 756f6462-9c1f-460e-bbf4-331f2916508a).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 756f6462-9c1f-460e-bbf4-331f2916508a).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "756f6462-9c1f-460e-bbf4-331f2916508a"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "756f6462-9c1f-460e-bbf4-331f2916508a"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                }
            ],
            "VR": [
            {
                "Quality": "base",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_PRO/Scenes/missions/marrakesh/vr_overrides_spider.brick",
                    "assembly:/_PRO/scenes/missions/marrakesh/vr_overrides_ps4perf.brick"
                ]
            },
            {
                "Quality": "better",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_PRO/Scenes/missions/marrakesh/vr_overrides_spider.brick"
                ]
            }
        ],
            "GameDifficulties": [
                {
                    "Difficulty": "easy",
                    "Bricks": [
                        "assembly:/_pro/scenes/missions/marrakesh/difficulty_easy_marrakesh_spider.brick",
                        "assembly:/_pro/scenes/missions/marrakesh/mission_marrakesh_screwdriver.brick",
                        "assembly:/_pro/scenes/missions/marrakesh/mission_marrakesh_hottoddy.brick",
                        "assembly:/_pro/scenes/missions/marrakesh/mission_marrakesh_ts6_ginfizz.brick",
                        "assembly:/_pro/scenes/missions/marrakesh/lighting_dusk.brick"
                    ]
                },
                {
                    "Difficulty": "normal",
                    "Bricks": [
                        "assembly:/_pro/scenes/missions/marrakesh/mission_marrakesh_screwdriver.brick",
                        "assembly:/_pro/scenes/missions/marrakesh/mission_marrakesh_hottoddy.brick",
                        "assembly:/_pro/scenes/missions/marrakesh/mission_marrakesh_ts6_ginfizz.brick",
                        "assembly:/_pro/scenes/missions/marrakesh/lighting_dusk.brick"

                    ]
                },
                {
                    "Difficulty": "hard",
                    "Bricks": [
                        "assembly:/_PRO/Scenes/Missions/marrakesh/difficulty_pro1_marrakesh_spider.brick",
                        "assembly:/_pro/scenes/missions/marrakesh/mission_marrakesh_screwdriver.brick",
                        "assembly:/_pro/scenes/missions/marrakesh/mission_marrakesh_hottoddy.brick",
                        "assembly:/_pro/scenes/missions/marrakesh/mission_marrakesh_ts6_ginfizz.brick",
                        "assembly:/_pro/scenes/missions/marrakesh/lighting_dusk.brick"
                    ]
                }
            ],
            "Bricks": [],
            "GameChangers": [
                "f41f18fe-0fe5-416a-a793-50727e594655"
            ],
        },
        "Metadata": {
            "Title": "UI_CONTRACT_POWER_TITLE",
            "Description": "UI_CONTRACT_POWER_DESC",
            "Entitlements": [
                "H1_LEGACY_STANDARD"
            ],
            "ScenePath": "assembly:/_pro/scenes/missions/marrakesh/_scene_spider.entity",
            "Location": "LOCATION_MARRAKECH",
            "IsPublished": true,
            "CreatorUserId": "fxdb923c-e6bb-4283-a537-eb4d1150262e",
            "GameVersion": "8.10.0.0",
            "ServerVersion": "8.10.0.0",
            "CodeName_Hint": "Skhirat",
            "Type": "mission",
            "Subtype": "flashback",
            "Id": "f8273d68-09fb-414e-b112-148560201f01",
            "PublicId": "162538875448",
            "TileImage": "images/Power.jpg",
            "GroupObjectiveDisplayOrder": [
                {
                    "Id": "ca31c88f-d15e-407b-8407-231f1b068402"
                },
                {
                    "Id": "905e7cd5-1dd9-4ce3-bec2-a0120b921308"
                },
                {
                    "Id": "50cea951-bb99-431d-aa22-9a31afcaec59"
                },
                {
                    "Id": "756f6462-9c1f-460e-bbf4-331f2916508a"
                }
            ],
            "CreationTimestamp": "2023-04-24T15:47:58.627Z"
        },
        "UserData": {}
    })
    controller.addMission({
        "Data": {
            "Objectives": [
                {
                    "Type": "statemachine",
                    "Id": "e4be6945-2173-46dd-bafe-043615843b79",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 9d4e194d-67e5-48a6-819e-172556f40157).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 9d4e194d-67e5-48a6-819e-172556f40157).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "9d4e194d-67e5-48a6-819e-172556f40157"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "9d4e194d-67e5-48a6-819e-172556f40157"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Type": "statemachine",
                    "Id": "6bd1e308-9bf9-4f9d-97d7-12caf1db6b95",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 731db58c-ec2f-40e1-92a1-6c367683b7d9).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 731db58c-ec2f-40e1-92a1-6c367683b7d9).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "731db58c-ec2f-40e1-92a1-6c367683b7d9"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "731db58c-ec2f-40e1-92a1-6c367683b7d9"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Type": "statemachine",
                    "Id": "fb63a347-6f03-481a-9a88-5a0162c5f741",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 7387e648-ad6b-408d-a0ee-3b3943767e78).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 7387e648-ad6b-408d-a0ee-3b3943767e78).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "7387e648-ad6b-408d-a0ee-3b3943767e78"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "7387e648-ad6b-408d-a0ee-3b3943767e78"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Type": "statemachine",
                    "Id": "d1311911-9529-4ec3-a0de-52885c4f4d7a",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 978ad630-8d31-4416-8976-8ed1009a4dbd).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 978ad630-8d31-4416-8976-8ed1009a4dbd).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "978ad630-8d31-4416-8976-8ed1009a4dbd"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "978ad630-8d31-4416-8976-8ed1009a4dbd"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Id": "b1ec35e8-2b35-4394-815f-ac4db064f877",
                    "UpdateActivationWhileCompleted": true,
                    "Category": "primary",
                    "ObjectiveType": "custom",
                    "ForceShowOnLoadingScreen": true,
                    "Image": "images/CardsH.jpg",
                    "BriefingName": "$loc UI_CONTRACT_STEAL_CARDS_TITLE",
                    "BriefingText": "$loc UI_CONTRACT_STEAL_CARDS_DESC",
                    "LongBriefingText": "$loc UI_CONTRACT_STEAL_CARDS_DESC",
                    "DisplayAsKillObjective": false,
                    "HUDTemplate": {
                        "display": "$loc UI_CONTRACT_STEAL_CARDS_TITLE",
                        "iconType": 16
                    },
                    "Type": "statemachine",
                    "Scope": "hit",
                    "Definition": {
                        "Context": {
                            "Targets": [],
                            "ForceUpdateCounters": 0,
                            "CardsCollected": 0,
                            "CardsRemaining": 4,
                            "CardsTotal": 4
                        },
                        "ContextListeners": {
                            "CardsRemaining": {
                                "type": "objective-counter",
                                "header": "$loc UI_CONTRACT_STEAL_CARDS_TITLE",
                                "deactivate": 0
                            },
                            "ForceUpdateCounters": {
                                "type": "force-update",
                                "target": "CardsRemaining"
                            }
                        },
                        "States": {
                            "Start": {
                                "-": {
                                    "Condition": {
                                        "$eq": ["$.ForceUpdateCounters", 0]
                                    },
                                    "Actions": { "$inc": "ForceUpdateCounters" }
                                },
                                "ItemPickedUp": {
                                    "Condition": {
                                        "$eq": [
                                            "$Value.RepositoryId",
                                            "69f843a8-320d-47cf-ac96-e9ebba06415f"
                                        ]
                                    },
                                    "Actions": {
                                        "$inc": "CardsCollected",
                                        "$dec": "CardsRemaining"
                                    },
                                    "Transition": "CheckCount"
                                },
                                "ItemDropped": {
                                    "Condition": {
                                        "$eq": [
                                            "$Value.RepositoryId",
                                            "69f843a8-320d-47cf-ac96-e9ebba06415f"
                                        ]
                                    },
                                    "Actions": {
                                        "$dec": "CardsCollected",
                                        "$inc": "CardsRemaining"
                                    },
                                    "Transition": "CheckCount"
                                }
                            },
                            "CheckCount": {
                                "-": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$.CardsCollected",
                                                "$.CardsTotal"
                                            ]
                                        },
                                        "Actions": { "$set": ["CardsRemaining", 0] },
                                        "Transition": "Success"
                                    },
                                    { "Transition": "Start" }
                                ]
                            },
                            "Success": {
                                "ItemDropped": {
                                    "Condition": {
                                        "$eq": [
                                            "$Value.RepositoryId",
                                            "69f843a8-320d-47cf-ac96-e9ebba06415f"
                                        ]
                                    },
                                    "Actions": {
                                        "$dec": "CardsCollected",
                                        "$inc": "CardsRemaining"
                                    },
                                    "Transition": "CheckCount"
                                }
                            }
                        }
                    }
                }
            ],
            "VR": [
            {
                "Quality": "base",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_PRO/Scenes/Missions/bangkok/vr_overrides_bangkok.brick",
                    "assembly:/_PRO/Scenes/Missions/bangkok/vr_overrides_ps4perf.brick"
                ]
            },
            {
                "Quality": "better",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_PRO/Scenes/Missions/bangkok/vr_overrides_bangkok.brick"
                ]
            }
        ],
            "GameDifficulties": [
                {
                    "Difficulty": "easy",
                    "Bricks": [
                        "assembly:/_pro/scenes/missions/bangkok/difficulty_easy_bangkok_tiger.brick",
                        "assembly:/_pro/scenes/missions/bangkok/mission_ts6_gimlet.brick",
                        "assembly:/_pro/scenes/missions/bangkok/mission_bangkok_brassmonkey.brick",
                        "assembly:/_pro/scenes/missions/bangkok/tod_zika_night.brick"
                    ]
                },
                {
                    "Difficulty": "normal",
                    "Bricks": [
                        "assembly:/_pro/scenes/missions/bangkok/mission_ts6_gimlet.brick",
                        "assembly:/_pro/scenes/missions/bangkok/mission_bangkok_brassmonkey.brick",
                        "assembly:/_pro/scenes/missions/bangkok/tod_zika_night.brick"
                    ]
                },
                {
                    "Difficulty": "hard",
                    "Bricks": [
                        "assembly:/_PRO/Scenes/Missions/Bangkok/difficulty_pro1_bangkok_tiger.brick",
                        "assembly:/_pro/scenes/missions/bangkok/mission_ts6_gimlet.brick",
                        "assembly:/_pro/scenes/missions/bangkok/mission_bangkok_brassmonkey.brick",
                        "assembly:/_pro/scenes/missions/bangkok/tod_zika_night.brick"
                    ]
                }
            ],
            "Bricks": [],
            "GameChangers": [
                "1f1f3c9e-1490-4fcc-aee6-5fde7c6c48ca"
            ],
        },
        "Metadata": {
            "Title": "UI_CONTRACT_GLASS_TITLE",
            "Description": "UI_CONTRACT_GLASS_DESC",
            "Entitlements": [
                "H1_LEGACY_STANDARD"
            ],
            "ScenePath": "assembly:/_PRO/Scenes/Missions/Bangkok/_scene_tiger.entity",
            "Location": "LOCATION_BANGKOK",
            "IsPublished": true,
            "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
            "GameVersion": "8.10.0.0",
            "ServerVersion": "8.10.0.0",
            "CodeName_Hint": "SnakeBite",
            "Type": "mission",
            "Subtype": "flashback",
            "Id": "3526n108-6e12-4db7-afcd-d38fe24370e5",
            "PublicId": "154151630514",
            "TileImage": "images/Glass.jpg",
            "GroupObjectiveDisplayOrder": [
                {
                    "Id": "731db58c-ec2f-40e1-92a1-6c367683b7d9"
                },
                {
                    "Id": "7387e648-ad6b-408d-a0ee-3b3943767e78"
                },
                {
                    "Id": "978ad630-8d31-4416-8976-8ed1009a4dbd"
                },
                {
                    "Id": "9d4e194d-67e5-48a6-819e-172556f40157"
                }
            ],
            "CreationTimestamp": "2023-04-25T14:31:08.566Z"
        },
        "UserData": {}
    })
    controller.addMission({
        "Data": {
            "Objectives": [
                {
                    "Type": "statemachine",
                    "Id": "6bb44f12-0093-48ea-8546-808995a08c35",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 229d24be-d95a-4c73-a1be-afac4a05a5e3).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 229d24be-d95a-4c73-a1be-afac4a05a5e3).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "229d24be-d95a-4c73-a1be-afac4a05a5e3"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "229d24be-d95a-4c73-a1be-afac4a05a5e3"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Type": "statemachine",
                    "Id": "04216332-b44b-4406-9188-61b25b55a17e",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 441209db-35ca-46e8-bb99-b9c3f8e8783c).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 441209db-35ca-46e8-bb99-b9c3f8e8783c).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "441209db-35ca-46e8-bb99-b9c3f8e8783c"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "441209db-35ca-46e8-bb99-b9c3f8e8783c"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Type": "statemachine",
                    "Id": "a604eb71-04d2-4c32-865a-c15aa700642f",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository abb0c23f-a38a-4492-8a16-4e3c7c438b70).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository abb0c23f-a38a-4492-8a16-4e3c7c438b70).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "abb0c23f-a38a-4492-8a16-4e3c7c438b70"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "abb0c23f-a38a-4492-8a16-4e3c7c438b70"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                }
            ],
            "VR": [
            {
                "Quality": "base",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_PRO/Scenes/missions/colorado_2/vr_overrides_bull.brick",
                    "assembly:/_PRO/scenes/missions/colorado_2/vr_overrides_ps4perf.brick"
                ]
            },
            {
                "Quality": "better",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_PRO/Scenes/missions/colorado_2/vr_overrides_bull.brick"
                ]
            }
        ],
            "GameDifficulties": [
                {
                    "Difficulty": "easy",
                    "Bricks": [
                        "assembly:/_pro/scenes/missions/colorado_2/difficulty_easy_colorado_bull.brick",
                        "assembly:/_PRO/Scenes/Missions/Colorado_2/_scene_ts6_blackrussian.brick",
                        "assembly:/_PRO/Scenes/Missions/Colorado_2/_scene_flirtini.brick",
                        "assembly:/_PRO/Scenes/Missions/Colorado_2/_scene_bushwacker.brick",
                        "assembly:/_PRO/Scenes/Missions/Colorado_2/lighting_night.brick"
                    ]
                },
                {
                    "Difficulty": "normal",
                    "Bricks": [
                        "assembly:/_PRO/Scenes/Missions/Colorado_2/_scene_ts6_blackrussian.brick",
                        "assembly:/_PRO/Scenes/Missions/Colorado_2/_scene_flirtini.brick",
                        "assembly:/_PRO/Scenes/Missions/Colorado_2/_scene_bushwacker.brick",
                        "assembly:/_PRO/Scenes/Missions/Colorado_2/lighting_night.brick"
                    ]
                },
                {
                    "Difficulty": "hard",
                    "Bricks": [
                        "assembly:/_PRO/Scenes/Missions/Colorado_2/difficulty_pro1_bull.brick",
                        "assembly:/_PRO/Scenes/Missions/Colorado_2/_scene_ts6_blackrussian.brick",
                        "assembly:/_PRO/Scenes/Missions/Colorado_2/_scene_flirtini.brick",
                        "assembly:/_PRO/Scenes/Missions/Colorado_2/_scene_bushwacker.brick",
                        "assembly:/_PRO/Scenes/Missions/Colorado_2/lighting_night.brick"
                    ]
                }
            ],
            "GameChangers": [],
            "Bricks": []
        },
        "Metadata": {
            "Title": "UI_CONTRACT_PONZI_TITLE",
            "Description": "UI_CONTRACT_PONZI_DESC",
            "Entitlements": [
                "H1_LEGACY_STANDARD"
            ],
            "ScenePath": "assembly:/_PRO/Scenes/Missions/Colorado_2/_scene_bull.entity",
            "Location": "LOCATION_COLORADO",
            "IsPublished": true,
            "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
            "GameVersion": "8.10.0.0",
            "ServerVersion": "8.10.0.0",
            "CodeName_Hint": "Ponzi",
            "Type": "mission",
            "Subtype": "flashback",
            "Id": "a49302e2-249e-4c17-a7f7-12a47d4cd485",
            "PublicId": "137955302114",
            "TileImage": "images/Ponzi.jpg",
            "GroupObjectiveDisplayOrder": [
                {
                    "Id": "229d24be-d95a-4c73-a1be-afac4a05a5e3"
                },
                {
                    "Id": "441209db-35ca-46e8-bb99-b9c3f8e8783c"
                },
                {
                    "Id": "abb0c23f-a38a-4492-8a16-4e3c7c438b70"
                }
            ],
            "CreationTimestamp": "2023-09-28T13:21:41.558Z"
        },
        "UserData": {}
    })
    controller.addMission({
        "Data": {
            "Objectives": [
                {
                    "Id": "5a9d069b-30e3-40d6-a310-fb9da5c9406d",
                    "Primary": true,
                    "SuccessEvent": {
                        "EventName": "Kill",
                        "EventValues": {
                            "RepositoryId": "c04167bc-f321-4e0b-be51-0b5e662d2669"
                        }
                    }
                },
                {
                    "Id": "b1ec35e8-2b35-4394-815f-ac4db064f877",
                    "ObjectiveType": "custom",
                    "Image": "Images/Contracts/sarajevosix/Orbis006_SeaBreeze/Objective1.jpg",
                    "BriefingName": "$loc UI_CONTRACT_SEABREEZE_OBJ_1_TITLE",
                    "BriefingText": "$loc UI_CONTRACT_SEABREEZE_OBJ_1_TITLE",
                    "LongBriefingText": "$loc UI_CONTRACT_SEABREEZE_OBJ_1_DESC",
                    "Category": "primary",
                    "HUDTemplate": {
                        "display": "$loc UI_CONTRACT_SEABREEZE_OBJ_1_TITLE",
                        "iconType": 17
                    },
                    "Type": "statemachine",
                    "Definition": {
                        "Context": {
                            "Targets": ["08374fe4-147e-48ca-a662-505be5409ae9"]
                        },
                        "States": {
                            "Start": {
                                "UncoveredEvidence": {
                                    "Transition": "Success"
                                },
                                "Spotted": {
                                    "Transition": "Failure"
                                }
                            }
                        }
                    }
                },
                {
                    "Type": "statemachine",
                    "Id": "a4f7b4c7-1142-4e30-af69-778893c50abd",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 2e1a30c5-b1e0-4984-b3f4-67f01f9ebfef).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 2e1a30c5-b1e0-4984-b3f4-67f01f9ebfef).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "2e1a30c5-b1e0-4984-b3f4-67f01f9ebfef"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "2e1a30c5-b1e0-4984-b3f4-67f01f9ebfef"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Type": "statemachine",
                    "Id": "8da6efbe-fb3d-4882-a9fe-91c398e72cf8",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository b13314ab-ea25-48b7-9e51-8ebb87788e20).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository b13314ab-ea25-48b7-9e51-8ebb87788e20).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "b13314ab-ea25-48b7-9e51-8ebb87788e20"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "b13314ab-ea25-48b7-9e51-8ebb87788e20"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Id": "5f1ddb3d-8606-479b-ae81-659a5b523f83",
                    "Primary": true,
                    "IsHidden": true,
                    "Category": "primary",
                    "ObjectiveType": "custom",
                    "DisplayAsKillObjective": true,
                    "Image": "images/actors/elusive_DirtyOctopus_face.jpg",
                    "BriefingName": "$loc UI_CONTRACT_DIRTY_OCTOPUS_OBJ_1_TITLE",
                    "BriefingText": "$loc UI_CONTRACT_DIRTY_OCTOPUS_OBJ_1_TITLE",
                    "LongBriefingText": "$loc UI_CONTRACT_DIRTY_OCTOPUS_OBJ_1_DESC",
                    "HUDTemplate": {
                        "display": "$loc UI_CONTRACT_DIRTY_OCTOPUS_OBJ_1_TITLE"
                    },
                    "Type": "statemachine",
                    "Scope": "hit",
                    "Definition": {
                        "Context": { "KilledActors": [], "Targets": [] },
                        "States": {
                            "Start": {
                                "TargetPicked": [
                                    {
                                        "Actions": {
                                            "$pushunique": [
                                                "Targets",
                                                "$Value.RepositoryId"
                                            ]
                                        },
                                        "Transition": "TargetPicked"
                                    }
                                ]
                            },
                            "TargetPicked": {
                                "Kill": [
                                    {
                                        "Actions": {
                                            "$pushunique": [
                                                "KilledActors",
                                                "$Value.RepositoryId"
                                            ]
                                        }
                                    },
                                    {
                                        "Condition": {
                                            "$all": {
                                                "in": "$.Targets",
                                                "?": {
                                                    "$any": {
                                                        "in": "$.KilledActors",
                                                        "?": {
                                                            "$eq": ["$.#", "$.##"]
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Type": "statemachine",
                    "IsHidden": true,
                    "Id": "a9951cdb-0ce6-4ab9-b579-65298839d5a2",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository f4eb50bc-1a58-4487-a568-de5ffe19b7ff).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository f4eb50bc-1a58-4487-a568-de5ffe19b7ff).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": ["f4eb50bc-1a58-4487-a568-de5ffe19b7ff"]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "f4eb50bc-1a58-4487-a568-de5ffe19b7ff"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    },
                    "TargetConditions": [
                        {
                            "Type": "weapon",
                            "RepositoryId": "dfa0c4e9-37df-4b4e-830b-1d4eda6149af",
                            "HardCondition": false,
                            "ObjectiveId": "9286bce1-af2c-4f95-950b-dbbbe7f72e7e"
                        }
                    ]
                },
                {
                    "Type": "statemachine",
                    "Id": "9286bce1-af2c-4f95-950b-dbbbe7f72e7e",
                    "IsHidden": true,
                    "Category": "secondary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": ["f4eb50bc-1a58-4487-a568-de5ffe19b7ff"]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.RepositoryId",
                                                        "f4eb50bc-1a58-4487-a568-de5ffe19b7ff"
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillItemRepositoryId",
                                                        "dfa0c4e9-37df-4b4e-830b-1d4eda6149af"
                                                    ]
                                                }
                                            ]
                                        },
                                        "Transition": "Success"
                                    },
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "f4eb50bc-1a58-4487-a568-de5ffe19b7ff"
                                            ]
                                        },
                                        "Transition": "Failure"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Type": "statemachine",
                    "Id": "e9c6a29c-9690-4f7b-b674-411118d1cb04",
                    "IsHidden": true,
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 88836cf0-852e-4244-9aa3-90174467b5b1).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 88836cf0-852e-4244-9aa3-90174467b5b1).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": ["88836cf0-852e-4244-9aa3-90174467b5b1"]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "88836cf0-852e-4244-9aa3-90174467b5b1"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    },
                    "TargetConditions": [
                        {
                            "Type": "weapon",
                            "RepositoryId": "dfa0c4e9-37df-4b4e-830b-1d4eda6149af",
                            "HardCondition": false,
                            "ObjectiveId": "b2d7caf1-f0bc-493b-a183-920275b7c15e"
                        }
                    ]
                },
                {
                    "Type": "statemachine",
                    "Id": "b2d7caf1-f0bc-493b-a183-920275b7c15e",
                    "IsHidden": true,
                    "Category": "secondary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": ["88836cf0-852e-4244-9aa3-90174467b5b1"]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$and": [
                                                {
                                                    "$eq": [
                                                        "$Value.RepositoryId",
                                                        "88836cf0-852e-4244-9aa3-90174467b5b1"
                                                    ]
                                                },
                                                {
                                                    "$eq": [
                                                        "$Value.KillItemRepositoryId",
                                                        "dfa0c4e9-37df-4b4e-830b-1d4eda6149af"
                                                    ]
                                                }
                                            ]
                                        },
                                        "Transition": "Success"
                                    },
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "88836cf0-852e-4244-9aa3-90174467b5b1"
                                            ]
                                        },
                                        "Transition": "Failure"
                                    }
                                ]
                            }
                        }
                    }
                }
            ],
            "VR": [
            {
                "Quality": "base",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_pro/scenes/missions/hokkaido/vr_overrides_snowcrane.brick",
                    "assembly:/_PRO/scenes/missions/hokkaido/vr_overrides_ps4perf.brick"
                ]
            },
            {
                "Quality": "better",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_pro/scenes/missions/hokkaido/vr_overrides_snowcrane.brick"
                ]
            }
        ],
            "GameDifficulties": [
                {
                    "Difficulty": "easy",
                    "Bricks": [
                        "assembly:/_pro/scenes/missions/hokkaido/difficulty_easy_hokkaido_snowcrane.brick",
                        "assembly:/_pro/scenes/missions/hokkaido/tod_flu.brick",
                        "assembly:/_PRO/Scenes/Missions/Hokkaido/mission_hokkaido_ts6_seabreeze.brick",
                        "assembly:/_PRO/Scenes/Missions/Hokkaido/_scene_dirtyoctopus.brick",
                        "assembly:/_PRO/Scenes/Missions/Hokkaido/_scene_moscowmule.brick"
                    ]
                },
                {
                    "Difficulty": "normal",
                    "Bricks": [
                        "assembly:/_pro/scenes/missions/hokkaido/tod_flu.brick",
                        "assembly:/_PRO/Scenes/Missions/Hokkaido/mission_hokkaido_ts6_seabreeze.brick",
                        "assembly:/_PRO/Scenes/Missions/Hokkaido/_scene_dirtyoctopus.brick",
                        "assembly:/_PRO/Scenes/Missions/Hokkaido/_scene_moscowmule.brick"
                    ]
                },
                {
                    "Difficulty": "hard",
                    "Bricks": [
                        "assembly:/_pro/scenes/missions/hokkaido/difficulty_pro1_hokkaido_snowcrane.brick",
                        "assembly:/_pro/scenes/missions/hokkaido/tod_flu.brick",
                        "assembly:/_PRO/Scenes/Missions/Hokkaido/mission_hokkaido_ts6_seabreeze.brick",
                        "assembly:/_PRO/Scenes/Missions/Hokkaido/_scene_dirtyoctopus.brick",
                        "assembly:/_PRO/Scenes/Missions/Hokkaido/_scene_moscowmule.brick"
                    ]
                }
            ],
            "GameChangers": [
                "1f1f3c9e-1490-4fcc-aee6-5fde7c6c48ca"
            ],
            "Bricks": []
        },
        "Metadata": {
            "Title": "UI_CONTRACT_ASAHI_TITLE",
            "Description": "UI_CONTRACT_ASAHI_DESC",
            "Entitlements": [
                "H1_LEGACY_STANDARD"
            ],
            "ScenePath": "assembly:/_PRO/Scenes/Missions/Hokkaido/_scene_snowcrane.entity",
            "Location": "LOCATION_HOKKAIDO",
            "IsPublished": true,
            "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
            "GameVersion": "8.10.0.0",
            "ServerVersion": "8.10.0.0",
            "CodeName_Hint": "Asahi",
            "Type": "mission",
            "Subtype": "flashback",
            "Id": "47asfedb-422e-480e-ab62-84db0e26bda8",
            "PublicId": "126187192293",
            "TileImage": "images/PowerWorld.jpg",
            "GroupObjectiveDisplayOrder": [
                {
                    "Id": "9bebb40a-3746-4ba2-8bfc-a1fcabaec72c"
                },
                {
                    "Id": "2e1a30c5-b1e0-4984-b3f4-67f01f9ebfef"
                },
                {
                    "Id": "b13314ab-ea25-48b7-9e51-8ebb87788e20"
                },
                {
                    "Id": "a1f7ac80-7fe3-4df1-b332-539c78a72a87"
                },
                {
                    "Id": "6c09bd70-6670-486b-9222-15db93222b56"
                }
            ],
            "CreationTimestamp": "2023-09-28T13:35:00.362Z"
        },
        "UserData": {}
    })
    controller.addMission({
        "Data": {
            "Objectives": [
                {
                    "Type": "statemachine",
                    "Id": "331ea4f9-f631-4ad7-b445-a5bd6dd08ea7",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository a7930fae-37ac-45f1-977f-4e9ef8d37434).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository a7930fae-37ac-45f1-977f-4e9ef8d37434).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "a7930fae-37ac-45f1-977f-4e9ef8d37434"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "a7930fae-37ac-45f1-977f-4e9ef8d37434"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Type": "statemachine",
                    "Id": "331ea4f9-f625-4ad7-b445-a5bd6dd08ea7",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository f65fff84-6cad-4a11-9a0a-b89430c03397).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository f65fff84-6cad-4a11-9a0a-b89430c03397).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "f65fff84-6cad-4a11-9a0a-b89430c03397"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "f65fff84-6cad-4a11-9a0a-b89430c03397"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                }
            ],
            "GameDifficulties": [
                {
                    "Difficulty": "easy",
                    "Bricks": [
                        "assembly:/_pro/scenes/missions/paris/difficulty_easy_paris_peacock.brick",
                        "assembly:/_pro/scenes/missions/paris/tod_night.brick",
                        "assembly:/_pro/scenes/missions/paris/lawyer_paris.brick"
                    ]
                },
                {
                    "Difficulty": "normal",
                    "Bricks": [
                        "assembly:/_pro/scenes/missions/paris/tod_night.brick",
                        "assembly:/_pro/scenes/missions/paris/lawyer_paris.brick"
                    ]
                },
                {
                    "Difficulty": "hard",
                    "Bricks": [
                        "assembly:/_pro/scenes/missions/paris/difficulty_pro1_paris_fashionshow.brick",
                        "assembly:/_pro/scenes/missions/paris/tod_night.brick",
                        "assembly:/_pro/scenes/missions/paris/lawyer_paris.brick"
                    ]
                }
            ],
            "VR": [
            {
                "Quality": "base",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_pro/scenes/missions/paris/vr_overrides_peacock.brick",
                    "assembly:/_pro/scenes/missions/paris/vr_agility_overrides_peacock.brick",
                    "assembly:/_pro/scenes/missions/paris/vr_overrides_ps4perf.brick"
                ]
            },
            {
                "Quality": "better",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_pro/scenes/missions/paris/vr_overrides_peacock.brick",
                    "assembly:/_pro/scenes/missions/paris/vr_agility_overrides_peacock.brick"
                ]
            }
        ],
            "GameChangers": [],
            "Bricks": []
        },
        "Metadata": {
            "Title": "UI_CONTRACT_BENKO_TITLE",
            "Description": "UI_CONTRACT_BENKO_DESC",
            "Entitlements": [
                "H1_LEGACY_STANDARD"
            ],
            "ScenePath": "assembly:/_PRO/Scenes/Missions/Paris/_scene_paris.entity",
            "Location": "LOCATION_PARIS",
            "IsPublished": true,
            "CreatorUserId": "fadb913c-e6bb-4283-a537-eb4d1150262e",
            "GameVersion": "8.10.0.0",
            "ServerVersion": "8.10.0.0",
            "CodeName_Hint": "Benko",
            "Type": "flashback",
            "Subtype": "specialassignment",
            "Id": "d27ecffd-955a-4727-a5cc-72253ed56500",
            "PublicId": "194707810076",
            "TileImage": "images/Justice.jpg",
            "GroupObjectiveDisplayOrder": [
                {
                    "Id": "a7930fae-37ac-45f1-977f-4e9ef8d37434"
                },
                {
                    "Id": "f65fff84-6cad-4a11-9a0a-b89430c03397"
                }
            ],
            "CreationTimestamp": "2024-05-11T21:33:17.090Z",
            "Release": "2.00.x"
        },
        "UserData": {}
    })

    controller.addMission({
        "Data": {
            "Objectives": [
                {
                    "Type": "statemachine",
                    "Id": "331ea4f9-f631-4ad7-b445-a5bd6dd08ea7",
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 3f5d9a9d-5a51-437a-a4c5-c2eae28a4eed).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 3f5d9a9d-5a51-437a-a4c5-c2eae28a4eed).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "3f5d9a9d-5a51-437a-a4c5-c2eae28a4eed"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "3f5d9a9d-5a51-437a-a4c5-c2eae28a4eed"
                                            ]
                                        },
                                        "Transition": "Success"
                                    }
                                ]
                            }
                        }
                    }
                },
                {
                    "Id": "0c5eb0aa-6b87-4006-a80a-074612c9e782",
                    "Type": "statemachine",
                    "Category": "primary",
                    "Image": "images/Bust.jpg",
                    "BriefingName": "$loc UI_CONTRACT_STEAL_BUST",
                    "BriefingText": "$loc UI_CONTRACT_STEAL_BUST_DESC",
                    "IsHidden": false,
                    "LongBriefingText": "$loc UI_CONTRACT_STEAL_BUST_DESC",
                    "ObjectiveType": "custom",
                    "ForceShowOnLoadingScreen": true,
                    "HUDTemplate": {
                        "display": "$loc UI_CONTRACT_STEAL_BUST",
                        "iconType": 16
                    },
                    "Type": "statemachine",
                    "Scope": "hit",
                    "Definition": {
                        "Context": {
                            "Targets": [],
                            "ForceUpdateCounters": 0,
                            "BustsCollected": 0,
                            "BustsRemaining": 2,
                            "BustsTotal": 2
                        },
                        "ContextListeners": {
                            "BustsRemaining": {
                                "type": "objective-counter",
                                "header": "UI_CONTRACT_STEAL_BUST",
                                "deactivate": 0
                            },
                            "ForceUpdateCounters": {
                                "type": "force-update",
                                "target": "BustsRemaining"
                            }
                        },
                        "States": {
                            "Start": {
                                "-": {
                                    "Condition": {
                                        "$eq": ["$.ForceUpdateCounters", 0]
                                    },
                                    "Actions": { "$inc": "ForceUpdateCounters" }
                                },
                                "ItemPickedUp": {
                                    "Condition": {
                                        "$eq": [
                                            "$Value.RepositoryId",
                                            "31f36818-623f-4c92-892f-d7b19bb325e1"
                                        ]
                                    },
                                    "Actions": {
                                        "$inc": "BustsCollected",
                                        "$dec": "BustsRemaining"
                                    },
                                    "Transition": "CheckCount"
                                },
                                "ItemDropped": {
                                    "Condition": {
                                        "$eq": [
                                            "$Value.RepositoryId",
                                            "31f36818-623f-4c92-892f-d7b19bb325e1"
                                        ]
                                    },
                                    "Actions": {
                                        "$dec": "BustsCollected",
                                        "$inc": "BustsRemaining"
                                    },
                                    "Transition": "CheckCount"
                                }
                            },
                            "CheckCount": {
                                "-": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$.BustsCollected",
                                                "$.BustsTotal"
                                            ]
                                        },
                                        "Actions": { "$set": ["BustsRemaining", 0] },
                                        "Transition": "Success"
                                    },
                                    { "Transition": "Start" }
                                ]
                            },
                            "Success": {
                                "ItemDropped": {
                                    "Condition": {
                                        "$eq": [
                                            "$Value.RepositoryId",
                                            "31f36818-623f-4c92-892f-d7b19bb325e1"
                                        ]
                                    },
                                    "Actions": {
                                        "$dec": "BustsCollected",
                                        "$inc": "BustsRemaining"
                                    },
                                    "Transition": "CheckCount"
                                }
                            }
                        }
                    }
                }
            ],
            "VR": [
            {
                "Quality": "base",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_pro/scenes/missions/sheep/vr_overrides_sheep_2.brick",
                    "assembly:/_pro/scenes/missions/sheep/vr_overrides_sheep.brick"
                ]
            }
        ],
            "GameDifficulties": [
            {
                "Difficulty": "easy",
                "Bricks": [
                    "assembly:/_pro/scenes/missions/sheep/difficulty_easy_newzealand_sheep.brick",
                    
                ]
            },
            {
                "Difficulty": "normal",
                "Bricks": []
            },
            {
                "Difficulty": "hard",
                "Bricks": [
                    "assembly:/_pro/scenes/missions/sheep/difficulty_hard_newzealand_sheep.brick",
                ]
            }
        ],
            "GameChangers": [],
            "Entrances": ["d08b7d6d-9b1f-4131-bb44-4ebd2cdb1cec"],
            "Bricks": [
                "assembly:/_pro/scenes/missions/sheep/mission_cia_devil.brick",
                "assembly:/_pro/scenes/missions/sheep/tod_twilight.brick"
            ],
    
        },
        "Metadata": {
            "Title": "UI_CONTRACT_KIWI_TITLE",
            "Description": "UI_CONTRACT_KIWI_DESC",
            "Entitlements": ["H2_LEGACY_STANDARD"],
            "ScenePath": "assembly:/_pro/scenes/missions/sheep/scene_adonis.entity",
            "Location": "LOCATION_NEWZEALAND",
            "IsPublished": true,
            "CreatorUserId": "fadb913c-e6bb-4283-a537-eb4d1150262e",
            "GameVersion": "8.10.0.0",
            "ServerVersion": "8.10.0.0",
            "CodeName_Hint": "Kiwi",
            "Type": "mission",
            "Subtype": "flashback",
            "Id": "c47ecffd-895a-4847-b847-62153ed56575",
            "PublicId": "194707810076",
            "TileImage": "images/InTheTwilight.jpg",
            "GroupObjectiveDisplayOrder": [
                {
                    "Id": "a7930fae-37ac-45f1-977f-4e9ef8d37434"
                },
                {
                    "Id": "f65fff84-6cad-4a11-9a0a-b89430c03397"
                }
            ],
            "CreationTimestamp": "2024-05-11T21:33:17.090Z",
            "Release": "2.00.x"
        },
        "UserData": {}
    })


    controller.hooks.contributeCampaigns.tap(
        "ElusivesAddCampaignPlugin",
        (
            campaigns,
            genSingleMissionFunc,
            genSingleVideoFunc,
            gameVersion
        ) => {
            if (gameVersion !== "h3") return

            const myStoryData = [
                genSingleMissionFunc(
                    // your mission's ID
                    "d27ecffd-955a-4907-a5cc-72253ed56500",
                    "h3",
                ),
                genSingleMissionFunc(
                    // your mission's ID
                    "d27ecffd-955a-4727-a5cc-72253ed56500",
                    "h3",
                ),
                genSingleMissionFunc(
                    // your mission's ID
                    "e07f9e22-53c1-4f28-9f2c-a4dff358180c",
                    "h3",
                ),
                genSingleMissionFunc(
                    // your mission's ID
                    "f8273d68-09fb-414e-b112-148560201f01",
                    "h3",
                ),
                genSingleMissionFunc(
                    // your mission's ID
                    "3526n108-6e12-4db7-afcd-d38fe24370e5",
                    "h3",
                ),
                genSingleMissionFunc(
                    // your mission's ID
                    "a49302e2-249e-4c17-a7f7-12a47d4cd485",
                    "h3",
                ),
                genSingleMissionFunc(
                    // your mission's ID
                    "47asfedb-422e-480e-ab62-84db0e26bda8",
                    "h3",
                ),
                genSingleMissionFunc(
                    // your mission's id
                    "c47ecffd-895a-4847-b847-62153ed56575",
                    "h3",
                )
            ];

            const campaignTemplate = {
                BackgroundImage: "images/KiwiCreate.jpg",
                Image: "",
                Name: "UI_GOOD_OLD_DAYS_CAMPAIGN",
                Properties: {
                    BackgroundImage: "images/KiwiCreate.jpg",
                },
                StoryData: myStoryData,
            };

            campaigns.forEach((menu) => {
                if (menu.Name === "UI_MENU_PAGE_SIDE_MISSIONS_TITLE") {
                    menu.Subgroups.push(campaignTemplate)
                }
            })
        }
    );
};