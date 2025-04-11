const { log, LogLevel } = require("@peacockproject/core/loggingInterop")
const { hitsCategoryService } = require("@peacockproject/core/contracts/hitsCategoryService")
const { PEACOCKVER, PEACOCKVERSTRING } = require("@peacockproject/core/utils")

module.exports = function WOAElusive(controller) {
    if (Math.abs(PEACOCKVER) < 7350) {
        log(LogLevel.ERROR, `This plugin requires Peacock version v7.3.5 or higher! You're on v${PEACOCKVERSTRING}!`)
        return
    }
    if (!controller.smf.modIsInstalled("MLuka47.Expansion")) {
        log(LogLevel.ERROR, "[WOA Expansion] Mod currently not deployed, please deploy it in SMF")
        return
    }

    controller.addMission({
        "Data": {
            "EnableSaving": true,
            "Objectives": [
                {
                    "Type": "statemachine",
                    "Id": "373ea4f9-f631-4ad7-b445-a5bd6dd08ea7",
                    "IsHidden": true,
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 46b2a37f-bb3f-4ff7-9d3b-c4f1a53a5901).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 46b2a37f-bb3f-4ff7-9d3b-c4f1a53a5901).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "46b2a37f-bb3f-4ff7-9d3b-c4f1a53a5901"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "46b2a37f-bb3f-4ff7-9d3b-c4f1a53a5901"
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
                        "assembly:/_pro/scenes/missions/hokkaido/difficulty_easy_hokkaido_snowcrane.brick"
                    ]
                },
                {
                    "Difficulty": "normal",
                    "Bricks": []
                },
                {
                    "Difficulty": "hard",
                    "Bricks": [
                        "assembly:/_pro/scenes/missions/hokkaido/difficulty_pro1_hokkaido_snowcrane.brick"
                    ]
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
            "GameChangers": [],
            "Bricks": [
                "assembly:/_pro/scenes/missions/hokkaido/et_ural_owl.brick",
                "assembly:/_pro/scenes/missions/hokkaido/tod_bluenight.brick"
            ],
            
        },
        "Metadata": {
            "Title": "UI_ET_URAL_OWL_TITLE",
            "Description": "UI_CONTRACT_SHARK_DESC",
            "Entitlements": [
                "H1_LEGACY_STANDARD"
            ],
            "ScenePath": "assembly:/_PRO/Scenes/Missions/Hokkaido/_Scene_SnowCrane.entity",
            "Location": "LOCATION_HOKKAIDO",
            "IsPublished": true,
            "CreatorUserId": "fadb913c-e6bb-4283-a537-eb4d1150262e",
            "GameVersion": "8.10.0.0",
            "ServerVersion": "8.10.0.0",
            "CodeName_Hint": "Ural Owl",
            "Type": "elusive",
            "Season": 1,
            "Id": "4061d321-311f-430f-8701-b91fb34c7630",
            "PublicId": "194707810076",
            "TileImage": "images/TheAnalyst.jpg",
            "GroupObjectiveDisplayOrder": [
                {
                    "Id": "46b2a37f-bb3f-4ff7-9d3b-c4f1a53a5901"
                }
            ],
            "CreationTimestamp": "2024-05-11T21:33:17.090Z",
            "Release": "2.00.x"
        },
        "UserData": {}
    })   
    
    
    controller.addMission({
        "Data": {
            "EnableSaving": true,
            "Objectives": [
                {
                    "Type": "statemachine",
                    "Id": "331ea4f9-f631-4ad7-b445-a5bd6dd08ea7",
                    "IsHidden": true,
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository ceacf6ef-d2b9-47d2-908c-a99f267893b8).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository ceacf6ef-d2b9-47d2-908c-a99f267893b8).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "ceacf6ef-d2b9-47d2-908c-a99f267893b8"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "ceacf6ef-d2b9-47d2-908c-a99f267893b8"
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
                        "assembly:/_pro/scenes/missions/Greedy/mission_raccoon/vr_overrides_raccoon.brick",
                        "assembly:/_pro/scenes/missions/greedy/mission_raccoon/vr_overrides_ps4perf.brick"
                    ]
                },
                {
                    "Quality": "better",
                    "Bricks": [
                        "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                        "assembly:/_pro/scenes/missions/Greedy/mission_raccoon/vr_overrides_raccoon.brick"
                    ]
                }
            ],
            "GameDifficulties": [
            {
                "Difficulty": "easy",
                "Bricks": [
                    "assembly:/_pro/scenes/missions/Greedy/mission_raccoon/difficulty_easy_raccoon.brick"
                ]
            },
            {
                "Difficulty": "normal",
                "Bricks": []
            },
            {
                "Difficulty": "hard",
                "Bricks": [
                    "assembly:/_pro/scenes/missions/Greedy/mission_raccoon/difficulty_hard_raccoon.brick"
                ]
            }
        ],
            "GameChangers": [],
            "Bricks": [
                "assembly:/_pro/scenes/missions/greedy/mission_raccoon/primeminister_et.brick",
                "assembly:/_pro/scenes/missions/greedy/mission_raccoon/raccoon_midday.brick"
            ]
        },
        "Metadata": {
            "Title": "UI_CONTRACT_SAKURA_TITLE",
            "Description": "UI_CONTRACT_SAKURA_DESC",
            "Entitlements": [
                "H2_LEGACY_EXPANSION"
            ],
            "ScenePath": "assembly:/_pro/scenes/missions/Greedy/mission_raccoon/scene_raccoon_basic.entity",
            "Location": "LOCATION_GREEDY_RACCOON",
            "IsPublished": true,
            "CreatorUserId": "fadb913c-e6bb-4283-a537-eb4d1150262e",
            "GameVersion": "8.10.0.0",
            "ServerVersion": "8.10.0.0",
            "CodeName_Hint": "Sakura",
            "Type": "elusive",
            "Season": 2,
            "Id": "d27ecffd-895a-4727-a5cc-72253ed56500",
            "PublicId": "194707810076",
            "TileImage": "images/PrimeMinister.jpg",
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
        "EnableSaving": true,
            "Objectives": [
                {
                    "Type": "statemachine",
                    "Id": "331ea4f9-f631-4ad7-b445-a5bd6dd08ea7",
                    "IsHidden": true,
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository b2f85b96-13cf-456d-a2f4-2c96f6831ad4).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository b2f85b96-13cf-456d-a2f4-2c96f6831ad4).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "b2f85b96-13cf-456d-a2f4-2c96f6831ad4"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "b2f85b96-13cf-456d-a2f4-2c96f6831ad4"
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
                    "assembly:/_pro/scenes/missions/opulent/mission_stingray/vr_overrides_stingray.brick",
                    "assembly:/_pro/scenes/missions/opulent/mission_stingray/vr_overrides_ps4perf.brick"
                ]
            },
            {
                "Quality": "better",
                "Bricks": [
                    "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                    "assembly:/_pro/scenes/missions/opulent/mission_stingray/vr_overrides_stingray.brick"
                ]
            }
        ],
            "GameDifficulties": [
            {
                "Difficulty": "easy",
                "Bricks": [
                    "assembly:/_pro/scenes/missions/opulent/mission_stingray/difficulty_easy_stingray.brick",
                ]
            },
            {
                "Difficulty": "normal",
                "Bricks": []
            },
            {
                "Difficulty": "hard",
                "Bricks": [
                    "assembly:/_pro/scenes/missions/opulent/mission_stingray/difficulty_hard_stingray.brick",
                ]
            }
        ],
            "GameChangers": [],
            "Bricks": [
                "assembly:/_pro/scenes/missions/opulent/mission_stingray/ET_Journalist.brick",
                "assembly:/_pro/scenes/missions/opulent/mission_stingray/tod_night.brick"
            ]
        },
        "Metadata": {
            "Title": "UI_CONTRACT_TIME_TARGET_TITLE",
            "Description": "UI_CONTRACT_TIME_TARGET_DESC",
            "Entitlements": [
                "H2_LEGACY_EXPANSION"
            ],
            "ScenePath": "assembly:/_pro/scenes/missions/opulent/mission_stingray/scene_stingray_basic.entity",
            "Location": "LOCATION_OPULENT_STINGRAY",
            "IsPublished": true,
            "CreatorUserId": "fadb913c-e6bb-4283-a537-eb4d1150262e",
            "GameVersion": "8.10.0.0",
            "ServerVersion": "8.10.0.0",
            "CodeName_Hint": "Time",
            "Type": "elusive",
            "Season": 2,
            "Id": "d27ecffd-895a-4727-a7bb-62153ed56575",
            "PublicId": "194707810076",
            "TileImage": "images/Journalist.jpg",
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
            "EnableSaving": true,
            "Objectives": [
                {
                    "Type": "statemachine",
                    "Id": "331ea4f9-f631-4ad7-b445-a5bd6dd08ea7",
                    "IsHidden": true,
                    "BriefingText": {
                        "$loc": {
                            "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                            "data": "$($repository 9cbc5232-e58d-4fcb-8ab7-5982dbd3f800).Name"
                        }
                    },
                    "HUDTemplate": {
                        "display": {
                            "$loc": {
                                "key": "UI_CONTRACT_GENERAL_OBJ_KILL",
                                "data": "$($repository 9cbc5232-e58d-4fcb-8ab7-5982dbd3f800).Name"
                            }
                        }
                    },
                    "Category": "primary",
                    "Definition": {
                        "Scope": "Hit",
                        "Context": {
                            "Targets": [
                                "9cbc5232-e58d-4fcb-8ab7-5982dbd3f800"
                            ]
                        },
                        "States": {
                            "Start": {
                                "Kill": [
                                    {
                                        "Condition": {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "9cbc5232-e58d-4fcb-8ab7-5982dbd3f800"
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
                        "assembly:/_PRO/scenes/missions/rocky/vr_overrides_dugong.brick",
                        "assembly:/_PRO/scenes/missions/rocky/vr_overrides_ps4perf.brick"
                    ]
                },
                {
                    "Quality": "better",
                    "Bricks": [
                        "assembly:/_pro/Scenes/Bricks/vr_setup.brick",
                        "assembly:/_PRO/scenes/missions/rocky/vr_overrides_dugong.brick"
                    ]
                }
            ],
            "GameDifficulties": [
            {
                "Difficulty": "easy",
                "Bricks": [
                    "assembly:/_pro/scenes/missions/rocky/difficulty_easy_dugong.brick"
                ]
            },
            {
                "Difficulty": "normal",
                "Bricks": []
            },
            {
                "Difficulty": "hard",
                "Bricks": [
                    "assembly:/_pro/scenes/missions/rocky/difficulty_hard_dugong.brick"
                ]
            }
        ],
            "GameChangers": [],
            "Bricks": [
                "assembly:/_pro/scenes/missions/rocky/et_shark.brick",
                "assembly:/_pro/scenes/missions/rocky/tod_sunset.brick"
            ]
        },
        "Metadata": {
            "Title": "UI_CONTRACT_SHARK_TITLE",
            "Description": "UI_CONTRACT_SHARK_DESC",
            "Entitlements": [
                "LOCATION_ROCKY"
            ],
            "ScenePath": "assembly:/_pro/scenes/missions/Rocky/scene_dugong.entity",
            "Location": "LOCATION_ROCKY_DUGONG",
            "IsPublished": true,
            "CreatorUserId": "fadb913c-e6bb-4283-a537-eb4d1150262e",
            "GameVersion": "8.10.0.0",
            "ServerVersion": "8.10.0.0",
            "CodeName_Hint": "Shark",
            "Type": "elusive",
            "Season": 2,
            "Id": "a47bdffd-895a-4727-a5cc-72253ed56500",
            "PublicId": "194707810076",
            "TileImage": "images/TheInformant.jpg",
            "GroupObjectiveDisplayOrder": [
                {
                    "Id": "9cbc5232-e58d-4fcb-8ab7-5982dbd3f800"
                }
            ],
            "CreationTimestamp": "2024-05-11T21:33:17.090Z",
            "Release": "2.00.x"
        },
        "UserData": {}
    })

    hitsCategoryService.hitsCategories.for("Elusive_Target_Hits").tap("WOAElusive-HitsCategory", (contracts, gameVersion) => {
        if (gameVersion !== "h3") return
        contracts.push("4061d321-311f-430f-8701-b91fb34c7630")
        contracts.push("d27ecffd-895a-4727-a5cc-72253ed56500")
        contracts.push("d27ecffd-895a-4727-a7bb-62153ed56575")
        contracts.push("a47bdffd-895a-4727-a5cc-72253ed56500")
    })

    log(LogLevel.INFO, "[WOA Elusive Target] Challenges active, added to elusive targets menu.")
}