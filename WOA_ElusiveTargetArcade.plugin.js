const { log, LogLevel } = require("@peacockproject/core/loggingInterop")
const { hitsCategoryService } = require("@peacockproject/core/contracts/hitsCategoryService")
const { PEACOCKVER, PEACOCKVERSTRING } = require("@peacockproject/core/utils")

module.exports = function WOAElusiveArcade(controller) {
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
            "EnableSaving": false,
            "Objectives": [],
            "Bricks": [],
            "VR": [
                {
                    "Quality": "base",
                    "Bricks": ["assembly:/_pro/Scenes/Bricks/vr_setup.brick"]
                }
            ],
            "GameChangers": [],
            "GameChangerReferences": []
        },
        "Metadata": {
            "Id": "d3d7c6a9-60af-4649-8a18-11b436602ce0",
            "IsPublished": true,
            "CreationTimestamp": "2021-01-12T12:24:16.194497Z",
            "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
            "TileImage": "images/Arcades/Fuji.jpg",
            "Title": "UI_PEACOCK_FUJI",
            "Description": "UI_CONTRACT_MOUTAINS_GROUP_DESC",
            "CodeName_Hint": "[PEACOCK] Arcade Fuji - Group",
            "Location": "LOCATION_GREEDY_RACCOON",
            "ScenePath": "assembly:/_pro/scenes/missions/Greedy/mission_raccoon/scene_raccoon_basic.entity",
            "Type": "arcade",
            "Entitlements": ["LOCATION_GOLDEN"],
            "GroupDefinition": {
                "Type": "arcade",
                "Order": [
                    "72684cce-45e5-4ff4-966b-6b06467588cc",
                    "dd6f4592-af22-4ec4-8c21-956e1595f4b1",
                    "78244298-35f3-4f72-b5b0-b5c43c8182a2"
                ]
            },
            "LastUpdate": "2023-02-24T10:14:36.1236307Z"
        },
        "UserData": {}
    })   
    
    
    controller.addMission({
        "Data": {
            "EnableSaving": false,
            "Objectives": [
                {
                    "Id": "331ea4f9-f631-4ad7-b445-a5bd6dd08ea7",
                    "Primary": true,
                    "IsHidden": true,
                    "SuccessEvent": {
                        "EventName": "Kill",
                        "EventValues": {
                            "RepositoryId": "ceacf6ef-d2b9-47d2-908c-a99f267893b8"
                        }
                    }
                }
            ],
            "Bricks": [
                "assembly:/_pro/scenes/missions/greedy/mission_raccoon/primeminister_et.brick",
                "assembly:/_pro/scenes/missions/greedy/mission_raccoon/raccoon_midday.brick"
            ],
            "Stashpoints": [],
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
            "GameChangers": ["b43f84f7-6c26-4adf-b74a-6d598f03cbe3"]
        },
        "Metadata": {
            "Id": "72684cce-45e5-4ff4-966b-6b06467588cc",
            "Title": "UI_PEACOCK_FUJI1",
            "Description": "UI_CONTRACT_SAKURE_TARGET_DESC",
            "ScenePath": "assembly:/_pro/scenes/missions/Greedy/mission_raccoon/scene_raccoon_basic.entity",
            "Location": "LOCATION_GREEDY_RACCOON",
            "TileImage": "images/PrimeMinister.jpg",
            "CodeName_Hint": "Arcade Fuji Sakura",
            "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
            "Type": "arcade",
            "Entitlements": ["H2_LEGACY_EXPANSION"],
            "InGroup": "d3d7c6a9-60af-4649-8a18-11b436602ce0",
            "GroupObjectiveDisplayOrder": [
                { "Id": "b43f84f7-6c26-4adf-b74a-6d598f03cbe3","IsNew": true},
                { "Id": "331ea4f9-f631-4ad7-b445-a5bd6dd08ea7"}
            ]
        },
        "UserData": {}
    })


    controller.addMission({
            "Data": {
                "EnableSaving": false,
                "Objectives": [
                    {
                        "Id": "331ea4f9-f631-4ad7-b445-a5bd6dd08ea7",
                        "Primary": true,
                        "IsHidden": true,
                        "SuccessEvent": {
                            "EventName": "Kill",
                            "EventValues": {
                                "RepositoryId": "b2f85b96-13cf-456d-a2f4-2c96f6831ad4"
                            }
                        }
                    }
                ],
                "Bricks": [
                    "assembly:/_pro/scenes/missions/opulent/mission_stingray/ET_Journalist.brick",
                    "assembly:/_pro/scenes/missions/opulent/mission_stingray/tod_night.brick"
                ],
                "Stashpoints": [],
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
                "GameChangers": [
                    "b43f84f7-6c26-4adf-b74a-6d598f03cbe3",
                    "63055f1a-bcd2-4e0f-8caf-b446f01d02f3"
                ]
            },
            "Metadata": {
                "Id": "dd6f4592-af22-4ec4-8c21-956e1595f4b1",
                "Title": "UI_PEACOCK_FUJI2",
                "Description": "UI_CONTRACT_TIME_TARGET_DESC",
                "ScenePath": "assembly:/_pro/scenes/missions/opulent/mission_stingray/scene_stingray_basic.entity",
                "Location": "LOCATION_OPULENT_STINGRAY",
                "TileImage": "images/Journalist.jpg",
                "CodeName_Hint": "Arcade Fuji Time",
                "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
                "Type": "arcade",
                "Entitlements": ["H2_LEGACY_EXPANSION"],
                "InGroup": "d3d7c6a9-60af-4649-8a18-11b436602ce0",
                "GroupObjectiveDisplayOrder": [
                    { "Id": "63055f1a-bcd2-4e0f-8caf-b446f01d02f3","IsNew": true},
                    { "Id": "b43f84f7-6c26-4adf-b74a-6d598f03cbe3"},
                    { "Id": "331ea4f9-f631-4ad7-b445-a5bd6dd08ea7"}
                ]
            },
            "UserData": {}    
    })


    controller.addMission({
        "Data": {
            "EnableSaving": false,
            "Objectives": [
                {
                    "Id": "331ea4f9-f631-4ad7-b445-a5bd6dd08ea7",
                    "Primary": true,
                    "IsHidden": true,
                    "SuccessEvent": {
                        "EventName": "Kill",
                        "EventValues": {
                            "RepositoryId": "9cbc5232-e58d-4fcb-8ab7-5982dbd3f800"
                        }
                    }
                }
            ],
            "Bricks": [
                "assembly:/_pro/scenes/missions/rocky/et_shark.brick",
                "assembly:/_pro/scenes/missions/rocky/tod_sunset.brick"
            ],
            "Stashpoints": [],
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
            "GameChangers": [
                "b43f84f7-6c26-4adf-b74a-6d598f03cbe3",
                "63055f1a-bcd2-4e0f-8caf-b446f01d02f3",
                "9f409781-0a06-4748-b08d-784e78c6d481"
            ]
        },
        "Metadata": {
            "Id": "78244298-35f3-4f72-b5b0-b5c43c8182a2",
            "Title": "UI_PEACOCK_FUJI3",
            "Description": "UI_CONTRACT_SHARK_DESC",
            "ScenePath": "assembly:/_pro/scenes/missions/Rocky/scene_dugong.entity",
            "Location": "LOCATION_ROCKY_DUGONG",
            "TileImage": "images/TheInformant.jpg",
            "CodeName_Hint": "Arcade Fuji Shark",
            "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
            "Type": "arcade",
            "Entitlements": ["LOCATION_ROCKY"],
            "InGroup": "d3d7c6a9-60af-4649-8a18-11b436602ce0",
            "GroupObjectiveDisplayOrder": [ 
                { "Id": "9f409781-0a06-4748-b08d-784e78c6d481","IsNew": true},
                { "Id": "63055f1a-bcd2-4e0f-8caf-b446f01d02f3"},
                { "Id": "b43f84f7-6c26-4adf-b74a-6d598f03cbe3"},
                { "Id": "331ea4f9-f631-4ad7-b445-a5bd6dd08ea7"}
            ]
        },
        "UserData": {}
    })

    hitsCategoryService.hitsCategories.for("Elusive_Target_Arcade_Hits").tap("WOAElusiveArcade-HitsCategory", (contracts, gameVersion) => {
        if (gameVersion !== "h3") return
        contracts.push("d3d7c6a9-60af-4649-8a18-11b436602ce0")
        
    })

    log(LogLevel.INFO, "[WOA Elusive Target Arcade] Challenges active, added to elusive targets arcade menu.")
}