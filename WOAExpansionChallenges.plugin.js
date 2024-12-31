/**
 * Woa Expansion plugin - by MLuka47 Thanks Anthony Fuller !
 *
 *
 * @licence Public Domain
 */

const { PEACOCKVER, PEACOCKVERSTRING } = require("@peacockproject/core/utils")
const { log, LogLevel } = require("@peacockproject/core/loggingInterop")


// Feat challenges here...
const featChallenges = [
    {
        "Id": "9f432d27-d88d-41af-8f40-e03184dea085",
        "Name": "UI_PEACOCK_KASTURI_COMPLETED_NAME",
        "ImageName": "images/Arcades/Fuji.jpg",
        "Description": "UI_PEACOCK_KASTURI_COMPLETED_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": false,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_ARCADE",
        "Icon": "arcademode",
        "LocationId": "LOCATION_ROCKY_DUGONG",
        "ParentLocationId": "LOCATION_PARENT_ROCKY",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Context": {},
            "Scope": "session",
            "States": {
                "Start": {
                    "ContractEnd": {
                        "Condition": {
                            "$eq": [
                                "$ContractId",
                                "a47bdffd-895a-4727-a5cc-72253ed56500"
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["arcade", "hard"],
        "InclusionData": {
            "ContractIds": ["d3d7c6a9-60af-4649-8a18-11b436602ce0"]
        }
    },
    {
        "Id": "7107ff08-2d82-4abd-83e5-57d0e1b919bb",
        "Name": "UI_CHALLENGES_DEMARA_47_SILENT_ASSASSIN_SUIT_DIFFICULTY_EASY_NAME",
        "ImageName": "images/challenges/profile_challenges/classics_normal_47_sa_suit.jpg",
        "Description": "UI_CHALLENGES_DEMARA_47_SILENT_ASSASSIN_SUIT_DIFFICULTY_EASY_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
        "Icon": "profile",
        "LocationId": "LOCATION_PARENT_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Context": {
                "Witnesses": [],
                "Targets": [],
                "RecordingDestroyed": true,
                "LastAccidentTime": 0
            },
            "Scope": "session",
            "States": {
                "Start": {
                    "ContractEnd": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        true,
                                        "$.RecordingDestroyed"
                                    ]
                                },
                                {
                                    "$all": {
                                        "in": "$.Witnesses",
                                        "?": {
                                            "$any": {
                                                "in": "$.Targets",
                                                "?": {
                                                    "$eq": [
                                                        "$.#",
                                                        "$.##"
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        "Transition": "Success"
                    },
                    "AccidentBodyFound": {
                        "$set": ["LastAccidentTime", "$Timestamp"]
                    },
                    "Witnesses": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "Spotted": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "ContractStart": [
                        {
                            "Condition": {
                                "$eq": [
                                    "$Value.IsHitmanSuit",
                                    false
                                ]
                            },
                            "Transition": "Failure"
                        }
                    ],
                    "Kill": [
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$not": {
                                            "$eq": [
                                                "$Value.KillContext",
                                                1
                                            ]
                                        }
                                    }
                                ]
                            },
                            "Transition": "Failure"
                        },
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.KillContext",
                                            1
                                        ]
                                    }
                                ]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Targets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        },
                        {
                            "Condition": {
                                "$eq": ["$Value.IsTarget", true]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Targets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        }
                    ],
                    "CrowdNPC_Died": {
                        "Transition": "Failure"
                    },
                    "MurderedBodySeen": [
                        {
                            "Condition": {
                                "$eq": [
                                    "$Value.IsWitnessTarget",
                                    true
                                ]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Witnesses",
                                    "$Value.Witness"
                                ]
                            }
                        },
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsWitnessTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$not": {
                                            "$eq": [
                                                "$.LastAccidentTime",
                                                "$Timestamp"
                                            ]
                                        }
                                    }
                                ]
                            },
                            "Transition": "Failure"
                        }
                    ],
                    "SecuritySystemRecorder": [
                        {
                            "Actions": {
                                "$set": [
                                    "RecordingDestroyed",
                                    false
                                ]
                            },
                            "Condition": {
                                "$eq": ["$Value.event", "spotted"]
                            }
                        },
                        {
                            "Actions": {
                                "$set": ["RecordingDestroyed", true]
                            },
                            "Condition": {
                                "$or": [
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "erased"
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "destroyed"
                                        ]
                                    }
                                ]
                            }
                        }
                    ],
                    "Disguise": {
                        "Transition": "Failure"
                    }
                }
            }
        },
        "Tags": [
            "story",
            "hard",
            "suitonly",
            "classic",
            "difficulty_easy"
        ],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4907-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "aa210ee2-bb45-4819-abba-af4094917d94",
        "Name": "UI_CHALLENGES_DEMARA_47_SNIPER_ASSASSIN_DIFFICULTY_EASY_NAME",
        "ImageName": "images/challenges/profile_challenges/classics_normal_47_sniper_assassin.jpg",
        "Description": "UI_CHALLENGES_DEMARA_47_SNIPER_ASSASSIN_DIFFICULTY_EASY_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
        "Icon": "profile",
        "LocationId": "LOCATION_PARENT_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Context": {
                "Witnesses": [],
                "Targets": [],
                "RecordingDestroyed": true,
                "SniperKillSierraCar": false
            },
            "Scope": "session",
            "States": {
                "Start": {
                    "ContractEnd": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        true,
                                        "$.RecordingDestroyed"
                                    ]
                                },
                                {
                                    "$all": {
                                        "in": "$.Witnesses",
                                        "?": {
                                            "$any": {
                                                "in": "$.Targets",
                                                "?": {
                                                    "$eq": [
                                                        "$.#",
                                                        "$.##"
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        "Transition": "Success"
                    },
                    "Witnesses": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "Spotted": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "SniperKillSierraCar": {
                        "$set": ["SniperKillSierraCar", true]
                    },
                    "Kill": [
                        {
                            "Condition": {
                                "$or": [
                                    {
                                        "$and": [
                                            {
                                                "$not": {
                                                    "$contains": [
                                                        "$Value.KillItemCategory",
                                                        "sniperrifle"
                                                    ]
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$or": [
                                                    {
                                                        "$not": {
                                                            "$eq": [
                                                                "$Value.RepositoryId",
                                                                "c0ab162c-1502-40d5-801f-c5471289d6b7"
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        "$and": [
                                                            {
                                                                "$eq": [
                                                                    "$Value.RepositoryId",
                                                                    "c0ab162c-1502-40d5-801f-c5471289d6b7"
                                                                ]
                                                            },
                                                            {
                                                                "$eq": [
                                                                    "$.SniperKillSierraCar",
                                                                    false
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    false
                                                ]
                                            },
                                            {
                                                "$not": {
                                                    "$eq": [
                                                        "$Value.KillContext",
                                                        1
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            "Transition": "Failure"
                        },
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.KillContext",
                                            1
                                        ]
                                    }
                                ]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Targets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        },
                        {
                            "Condition": {
                                "$eq": ["$Value.IsTarget", true]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Targets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        }
                    ],
                    "CrowdNPC_Died": {
                        "Transition": "Failure"
                    },
                    "SecuritySystemRecorder": [
                        {
                            "Actions": {
                                "$set": [
                                    "RecordingDestroyed",
                                    false
                                ]
                            },
                            "Condition": {
                                "$eq": ["$Value.event", "spotted"]
                            }
                        },
                        {
                            "Actions": {
                                "$set": ["RecordingDestroyed", true]
                            },
                            "Condition": {
                                "$or": [
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "erased"
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "destroyed"
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        },
        "Tags": [
            "story",
            "hard",
            "sniper",
            "classic",
            "difficulty_easy"
        ],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4907-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "ccade7ea-1a4c-46e0-b9e4-8aed91a3b547",
        "Name": "UI_CHALLENGES_DEMARA_47_SUIT_ONLY_DIFFICULTY_EASY_NAME",
        "ImageName": "images/challenges/profile_challenges/classics_normal_47_suit_only.jpg",
        "Description": "UI_CHALLENGES_DEMARA_47_SUIT_ONLY_DIFFICULTY_EASY_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
        "Icon": "profile",
        "LocationId": "LOCATION_PARENT_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "Context": {},
            "States": {
                "Start": {
                    "ContractStart": [
                        {
                            "Condition": {
                                "$eq": [
                                    "$Value.IsHitmanSuit",
                                    false
                                ]
                            },
                            "Transition": "Failure"
                        }
                    ],
                    "Disguise": {
                        "Transition": "Failure"
                    },
                    "ContractEnd": {
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "hard", "classic", "difficulty_easy"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4907-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "d004cf4e-48cc-4261-b99a-45e3949bdc8b",
        "Name": "UI_CHALLENGES_DEMARA_47_SILENT_ASSASSIN_DIFFICULTY_EASY_NAME",
        "ImageName": "images/challenges/profile_challenges/classics_normal_47_silent_assassin.jpg",
        "Description": "UI_CHALLENGES_DEMARA_47_SILENT_ASSASSIN_DIFFICULTY_EASY_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
        "Icon": "profile",
        "LocationId": "LOCATION_PARENT_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Context": {
                "Witnesses": [],
                "KilledTargets": [],
                "RecordingDestroyed": true,
                "LastAccidentTime": 0
            },
            "Scope": "session",
            "States": {
                "Start": {
                    "ContractEnd": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        true,
                                        "$.RecordingDestroyed"
                                    ]
                                },
                                {
                                    "$all": {
                                        "in": "$.Witnesses",
                                        "?": {
                                            "$any": {
                                                "in": "$.KilledTargets",
                                                "?": {
                                                    "$eq": [
                                                        "$.#",
                                                        "$.##"
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        "Transition": "Success"
                    },
                    "AccidentBodyFound": {
                        "$set": ["LastAccidentTime", "$Timestamp"]
                    },
                    "Witnesses": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "Spotted": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "Kill": [
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$not": {
                                            "$eq": [
                                                "$Value.KillContext",
                                                1
                                            ]
                                        }
                                    }
                                ]
                            },
                            "Transition": "Failure"
                        },
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.KillContext",
                                            1
                                        ]
                                    }
                                ]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "KilledTargets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        },
                        {
                            "Condition": {
                                "$eq": ["$Value.IsTarget", true]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "KilledTargets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        }
                    ],
                    "CrowdNPC_Died": {
                        "Transition": "Failure"
                    },
                    "MurderedBodySeen": [
                        {
                            "Condition": {
                                "$eq": [
                                    "$Value.IsWitnessTarget",
                                    true
                                ]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Witnesses",
                                    "$Value.Witness"
                                ]
                            }
                        },
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsWitnessTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$not": {
                                            "$eq": [
                                                "$.LastAccidentTime",
                                                "$Timestamp"
                                            ]
                                        }
                                    }
                                ]
                            },
                            "Transition": "Failure"
                        }
                    ],
                    "SecuritySystemRecorder": [
                        {
                            "Actions": {
                                "$set": [
                                    "RecordingDestroyed",
                                    false
                                ]
                            },
                            "Condition": {
                                "$eq": ["$Value.event", "spotted"]
                            }
                        },
                        {
                            "Actions": {
                                "$set": ["RecordingDestroyed", true]
                            },
                            "Condition": {
                                "$or": [
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "erased"
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "destroyed"
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        },
        "Tags": ["story", "hard", "classic", "difficulty_easy"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4907-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "ef3b01a6-99f6-4664-afc5-a9f37f4cb623",
        "Name": "UI_CHALLENGES_DEMARA_BIG5_EASY_NAME",
        "ImageName": "Images/Challenges/profile_challenges/classics_location_normal.jpg",
        "Description": "UI_CHALLENGES_DEMARA_BIG5_EASY_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
        "Icon": "profile",
        "LocationId": "LOCATION_PARENT_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Constants": {
                "RequiredChallenges": [
                    "d004cf4e-48cc-4261-b99a-45e3949bdc8b",
                    "ccade7ea-1a4c-46e0-b9e4-8aed91a3b547",
                    "7107ff08-2d82-4abd-83e5-57d0e1b919bb",
                    "aa210ee2-bb45-4819-abba-af4094917d94"
                ]
            },
            "Context": {
                "CompletedChallenges": []
            },
            "ContextListeners": {
                "CompletedChallenges": {
                    "comparand": "$.RequiredChallenges",
                    "type": "challengetree"
                }
            },
            "Scope": "hit",
            "States": {
                "Start": {
                    "ChallengeCompleted": [
                        {
                            "$pushunique": [
                                "CompletedChallenges",
                                "$Value.ChallengeId"
                            ]
                        },
                        {
                            "Condition": {
                                "$all": {
                                    "?": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$.##"
                                                ]
                                            },
                                            "in": "$.CompletedChallenges"
                                        }
                                    },
                                    "in": "$.RequiredChallenges"
                                }
                            },
                            "Transition": "Success"
                        }
                    ]
                }
            }
        },
        "Tags": ["story", "hard", "difficulty_easy", "classic"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4907-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "00000280-0000-0000-0000-000000000003",
        "Name": "UI_CHALLENGES_DEMARA_SHEIKH_IMPOSTORS_NAME",
        "ImageName": "images/challenges/paris/targets/Sheikh.jpg",
        "Description": "UI_CHALLENGES_DEMARA_SHEIKH_IMPOSTORS_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PROFESSIONAL",
        "Icon": "challenge_category_targets",
        "LocationId": "LOCATION_PARENT_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "hit",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$eq": [
                                "$Value.RepositoryId",
                                "335ce4e7-36bb-45cd-aa24-18564d48ed4e"
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "hard", "targets"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4907-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "00000288-0000-0000-0000-000000000005",
        "Name": "UI_CHALLENGES_DEMARA_GARCEAU_SECURITY_NAME",
        "ImageName": "images/challenges/paris/targets/Garceau.jpg",
        "Description": "UI_CHALLENGES_DEMARA_GARCEAU_SECURITY_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PROFESSIONAL",
        "Icon": "challenge_category_targets",
        "LocationId": "LOCATION_PARENT_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Context": {
                "KilledActors": []
            },
            "Scope": "session",
            "States": {
                "Start": {
                    "ContractEnd": {
                        "Transition": "Failure"
                    },
                    "Kill": {
                        "Condition": {
                            "$eq": [
                                "$Value.RepositoryId",
                                "f9c3905a-ec94-43b6-aae6-8b2f752467f7"
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "hard", "primary", "targets"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4907-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "7177ff08-2d82-4abd-83e5-57d0e1b919bb",
        "Name": "UI_CHALLENGES_DAMANHUR_47_SILENT_ASSASSIN_SUIT_DIFFICULTY_EASY_NAME",
        "ImageName": "images/challenges/profile_challenges/classics_normal_47_sa_suit.jpg",
        "Description": "UI_CHALLENGES_DAMANHUR_47_SILENT_ASSASSIN_SUIT_DIFFICULTY_EASY_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
        "Icon": "profile",
        "LocationId": "LOCATION_PARENT_COASTALTOWN",
        "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Context": {
                "Witnesses": [],
                "Targets": [],
                "RecordingDestroyed": true,
                "LastAccidentTime": 0
            },
            "Scope": "session",
            "States": {
                "Start": {
                    "ContractEnd": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        true,
                                        "$.RecordingDestroyed"
                                    ]
                                },
                                {
                                    "$all": {
                                        "in": "$.Witnesses",
                                        "?": {
                                            "$any": {
                                                "in": "$.Targets",
                                                "?": {
                                                    "$eq": [
                                                        "$.#",
                                                        "$.##"
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        "Transition": "Success"
                    },
                    "AccidentBodyFound": {
                        "$set": ["LastAccidentTime", "$Timestamp"]
                    },
                    "Witnesses": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "Spotted": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "ContractStart": [
                        {
                            "Condition": {
                                "$eq": [
                                    "$Value.IsHitmanSuit",
                                    false
                                ]
                            },
                            "Transition": "Failure"
                        }
                    ],
                    "Kill": [
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$not": {
                                            "$eq": [
                                                "$Value.KillContext",
                                                1
                                            ]
                                        }
                                    }
                                ]
                            },
                            "Transition": "Failure"
                        },
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.KillContext",
                                            1
                                        ]
                                    }
                                ]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Targets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        },
                        {
                            "Condition": {
                                "$eq": ["$Value.IsTarget", true]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Targets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        }
                    ],
                    "CrowdNPC_Died": {
                        "Transition": "Failure"
                    },
                    "MurderedBodySeen": [
                        {
                            "Condition": {
                                "$eq": [
                                    "$Value.IsWitnessTarget",
                                    true
                                ]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Witnesses",
                                    "$Value.Witness"
                                ]
                            }
                        },
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsWitnessTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$not": {
                                            "$eq": [
                                                "$.LastAccidentTime",
                                                "$Timestamp"
                                            ]
                                        }
                                    }
                                ]
                            },
                            "Transition": "Failure"
                        }
                    ],
                    "SecuritySystemRecorder": [
                        {
                            "Actions": {
                                "$set": [
                                    "RecordingDestroyed",
                                    false
                                ]
                            },
                            "Condition": {
                                "$eq": ["$Value.event", "spotted"]
                            }
                        },
                        {
                            "Actions": {
                                "$set": ["RecordingDestroyed", true]
                            },
                            "Condition": {
                                "$or": [
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "erased"
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "destroyed"
                                        ]
                                    }
                                ]
                            }
                        }
                    ],
                    "Disguise": {
                        "Transition": "Failure"
                    }
                }
            }
        },
        "Tags": [
            "story",
            "hard",
            "suitonly",
            "classic",
            "difficulty_easy"
        ],
        "InclusionData": {
            "ContractIds": ["e07f9e22-53c1-4f28-9f2c-a4dff358180c"]
        }
    },
    {
        "Id": "aa210ee2-bb45-4819-assa-af4094917d94",
        "Name": "UI_CHALLENGES_DAMANHUR_47_SNIPER_ASSASSIN_DIFFICULTY_EASY_NAME",
        "ImageName": "images/challenges/profile_challenges/classics_normal_47_sniper_assassin.jpg",
        "Description": "UI_CHALLENGES_DAMANHUR_47_SNIPER_ASSASSIN_DIFFICULTY_EASY_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
        "Icon": "profile",
        "LocationId": "LOCATION_PARENT_COASTALTOWN",
        "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Context": {
                "Witnesses": [],
                "Targets": [],
                "RecordingDestroyed": true,
                "SniperKillSierraCar": false
            },
            "Scope": "session",
            "States": {
                "Start": {
                    "ContractEnd": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        true,
                                        "$.RecordingDestroyed"
                                    ]
                                },
                                {
                                    "$all": {
                                        "in": "$.Witnesses",
                                        "?": {
                                            "$any": {
                                                "in": "$.Targets",
                                                "?": {
                                                    "$eq": [
                                                        "$.#",
                                                        "$.##"
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        "Transition": "Success"
                    },
                    "Witnesses": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "Spotted": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "SniperKillSierraCar": {
                        "$set": ["SniperKillSierraCar", true]
                    },
                    "Kill": [
                        {
                            "Condition": {
                                "$or": [
                                    {
                                        "$and": [
                                            {
                                                "$not": {
                                                    "$contains": [
                                                        "$Value.KillItemCategory",
                                                        "sniperrifle"
                                                    ]
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$or": [
                                                    {
                                                        "$not": {
                                                            "$eq": [
                                                                "$Value.RepositoryId",
                                                                "c0ab162c-1502-40d5-801f-c5471289d6b7"
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        "$and": [
                                                            {
                                                                "$eq": [
                                                                    "$Value.RepositoryId",
                                                                    "c0ab162c-1502-40d5-801f-c5471289d6b7"
                                                                ]
                                                            },
                                                            {
                                                                "$eq": [
                                                                    "$.SniperKillSierraCar",
                                                                    false
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    false
                                                ]
                                            },
                                            {
                                                "$not": {
                                                    "$eq": [
                                                        "$Value.KillContext",
                                                        1
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            "Transition": "Failure"
                        },
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.KillContext",
                                            1
                                        ]
                                    }
                                ]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Targets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        },
                        {
                            "Condition": {
                                "$eq": ["$Value.IsTarget", true]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Targets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        }
                    ],
                    "CrowdNPC_Died": {
                        "Transition": "Failure"
                    },
                    "SecuritySystemRecorder": [
                        {
                            "Actions": {
                                "$set": [
                                    "RecordingDestroyed",
                                    false
                                ]
                            },
                            "Condition": {
                                "$eq": ["$Value.event", "spotted"]
                            }
                        },
                        {
                            "Actions": {
                                "$set": ["RecordingDestroyed", true]
                            },
                            "Condition": {
                                "$or": [
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "erased"
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "destroyed"
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        },
        "Tags": [
            "story",
            "hard",
            "sniper",
            "classic",
            "difficulty_easy"
        ],
        "InclusionData": {
            "ContractIds": ["e07f9e22-53c1-4f28-9f2c-a4dff358180c"]
        }
    },
    {
        "Id": "ccade7ea-1a4c-44e0-b9e4-8aed91a3b547",
        "Name": "UI_CHALLENGES_DAMANHUR_47_SUIT_ONLY_DIFFICULTY_EASY_NAME",
        "ImageName": "images/challenges/profile_challenges/classics_normal_47_suit_only.jpg",
        "Description": "UI_CHALLENGES_DAMANHUR_47_SUIT_ONLY_DIFFICULTY_EASY_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
        "Icon": "profile",
        "LocationId": "LOCATION_PARENT_COASTALTOWN",
        "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "Context": {},
            "States": {
                "Start": {
                    "ContractStart": [
                        {
                            "Condition": {
                                "$eq": [
                                    "$Value.IsHitmanSuit",
                                    false
                                ]
                            },
                            "Transition": "Failure"
                        }
                    ],
                    "Disguise": {
                        "Transition": "Failure"
                    },
                    "ContractEnd": {
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "hard", "classic", "difficulty_easy"],
        "InclusionData": {
            "ContractIds": ["e07f9e22-53c1-4f28-9f2c-a4dff358180c"]
        }
    },
    {
        "Id": "d004cf4e-48cc-4258-b99a-45e3949bdc8b",
        "Name": "UI_CHALLENGES_DAMANHUR_47_SILENT_ASSASSIN_DIFFICULTY_EASY_NAME",
        "ImageName": "images/challenges/profile_challenges/classics_normal_47_silent_assassin.jpg",
        "Description": "UI_CHALLENGES_DAMANHUR_47_SILENT_ASSASSIN_DIFFICULTY_EASY_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
        "Icon": "profile",
        "LocationId": "LOCATION_PARENT_COASTALTOWN",
        "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Context": {
                "Witnesses": [],
                "KilledTargets": [],
                "RecordingDestroyed": true,
                "LastAccidentTime": 0
            },
            "Scope": "session",
            "States": {
                "Start": {
                    "ContractEnd": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        true,
                                        "$.RecordingDestroyed"
                                    ]
                                },
                                {
                                    "$all": {
                                        "in": "$.Witnesses",
                                        "?": {
                                            "$any": {
                                                "in": "$.KilledTargets",
                                                "?": {
                                                    "$eq": [
                                                        "$.#",
                                                        "$.##"
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        "Transition": "Success"
                    },
                    "AccidentBodyFound": {
                        "$set": ["LastAccidentTime", "$Timestamp"]
                    },
                    "Witnesses": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "Spotted": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "Kill": [
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$not": {
                                            "$eq": [
                                                "$Value.KillContext",
                                                1
                                            ]
                                        }
                                    }
                                ]
                            },
                            "Transition": "Failure"
                        },
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.KillContext",
                                            1
                                        ]
                                    }
                                ]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "KilledTargets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        },
                        {
                            "Condition": {
                                "$eq": ["$Value.IsTarget", true]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "KilledTargets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        }
                    ],
                    "CrowdNPC_Died": {
                        "Transition": "Failure"
                    },
                    "MurderedBodySeen": [
                        {
                            "Condition": {
                                "$eq": [
                                    "$Value.IsWitnessTarget",
                                    true
                                ]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Witnesses",
                                    "$Value.Witness"
                                ]
                            }
                        },
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsWitnessTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$not": {
                                            "$eq": [
                                                "$.LastAccidentTime",
                                                "$Timestamp"
                                            ]
                                        }
                                    }
                                ]
                            },
                            "Transition": "Failure"
                        }
                    ],
                    "SecuritySystemRecorder": [
                        {
                            "Actions": {
                                "$set": [
                                    "RecordingDestroyed",
                                    false
                                ]
                            },
                            "Condition": {
                                "$eq": ["$Value.event", "spotted"]
                            }
                        },
                        {
                            "Actions": {
                                "$set": ["RecordingDestroyed", true]
                            },
                            "Condition": {
                                "$or": [
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "erased"
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "destroyed"
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        },
        "Tags": ["story", "hard", "classic", "difficulty_easy"],
        "InclusionData": {
            "ContractIds": ["e07f9e22-53c1-4f28-9f2c-a4dff358180c"]
        }
    },
    {
        "Id": "cb3b01a6-99f6-4664-afc5-a9f37f4cb623",
        "Name": "UI_CHALLENGES_DAMANHUR_BIG5_EASY_NAME",
        "ImageName": "Images/Challenges/profile_challenges/classics_location_normal.jpg",
        "Description": "UI_CHALLENGES_DAMANHUR_BIG5_EASY_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
        "Icon": "profile",
        "LocationId": "LOCATION_PARENT_COASTALTOWN",
        "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Constants": {
                "RequiredChallenges": [
                    "d004cf4e-48cc-4258-b99a-45e3949bdc8b",
                    "ccade7ea-1a4c-44e0-b9e4-8aed91a3b547",
                    "7177ff08-2d82-4abd-83e5-57d0e1b919bb",
                    "aa210ee2-bb45-4819-assa-af4094917d94"
                ]
            },
            "Context": {
                "CompletedChallenges": []
            },
            "ContextListeners": {
                "CompletedChallenges": {
                    "comparand": "$.RequiredChallenges",
                    "type": "challengetree"
                }
            },
            "Scope": "hit",
            "States": {
                "Start": {
                    "ChallengeCompleted": [
                        {
                            "$pushunique": [
                                "CompletedChallenges",
                                "$Value.ChallengeId"
                            ]
                        },
                        {
                            "Condition": {
                                "$all": {
                                    "?": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$.##"
                                                ]
                                            },
                                            "in": "$.CompletedChallenges"
                                        }
                                    },
                                    "in": "$.RequiredChallenges"
                                }
                            },
                            "Transition": "Success"
                        }
                    ]
                }
            }
        },
        "Tags": ["story", "hard", "difficulty_easy", "classic"],
        "InclusionData": {
            "ContractIds": ["e07f9e22-53c1-4f28-9f2c-a4dff358180c"]
        }
    },
    {
        "Id": "7107ff08-2d82-4aol-83e5-57d0e1b919bb",
        "Name": "UI_CHALLENGES_BENKO_47_SILENT_ASSASSIN_SUIT_DIFFICULTY_EASY_NAME",
        "ImageName": "images/challenges/profile_challenges/classics_normal_47_sa_suit.jpg",
        "Description": "UI_CHALLENGES_BENKO_47_SILENT_ASSASSIN_SUIT_DIFFICULTY_EASY_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
        "Icon": "profile",
        "LocationId": "LOCATION_PARENT_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Context": {
                "Witnesses": [],
                "Targets": [],
                "RecordingDestroyed": true,
                "LastAccidentTime": 0
            },
            "Scope": "session",
            "States": {
                "Start": {
                    "ContractEnd": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        true,
                                        "$.RecordingDestroyed"
                                    ]
                                },
                                {
                                    "$all": {
                                        "in": "$.Witnesses",
                                        "?": {
                                            "$any": {
                                                "in": "$.Targets",
                                                "?": {
                                                    "$eq": [
                                                        "$.#",
                                                        "$.##"
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        "Transition": "Success"
                    },
                    "AccidentBodyFound": {
                        "$set": ["LastAccidentTime", "$Timestamp"]
                    },
                    "Witnesses": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "Spotted": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "ContractStart": [
                        {
                            "Condition": {
                                "$eq": [
                                    "$Value.IsHitmanSuit",
                                    false
                                ]
                            },
                            "Transition": "Failure"
                        }
                    ],
                    "Kill": [
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$not": {
                                            "$eq": [
                                                "$Value.KillContext",
                                                1
                                            ]
                                        }
                                    }
                                ]
                            },
                            "Transition": "Failure"
                        },
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.KillContext",
                                            1
                                        ]
                                    }
                                ]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Targets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        },
                        {
                            "Condition": {
                                "$eq": ["$Value.IsTarget", true]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Targets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        }
                    ],
                    "CrowdNPC_Died": {
                        "Transition": "Failure"
                    },
                    "MurderedBodySeen": [
                        {
                            "Condition": {
                                "$eq": [
                                    "$Value.IsWitnessTarget",
                                    true
                                ]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Witnesses",
                                    "$Value.Witness"
                                ]
                            }
                        },
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsWitnessTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$not": {
                                            "$eq": [
                                                "$.LastAccidentTime",
                                                "$Timestamp"
                                            ]
                                        }
                                    }
                                ]
                            },
                            "Transition": "Failure"
                        }
                    ],
                    "SecuritySystemRecorder": [
                        {
                            "Actions": {
                                "$set": [
                                    "RecordingDestroyed",
                                    false
                                ]
                            },
                            "Condition": {
                                "$eq": ["$Value.event", "spotted"]
                            }
                        },
                        {
                            "Actions": {
                                "$set": ["RecordingDestroyed", true]
                            },
                            "Condition": {
                                "$or": [
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "erased"
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "destroyed"
                                        ]
                                    }
                                ]
                            }
                        }
                    ],
                    "Disguise": {
                        "Transition": "Failure"
                    }
                }
            }
        },
        "Tags": [
            "story",
            "hard",
            "suitonly",
            "classic",
            "difficulty_easy"
        ],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "aa210ee2-cc45-4819-abba-af4094917d94",
        "Name": "UI_CHALLENGES_BENKO_47_SNIPER_ASSASSIN_DIFFICULTY_EASY_NAME",
        "ImageName": "images/challenges/profile_challenges/classics_normal_47_sniper_assassin.jpg",
        "Description": "UI_CHALLENGES_BENKO_47_SNIPER_ASSASSIN_DIFFICULTY_EASY_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
        "Icon": "profile",
        "LocationId": "LOCATION_PARENT_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Context": {
                "Witnesses": [],
                "Targets": [],
                "RecordingDestroyed": true,
                "SniperKillSierraCar": false
            },
            "Scope": "session",
            "States": {
                "Start": {
                    "ContractEnd": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        true,
                                        "$.RecordingDestroyed"
                                    ]
                                },
                                {
                                    "$all": {
                                        "in": "$.Witnesses",
                                        "?": {
                                            "$any": {
                                                "in": "$.Targets",
                                                "?": {
                                                    "$eq": [
                                                        "$.#",
                                                        "$.##"
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        "Transition": "Success"
                    },
                    "Witnesses": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "Spotted": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "SniperKillSierraCar": {
                        "$set": ["SniperKillSierraCar", true]
                    },
                    "Kill": [
                        {
                            "Condition": {
                                "$or": [
                                    {
                                        "$and": [
                                            {
                                                "$not": {
                                                    "$contains": [
                                                        "$Value.KillItemCategory",
                                                        "sniperrifle"
                                                    ]
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$or": [
                                                    {
                                                        "$not": {
                                                            "$eq": [
                                                                "$Value.RepositoryId",
                                                                "c0ab162c-1502-40d5-801f-c5471289d6b7"
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        "$and": [
                                                            {
                                                                "$eq": [
                                                                    "$Value.RepositoryId",
                                                                    "c0ab162c-1502-40d5-801f-c5471289d6b7"
                                                                ]
                                                            },
                                                            {
                                                                "$eq": [
                                                                    "$.SniperKillSierraCar",
                                                                    false
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    false
                                                ]
                                            },
                                            {
                                                "$not": {
                                                    "$eq": [
                                                        "$Value.KillContext",
                                                        1
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            "Transition": "Failure"
                        },
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.KillContext",
                                            1
                                        ]
                                    }
                                ]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Targets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        },
                        {
                            "Condition": {
                                "$eq": ["$Value.IsTarget", true]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Targets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        }
                    ],
                    "CrowdNPC_Died": {
                        "Transition": "Failure"
                    },
                    "SecuritySystemRecorder": [
                        {
                            "Actions": {
                                "$set": [
                                    "RecordingDestroyed",
                                    false
                                ]
                            },
                            "Condition": {
                                "$eq": ["$Value.event", "spotted"]
                            }
                        },
                        {
                            "Actions": {
                                "$set": ["RecordingDestroyed", true]
                            },
                            "Condition": {
                                "$or": [
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "erased"
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "destroyed"
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        },
        "Tags": [
            "story",
            "hard",
            "sniper",
            "classic",
            "difficulty_easy"
        ],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "ccade7ea-1a4c-46e0-b9e4-8aed91a3b555",
        "Name": "UI_CHALLENGES_BENKO_47_SUIT_ONLY_DIFFICULTY_EASY_NAME",
        "ImageName": "images/challenges/profile_challenges/classics_normal_47_suit_only.jpg",
        "Description": "UI_CHALLENGES_BENKO_47_SUIT_ONLY_DIFFICULTY_EASY_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
        "Icon": "profile",
        "LocationId": "LOCATION_PARENT_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "Context": {},
            "States": {
                "Start": {
                    "ContractStart": [
                        {
                            "Condition": {
                                "$eq": [
                                    "$Value.IsHitmanSuit",
                                    false
                                ]
                            },
                            "Transition": "Failure"
                        }
                    ],
                    "Disguise": {
                        "Transition": "Failure"
                    },
                    "ContractEnd": {
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "hard", "classic", "difficulty_easy"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "d174cf4e-48cc-4261-b99a-45e3949bdc8b",
        "Name": "UI_CHALLENGES_BENKO_47_SILENT_ASSASSIN_DIFFICULTY_EASY_NAME",
        "ImageName": "images/challenges/profile_challenges/classics_normal_47_silent_assassin.jpg",
        "Description": "UI_CHALLENGES_BENKO_47_SILENT_ASSASSIN_DIFFICULTY_EASY_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
        "Icon": "profile",
        "LocationId": "LOCATION_PARENT_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Context": {
                "Witnesses": [],
                "KilledTargets": [],
                "RecordingDestroyed": true,
                "LastAccidentTime": 0
            },
            "Scope": "session",
            "States": {
                "Start": {
                    "ContractEnd": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        true,
                                        "$.RecordingDestroyed"
                                    ]
                                },
                                {
                                    "$all": {
                                        "in": "$.Witnesses",
                                        "?": {
                                            "$any": {
                                                "in": "$.KilledTargets",
                                                "?": {
                                                    "$eq": [
                                                        "$.#",
                                                        "$.##"
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        "Transition": "Success"
                    },
                    "AccidentBodyFound": {
                        "$set": ["LastAccidentTime", "$Timestamp"]
                    },
                    "Witnesses": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "Spotted": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "Kill": [
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$not": {
                                            "$eq": [
                                                "$Value.KillContext",
                                                1
                                            ]
                                        }
                                    }
                                ]
                            },
                            "Transition": "Failure"
                        },
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.KillContext",
                                            1
                                        ]
                                    }
                                ]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "KilledTargets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        },
                        {
                            "Condition": {
                                "$eq": ["$Value.IsTarget", true]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "KilledTargets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        }
                    ],
                    "CrowdNPC_Died": {
                        "Transition": "Failure"
                    },
                    "MurderedBodySeen": [
                        {
                            "Condition": {
                                "$eq": [
                                    "$Value.IsWitnessTarget",
                                    true
                                ]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Witnesses",
                                    "$Value.Witness"
                                ]
                            }
                        },
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsWitnessTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$not": {
                                            "$eq": [
                                                "$.LastAccidentTime",
                                                "$Timestamp"
                                            ]
                                        }
                                    }
                                ]
                            },
                            "Transition": "Failure"
                        }
                    ],
                    "SecuritySystemRecorder": [
                        {
                            "Actions": {
                                "$set": [
                                    "RecordingDestroyed",
                                    false
                                ]
                            },
                            "Condition": {
                                "$eq": ["$Value.event", "spotted"]
                            }
                        },
                        {
                            "Actions": {
                                "$set": ["RecordingDestroyed", true]
                            },
                            "Condition": {
                                "$or": [
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "erased"
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "destroyed"
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        },
        "Tags": ["story", "hard", "classic", "difficulty_easy"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "ef3b01a6-99f6-4664-aff8-a9f37f4cb720",
        "Name": "UI_CHALLENGES_BENKO_BIG5_EASY_NAME",
        "ImageName": "Images/Challenges/profile_challenges/classics_location_normal.jpg",
        "Description": "UI_CHALLENGES_BENKO_BIG5_EASY_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
        "Icon": "profile",
        "LocationId": "LOCATION_PARENT_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Constants": {
                "RequiredChallenges": [
                    "7107ff08-2d82-4aol-83e5-57d0e1b919bb",
                    "aa210ee2-cc45-4819-abba-af4094917d94",
                    "ccade7ea-1a4c-46e0-b9e4-8aed91a3b555",
                    "d174cf4e-48cc-4261-b99a-45e3949bdc8b"
                ]
            },
            "Context": {
                "CompletedChallenges": []
            },
            "ContextListeners": {
                "CompletedChallenges": {
                    "comparand": "$.RequiredChallenges",
                    "type": "challengetree"
                }
            },
            "Scope": "hit",
            "States": {
                "Start": {
                    "ChallengeCompleted": [
                        {
                            "$pushunique": [
                                "CompletedChallenges",
                                "$Value.ChallengeId"
                            ]
                        },
                        {
                            "Condition": {
                                "$all": {
                                    "?": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$.##"
                                                ]
                                            },
                                            "in": "$.CompletedChallenges"
                                        }
                                    },
                                    "in": "$.RequiredChallenges"
                                }
                            },
                            "Transition": "Success"
                        }
                    ]
                }
            }
        },
        "Tags": ["story", "hard", "difficulty_easy", "classic"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "00000250-0000-0000-0000-000000000027",
        "Name": "UI_CHALLENGES_BENKO_CROSS_NAME",
        "ImageName": "images/challenges/paris/targets/Cross.jpg",
        "Description": "UI_CHALLENGES_BENKO_CROSS_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PROFESSIONAL",
        "Icon": "challenge_category_targets",
        "LocationId": "LOCATION_PARENT_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "hit",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$eq": [
                                "$Value.RepositoryId",
                                "a7930fae-37ac-45f1-977f-4e9ef8d37434"
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "hard", "targets"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "82f5a480-68a0-4a43-b8d3-2435c8997738",
        "Name": "UI_CHALLENGES_BENKO_MONEY_CROSS_NAME",
        "ImageName": "images/challenges/paris/Money.jpg",
        "Description": "UI_CHALLENGES_BENKO_MONEY_CROSS_DESC",
        "Rewards": {
            "MasteryXP": 2500
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
        "Icon": "challenge_category_discovery",
        "LocationId": "LOCATION_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "TypeHeader": "UI_MENU_PAGE_CHALLENGE_HEADER_MISSION",
        "TypeTitle": "UI_CONTRACT_BENKO_TITLE",
        "TypeIcon": "mission",
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Pacify": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "a7930fae-37ac-45f1-977f-4e9ef8d37434"
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillItemRepositoryId",
                                        "54b1ffd7-5290-4b58-8e1c-53fd038a08f5"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "medium", "discovery"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "82f5a480-68a0-4a43-b8d3-2545c8999938",
        "Name": "UI_CHALLENGES_BENKO_CLEAN_MORGAN_NAME",
        "ImageName": "images/challenges/paris/Clean.jpg",
        "Description": "UI_CHALLENGES_BENKO_CLEAN_MORGAN_DESC",
        "Rewards": {
            "MasteryXP": 2500
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
        "Icon": "challenge_category_discovery",
        "LocationId": "LOCATION_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "TypeHeader": "UI_MENU_PAGE_CHALLENGE_HEADER_MISSION",
        "TypeTitle": "UI_CONTRACT_BENKO_TITLE",
        "TypeIcon": "mission",
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Pacify": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "f65fff84-6cad-4a11-9a0a-b89430c03397"
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillItemRepositoryId",
                                        "6b87c27d-0d73-4c63-b852-5a9c7a9ffb90"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "medium", "discovery"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "84a2dab8-4a04-4c54-b143-0fe6dde3a6eb",
        "Name": "UI_CHALLENGES_BENKO_SICK_MORGAN_NAME",
        "ImageName": "images/challenges/paris/Sick.jpg",
        "Description": "UI_CHALLENGES_BENKO_SICK_MORGAN_DESC",
        "Rewards": {
            "MasteryXP": 1000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
        "Icon": "challenge_category_discovery",
        "LocationId": "LOCATION_PARENT_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Actorsick": {
                        "Condition": {
                            "$eq": [
                                "$Value.actor_R_ID",
                                "f65fff84-6cad-4a11-9a0a-b89430c03397"
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "easy", "discovery"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "7107cc08-2d82-4aol-83e5-57d0e1b919bb",
        "Name": "UI_CHALLENGES_KIWI_47_SILENT_ASSASSIN_SUIT_DIFFICULTY_EASY_NAME",
        "ImageName": "images/challenges/profile_challenges/classics_normal_47_sa_suit.jpg",
        "Description": "UI_CHALLENGES_KIWI_47_SILENT_ASSASSIN_SUIT_DIFFICULTY_EASY_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
        "Icon": "profile",
        "LocationId": "LOCATION_PARENT_NEWZEALAND",
        "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Context": {
                "Witnesses": [],
                "Targets": [],
                "RecordingDestroyed": true,
                "LastAccidentTime": 0
            },
            "Scope": "session",
            "States": {
                "Start": {
                    "ContractEnd": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        true,
                                        "$.RecordingDestroyed"
                                    ]
                                },
                                {
                                    "$all": {
                                        "in": "$.Witnesses",
                                        "?": {
                                            "$any": {
                                                "in": "$.Targets",
                                                "?": {
                                                    "$eq": [
                                                        "$.#",
                                                        "$.##"
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        "Transition": "Success"
                    },
                    "AccidentBodyFound": {
                        "$set": ["LastAccidentTime", "$Timestamp"]
                    },
                    "Witnesses": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "Spotted": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "ContractStart": [
                        {
                            "Condition": {
                                "$eq": [
                                    "$Value.IsHitmanSuit",
                                    false
                                ]
                            },
                            "Transition": "Failure"
                        }
                    ],
                    "Kill": [
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$not": {
                                            "$eq": [
                                                "$Value.KillContext",
                                                1
                                            ]
                                        }
                                    }
                                ]
                            },
                            "Transition": "Failure"
                        },
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.KillContext",
                                            1
                                        ]
                                    }
                                ]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Targets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        },
                        {
                            "Condition": {
                                "$eq": ["$Value.IsTarget", true]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Targets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        }
                    ],
                    "CrowdNPC_Died": {
                        "Transition": "Failure"
                    },
                    "MurderedBodySeen": [
                        {
                            "Condition": {
                                "$eq": [
                                    "$Value.IsWitnessTarget",
                                    true
                                ]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Witnesses",
                                    "$Value.Witness"
                                ]
                            }
                        },
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsWitnessTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$not": {
                                            "$eq": [
                                                "$.LastAccidentTime",
                                                "$Timestamp"
                                            ]
                                        }
                                    }
                                ]
                            },
                            "Transition": "Failure"
                        }
                    ],
                    "SecuritySystemRecorder": [
                        {
                            "Actions": {
                                "$set": [
                                    "RecordingDestroyed",
                                    false
                                ]
                            },
                            "Condition": {
                                "$eq": ["$Value.event", "spotted"]
                            }
                        },
                        {
                            "Actions": {
                                "$set": ["RecordingDestroyed", true]
                            },
                            "Condition": {
                                "$or": [
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "erased"
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "destroyed"
                                        ]
                                    }
                                ]
                            }
                        }
                    ],
                    "Disguise": {
                        "Transition": "Failure"
                    }
                }
            }
        },
        "Tags": [
            "story",
            "hard",
            "suitonly",
            "classic",
            "difficulty_easy"
        ],
        "InclusionData": {
            "ContractIds": ["c47ecffd-895a-4847-b847-62153ed56575"]
        }
    },
    {
        "Id": "bb340ee2-cc45-4819-abba-af4094917d94",
        "Name": "UI_CHALLENGES_KIWI_47_SNIPER_ASSASSIN_DIFFICULTY_EASY_NAME",
        "ImageName": "images/challenges/profile_challenges/classics_normal_47_sniper_assassin.jpg",
        "Description": "UI_CHALLENGES_KIWI_47_SNIPER_ASSASSIN_DIFFICULTY_EASY_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
        "Icon": "profile",
        "LocationId": "LOCATION_PARENT_NEWZEALAND",
        "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Context": {
                "Witnesses": [],
                "Targets": [],
                "RecordingDestroyed": true,
                "SniperKillSierraCar": false
            },
            "Scope": "session",
            "States": {
                "Start": {
                    "ContractEnd": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        true,
                                        "$.RecordingDestroyed"
                                    ]
                                },
                                {
                                    "$all": {
                                        "in": "$.Witnesses",
                                        "?": {
                                            "$any": {
                                                "in": "$.Targets",
                                                "?": {
                                                    "$eq": [
                                                        "$.#",
                                                        "$.##"
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        "Transition": "Success"
                    },
                    "Witnesses": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "Spotted": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "SniperKillSierraCar": {
                        "$set": ["SniperKillSierraCar", true]
                    },
                    "Kill": [
                        {
                            "Condition": {
                                "$or": [
                                    {
                                        "$and": [
                                            {
                                                "$not": {
                                                    "$contains": [
                                                        "$Value.KillItemCategory",
                                                        "sniperrifle"
                                                    ]
                                                }
                                            },
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    true
                                                ]
                                            },
                                            {
                                                "$or": [
                                                    {
                                                        "$not": {
                                                            "$eq": [
                                                                "$Value.RepositoryId",
                                                                "c0ab162c-1502-40d5-801f-c5471289d6b7"
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        "$and": [
                                                            {
                                                                "$eq": [
                                                                    "$Value.RepositoryId",
                                                                    "c0ab162c-1502-40d5-801f-c5471289d6b7"
                                                                ]
                                                            },
                                                            {
                                                                "$eq": [
                                                                    "$.SniperKillSierraCar",
                                                                    false
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.IsTarget",
                                                    false
                                                ]
                                            },
                                            {
                                                "$not": {
                                                    "$eq": [
                                                        "$Value.KillContext",
                                                        1
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                ]
                            },
                            "Transition": "Failure"
                        },
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.KillContext",
                                            1
                                        ]
                                    }
                                ]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Targets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        },
                        {
                            "Condition": {
                                "$eq": ["$Value.IsTarget", true]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Targets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        }
                    ],
                    "CrowdNPC_Died": {
                        "Transition": "Failure"
                    },
                    "SecuritySystemRecorder": [
                        {
                            "Actions": {
                                "$set": [
                                    "RecordingDestroyed",
                                    false
                                ]
                            },
                            "Condition": {
                                "$eq": ["$Value.event", "spotted"]
                            }
                        },
                        {
                            "Actions": {
                                "$set": ["RecordingDestroyed", true]
                            },
                            "Condition": {
                                "$or": [
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "erased"
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "destroyed"
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        },
        "Tags": [
            "story",
            "hard",
            "sniper",
            "classic",
            "difficulty_easy"
        ],
        "InclusionData": {
            "ContractIds": ["c47ecffd-895a-4847-b847-62153ed56575"]
        }
    },
    {
        "Id": "ccade8bd-4f4c-46e0-b9e4-8aed91a3b555",
        "Name": "UI_CHALLENGES_KIWI_47_SUIT_ONLY_DIFFICULTY_EASY_NAME",
        "ImageName": "images/challenges/profile_challenges/classics_normal_47_suit_only.jpg",
        "Description": "UI_CHALLENGES_KIWI_47_SUIT_ONLY_DIFFICULTY_EASY_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
        "Icon": "profile",
        "LocationId": "LOCATION_PARENT_NEWZEALAND",
        "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "Context": {},
            "States": {
                "Start": {
                    "ContractStart": [
                        {
                            "Condition": {
                                "$eq": [
                                    "$Value.IsHitmanSuit",
                                    false
                                ]
                            },
                            "Transition": "Failure"
                        }
                    ],
                    "Disguise": {
                        "Transition": "Failure"
                    },
                    "ContractEnd": {
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "hard", "classic", "difficulty_easy"],
        "InclusionData": {
            "ContractIds": ["c47ecffd-895a-4847-b847-62153ed56575"]
        }
    },
    {
        "Id": "d174fr5e-48cc-4261-b99a-45e3949bdc8b",
        "Name": "UI_CHALLENGES_KIWI_47_SILENT_ASSASSIN_DIFFICULTY_EASY_NAME",
        "ImageName": "images/challenges/profile_challenges/classics_normal_47_silent_assassin.jpg",
        "Description": "UI_CHALLENGES_KIWI_47_SILENT_ASSASSIN_DIFFICULTY_EASY_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
        "Icon": "profile",
        "LocationId": "LOCATION_PARENT_NEWZEALAND",
        "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Context": {
                "Witnesses": [],
                "KilledTargets": [],
                "RecordingDestroyed": true,
                "LastAccidentTime": 0
            },
            "Scope": "session",
            "States": {
                "Start": {
                    "ContractEnd": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        true,
                                        "$.RecordingDestroyed"
                                    ]
                                },
                                {
                                    "$all": {
                                        "in": "$.Witnesses",
                                        "?": {
                                            "$any": {
                                                "in": "$.KilledTargets",
                                                "?": {
                                                    "$eq": [
                                                        "$.#",
                                                        "$.##"
                                                    ]
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        "Transition": "Success"
                    },
                    "AccidentBodyFound": {
                        "$set": ["LastAccidentTime", "$Timestamp"]
                    },
                    "Witnesses": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "Spotted": {
                        "Condition": {
                            "$any": {
                                "in": "$Value",
                                "?": {
                                    "$pushunique": [
                                        "Witnesses",
                                        "$.#"
                                    ]
                                }
                            }
                        }
                    },
                    "Kill": [
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$not": {
                                            "$eq": [
                                                "$Value.KillContext",
                                                1
                                            ]
                                        }
                                    }
                                ]
                            },
                            "Transition": "Failure"
                        },
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.KillContext",
                                            1
                                        ]
                                    }
                                ]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "KilledTargets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        },
                        {
                            "Condition": {
                                "$eq": ["$Value.IsTarget", true]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "KilledTargets",
                                    "$Value.RepositoryId"
                                ]
                            }
                        }
                    ],
                    "CrowdNPC_Died": {
                        "Transition": "Failure"
                    },
                    "MurderedBodySeen": [
                        {
                            "Condition": {
                                "$eq": [
                                    "$Value.IsWitnessTarget",
                                    true
                                ]
                            },
                            "Actions": {
                                "$pushunique": [
                                    "Witnesses",
                                    "$Value.Witness"
                                ]
                            }
                        },
                        {
                            "Condition": {
                                "$and": [
                                    {
                                        "$eq": [
                                            "$Value.IsWitnessTarget",
                                            false
                                        ]
                                    },
                                    {
                                        "$not": {
                                            "$eq": [
                                                "$.LastAccidentTime",
                                                "$Timestamp"
                                            ]
                                        }
                                    }
                                ]
                            },
                            "Transition": "Failure"
                        }
                    ],
                    "SecuritySystemRecorder": [
                        {
                            "Actions": {
                                "$set": [
                                    "RecordingDestroyed",
                                    false
                                ]
                            },
                            "Condition": {
                                "$eq": ["$Value.event", "spotted"]
                            }
                        },
                        {
                            "Actions": {
                                "$set": ["RecordingDestroyed", true]
                            },
                            "Condition": {
                                "$or": [
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "erased"
                                        ]
                                    },
                                    {
                                        "$eq": [
                                            "$Value.event",
                                            "destroyed"
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        },
        "Tags": ["story", "hard", "classic", "difficulty_easy"],
        "InclusionData": {
            "ContractIds": ["c47ecffd-895a-4847-b847-62153ed56575"]
        }
    },
    {
        "Id": "af3b01a6-99f6-4664-aff8-a9f37f4cb720",
        "Name": "UI_CHALLENGES_KIWI_BIG5_EASY_NAME",
        "ImageName": "Images/Challenges/profile_challenges/classics_location_normal.jpg",
        "Description": "UI_CHALLENGES_KIWI_BIG5_EASY_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_CLASSIC",
        "Icon": "profile",
        "LocationId": "LOCATION_PARENT_NEWZEALAND",
        "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Constants": {
                "RequiredChallenges": [
                    "7107cc08-2d82-4aol-83e5-57d0e1b919bb",
                    "bb340ee2-cc45-4819-abba-af4094917d94",
                    "ccade8bd-4f4c-46e0-b9e4-8aed91a3b555",
                    "d174fr5e-48cc-4261-b99a-45e3949bdc8b"
                ]
            },
            "Context": {
                "CompletedChallenges": []
            },
            "ContextListeners": {
                "CompletedChallenges": {
                    "comparand": "$.RequiredChallenges",
                    "type": "challengetree"
                }
            },
            "Scope": "hit",
            "States": {
                "Start": {
                    "ChallengeCompleted": [
                        {
                            "$pushunique": [
                                "CompletedChallenges",
                                "$Value.ChallengeId"
                            ]
                        },
                        {
                            "Condition": {
                                "$all": {
                                    "?": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$.##"
                                                ]
                                            },
                                            "in": "$.CompletedChallenges"
                                        }
                                    },
                                    "in": "$.RequiredChallenges"
                                }
                            },
                            "Transition": "Success"
                        }
                    ]
                }
            }
        },
        "Tags": ["story", "hard", "difficulty_easy", "classic"],
        "InclusionData": {
            "ContractIds": ["c47ecffd-895a-4847-b847-62153ed56575"]
        }
    },
    {
        "Id": "00000850-0000-0000-0000-000000000027",
        "Name": "UI_CHALLENGES_KIWI_MARTINEZ_NAME",
        "ImageName": "images/challenges/HB Kiwi/Target/Martinez.jpg",
        "Description": "UI_CHALLENGES_KIWI_MARTINEZ_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_PROFESSIONAL",
        "Icon": "challenge_category_targets",
        "LocationId": "LOCATION_PARENT_NEWZEALAND",
        "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "hit",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$eq": [
                                "$Value.RepositoryId",
                                "3f5d9a9d-5a51-437a-a4c5-c2eae28a4eed"
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "hard", "targets"],
        "InclusionData": {
            "ContractIds": ["c47ecffd-895a-4847-b847-62153ed56575"]
        }
    },
    {
        "Id": "8d9fe7f2-3ade-43a9-935a-50b884fe0d71",
        "Name": "UI_CHALLENGES_COWBOY_44_NAME",
        "ImageName": "images/challenges/HB Kiwi/Cowboy44.jpg",
        "Description": "UI_CHALLENGES_COWBOY_44_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": ["FIREARMS_HERO_REVOLVER"],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
        "Icon": "challenge_category_discovery",
        "LocationId": "LOCATION_PARENT_NEWZEALAND",
        "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "7d0349bb-53a4-477f-9163-35f978268594"
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillItemRepositoryId",
                                        "96c339bf-43e7-4132-8c3a-dfe8c08572b1"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                    
                }
            }
        },
        "Tags": ["story", "medium", "discovery"],
        "InclusionData": {
            "ContractIds": ["c47ecffd-895a-4847-b847-62153ed56575"]
        }
    },
    {
        "Id": "69d1ef39-a3ba-4185-80aa-f6cabf23b116",
        "Name": "UI_CHALLENGES_KIWI_CHEF_47_NAME",
        "ImageName": "images/challenges/HB Kiwi/Chef47.jpg",
        "Description": "UI_CHALLENGES_TIGER_OPP_DISGUISE_KITCHEN_CHEFF_DESC",
        "Rewards": {
            "MasteryXP": 2000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
        "Icon": "challenge_category_discovery",
        "LocationId": "LOCATION_PARENT_NEWZEALAND",
        "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
                "Constants": {
                    "Target": "b3e5fbd9-3043-4828-9dd2-471b92f808ed"
                },
                "Scope": "session",
                "States": {
                    "Start": {
                        "Disguise": {
                            "Condition": {
                                "$eq": ["$.Target", "$Value"]
                            },
                            "Transition": "Success"
                        }
                    }
                }
        },
                "Tags": ["story", "easy", "discovery"],
        "InclusionData": {
            "ContractIds": ["c47ecffd-895a-4847-b847-62153ed56575"]
        }
    },
    {
        "Id": "ecc703e0-9f7b-4f1f-9c36-a50ebf028965",
        "Name": "UI_CHALLENGES_KIWI_HOUSESTAFF_47_NAME",
        "ImageName": "images/challenges/HB Kiwi/47HouseStaff.jpg",
        "Description": "UI_CHALLENGES_KIWI_HOUSESTAFF_47_DESC",
        "Rewards": {
            "MasteryXP": 2000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_EXPLORATION",
        "Icon": "challenge_category_discovery",
        "LocationId": "LOCATION_PARENT_NEWZEALAND",
        "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
                "Constants": {
                    "Target": "705881f7-0c65-49f9-80bd-16229fdbe1c2"
                },
                "Scope": "session",
                "States": {
                    "Start": {
                        "Disguise": {
                            "Condition": {
                                "$eq": ["$.Target", "$Value"]
                            },
                            "Transition": "Success"
                        }
                    }
                }
        },
                "Tags": ["story", "easy", "discovery"],
        "InclusionData": {
            "ContractIds": ["c47ecffd-895a-4847-b847-62153ed56575"]
        }
    }

]

// Put your assassination challenges here...
const assassinationChallenges = [{
    "Id": "671fdee6-c514-42cf-8095-4b74fc17640a",
    "Name": "UI_CHALLENGES_DEMARA_FIBERWIRE_NAME",
    "ImageName": "images/challenges/paris/PEACOCK_c_sign_both_fiberwire.jpg",
    "Description": "UI_CHALLENGES_DEMARA_FIBERWIRE_DESC",
    "Rewards": {
        "MasteryXP": 4000
    },
    "Drops": [],
    "IsPlayable": true,
    "IsLocked": false,
    "HideProgression": false,
    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
    "Icon": "challenge_category_assassination",
    "LocationId": "LOCATION_PARENT_PARIS",
    "ParentLocationId": "LOCATION_PARENT_PARIS",
    "Type": "contract",
    "DifficultyLevels": [],
    "OrderIndex": 10000,
    "XpModifier": {},
    "RuntimeType": "Hit",
    "Definition": {
        "Constants": {
            "Goal": 5
        },
        "Context": {
            "Count": 0
        },
        "ContextListeners": {
            "Count": {
                "type": "challengecounter",
                "count": "$.Count",
                "total": "$.Goal",
                "text": "UI_CHALLENGES_DEMARA_FIBERWIRE_NAME"
            }
        },
        "Scope": "session",
        "States": {
            "Start": {
                "Kill": [
                    {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.IsTarget",
                                        true
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillItemCategory",
                                        "fiberwire"
                                    ]
                                }
                            ]
                        },
                        "Actions": {
                            "$inc": "Count"
                        }
                    },
                    {
                        "Condition": {
                            "$eq": ["$.Count", "$.Goal"]
                        },
                        "Transition": "Success"
                    }
                ]
            }
        }
    },
    "Tags": ["story", "hard", "assassination"],
    "InclusionData": {
        "ContractIds": ["d27ecffd-955a-4907-a5cc-72253ed56500"]
    },
},
{
    "Id": "025gcae0-ef93-427f-88ba-1044f9a49f5d",
    "Name": "UI_CHALLENGES_PEACOCK_47_ASSASINATION_ACCIDENT_NAME",
    "ImageName": "images/challenges/profile_challenges/generic_location_47_accident.jpg",
    "Description": "UI_CHALLENGES_PEACOCK_47_ASSASINATION_ACCIDENT_DESC",
    "Rewards": {
        "MasteryXP": 1000
    },
    "Drops": [],
    "IsPlayable": true,
    "IsLocked": false,
    "HideProgression": false,
    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
    "Icon": "challenge_category_assassination",
    "LocationId": "LOCATION_PARIS",
    "ParentLocationId": "LOCATION_PARENT_PARIS",
    "Type": "contract",
    "DifficultyLevels": [],
    "OrderIndex": 10000,
    "XpModifier": {},
    "RuntimeType": "Hit",
    "Definition": {
        "Scope": "session",
        "States": {
            "Start": {
                "Kill": {
                    "Condition": {
                        "$and": [
                            {
                                "$eq": ["$Value.IsTarget", true]
                            },
                            {
                                "$eq": ["$Value.Accident", true]
                            }
                        ]
                    },
                    "Transition": "Success"
                }
            }
        }
    },
    "Tags": ["story", "easy", "assassination"],
    "InclusionData": {
        "ContractIds": ["d27ecffd-955a-4907-a5cc-72253ed56500"]
    },
},
{
    "Id": "048y5dee-af61-4342-8ad3-ee3351f156d2",
    "Name": "UI_CHALLENGES_PEACOCK_47_ASSASINATION_DROWN_NAME",
    "ImageName": "images/challenges/profile_challenges/generic_location_47_drown.jpg",
    "Description": "UI_CHALLENGES_PEACOCK_47_ASSASINATION_DROWN_DESC",
    "Rewards": {
        "MasteryXP": 1000
    },
    "Drops": [],
    "IsPlayable": true,
    "IsLocked": false,
    "HideProgression": false,
    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
    "Icon": "challenge_category_assassination",
    "LocationId": "LOCATION_PARIS",
    "ParentLocationId": "LOCATION_PARENT_PARIS",
    "Type": "contract",
    "DifficultyLevels": [],
    "OrderIndex": 10000,
    "XpModifier": {},
    "RuntimeType": "Hit",
    "Definition": {
        "Scope": "session",
        "States": {
            "Start": {
                "Kill": {
                    "Condition": {
                        "$and": [
                            {
                                "$eq": ["$Value.IsTarget", true]
                            },
                            {
                                "$eq": [
                                    "$Value.SetPieceType",
                                    "7b28519a-3c66-4498-a61b-ae6926a85594"
                                ]
                            }
                        ]
                    },
                    "Transition": "Success"
                }
            }
        }
    },
    "Tags": ["story", "easy", "assassination"],
    "InclusionData": {
        "ContractIds": ["d27ecffd-955a-4907-a5cc-72253ed56500"]
    },
},
{
    "Id": "4c9c2c21-cf1c-44bf-9cdf-6742d02914eb",
    "Name": "UI_CHALLENGES_PEACOCK_47_MASTER_OF_TRADE_NAME",
    "ImageName": "images/challenges/profile_challenges/generic_location_47_versatile.jpg",
    "Description": "UI_CHALLENGES_PEACOCK_47_MASTER_OF_TRADE_DESC",
    "Rewards": {
        "MasteryXP": 4000
    },
    "Drops": [],
    "IsPlayable": true,
    "IsLocked": false,
    "HideProgression": false,
    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
    "Icon": "challenge_category_assassination",
    "LocationId": "LOCATION_PARIS",
    "ParentLocationId": "LOCATION_PARENT_PARIS",
    "Type": "contract",
    "DifficultyLevels": [],
    "OrderIndex": 10000,
    "XpModifier": {},
    "RuntimeType": "Hit",
    "Definition": {
        "Constants": {
            "RequiredChallenges": [
                "025gcae0-ef93-427f-88ba-1044f9a49f5d",
                "048y5dee-af61-4342-8ad3-ee3351f156d2",
                "89c746ff-05ef-47bd-99b9-90e2f112de91",
                "8c86v389-38a3-4d26-a754-cdb80d3e327f",
                "f2a7585d-31b8-4e8d-878b-fda27ee6fcc4"
            ]
        },
        "Context": {
            "CompletedChallenges": []
        },
        "ContextListeners": {
            "CompletedChallenges": {
                "comparand": "$.RequiredChallenges",
                "type": "challengetree"
            }
        },
        "Scope": "hit",
        "States": {
            "Start": {
                "ChallengeCompleted": [
                    {
                        "$pushunique": [
                            "CompletedChallenges",
                            "$Value.ChallengeId"
                        ]
                    },
                    {
                        "Condition": {
                            "$all": {
                                "?": {
                                    "$any": {
                                        "?": {
                                            "$eq": [
                                                "$.#",
                                                "$.##"
                                            ]
                                        },
                                        "in": "$.CompletedChallenges"
                                    }
                                },
                                "in": "$.RequiredChallenges"
                            }
                        },
                        "Transition": "Success"
                    }
                ]
            }
        }
    },
    "Tags": ["story", "easy", "assassination"],
    "InclusionData": {
        "ContractIds": ["d27ecffd-955a-4907-a5cc-72253ed56500"]
    },
},
{
    "Id": "89c746ff-05ef-47bd-99b9-90e2f112de91",
    "Name": "UI_CHALLENGES_PEACOCK_47_ASSASINATION_FIBERWIRE_NAME",
    "ImageName": "images/challenges/profile_challenges/generic_location_47_fiberwire.jpg",
    "Description": "UI_CHALLENGES_PEACOCK_47_ASSASINATION_FIBERWIRE_DESC",
    "Rewards": {
        "MasteryXP": 1000
    },
    "Drops": [],
    "IsPlayable": true,
    "IsLocked": false,
    "HideProgression": false,
    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
    "Icon": "challenge_category_assassination",
    "LocationId": "LOCATION_PARIS",
    "ParentLocationId": "LOCATION_PARENT_PARIS",
    "Type": "contract",
    "DifficultyLevels": [],
    "OrderIndex": 10000,
    "XpModifier": {},
    "RuntimeType": "Hit",
    "Definition": {
        "Scope": "session",
        "States": {
            "Start": {
                "Kill": {
                    "Condition": {
                        "$and": [
                            {
                                "$eq": ["$Value.IsTarget", true]
                            },
                            {
                                "$eq": [
                                    "$Value.KillItemCategory",
                                    "fiberwire"
                                ]
                            }
                        ]
                    },
                    "Transition": "Success"
                }
            }
        }
    },
    "Tags": ["story", "normal", "assassination"],
    "InclusionData": {
        "ContractIds": ["d27ecffd-955a-4907-a5cc-72253ed56500"]
    },
},
{
    "Id": "8c86v389-38a3-4d26-a754-cdb80d3e327f",
    "Name": "UI_CHALLENGES_PEACOCK_47_ASSASINATION_HEADSHOT_NAME",
    "ImageName": "images/challenges/profile_challenges/generic_location_47_headshot.jpg",
    "Description": "UI_CHALLENGES_PEACOCK_47_ASSASINATION_HEADSHOT_DESC",
    "Rewards": {
        "MasteryXP": 1000
    },
    "Drops": [],
    "IsPlayable": true,
    "IsLocked": false,
    "HideProgression": false,
    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
    "Icon": "challenge_category_assassination",
    "LocationId": "LOCATION_PARIS",
    "ParentLocationId": "LOCATION_PARENT_PARIS",
    "Type": "contract",
    "DifficultyLevels": [],
    "OrderIndex": 10000,
    "XpModifier": {},
    "RuntimeType": "Hit",
    "Definition": {
        "Scope": "session",
        "States": {
            "Start": {
                "Kill": {
                    "Condition": {
                        "$and": [
                            {
                                "$eq": ["$Value.IsTarget", true]
                            },
                            {
                                "$eq": [
                                    "$Value.IsHeadshot",
                                    true
                                ]
                            }
                        ]
                    },
                    "Transition": "Success"
                }
            }
        }
    },
    "Tags": ["story", "easy", "assassination"],
    "InclusionData": {
        "ContractIds": ["d27ecffd-955a-4907-a5cc-72253ed56500"]
    },
},
{
    "Id": "f2a7585d-31b8-4e8d-878b-fda27ee6fcc4",
    "Name": "UI_CHALLENGES_PEACOCK_47_ASSASINATION_POISON_NAME",
    "ImageName": "images/challenges/profile_challenges/generic_location_47_poison.jpg",
    "Description": "UI_CHALLENGES_PEACOCK_47_ASSASINATION_POISON_DESC",
    "Rewards": {
        "MasteryXP": 1000
    },
    "Drops": [],
    "IsPlayable": true,
    "IsLocked": false,
    "HideProgression": false,
    "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
    "Icon": "challenge_category_assassination",
    "LocationId": "LOCATION_PARIS",
    "ParentLocationId": "LOCATION_PARENT_PARIS",
    "Type": "contract",
    "DifficultyLevels": [],
    "OrderIndex": 10000,
    "XpModifier": {},
    "RuntimeType": "Hit",
    "Definition": {
        "Scope": "session",
        "States": {
            "Start": {
                "Kill": {
                    "Condition": {
                        "$and": [
                            {
                                "$eq": ["$Value.IsTarget", true]
                            },
                            {
                                "$eq": [
                                    "$Value.KillClass",
                                    "poison"
                                ]
                            }
                        ]
                    },
                    "Transition": "Success"
                }
            }
        }
    },
    "Tags": ["story", "easy", "assassination"],
    "InclusionData": {
        "ContractIds": ["d27ecffd-955a-4907-a5cc-72253ed56500"]
    },



},
    {
        "Id": "0d6504a4-730c-4ed3-8233-fd261f1cce60",
        "Name": "UI_CHALLENGES_DEMARA_SHEIKH_LEDGE_NAME",
        "ImageName": "images/challenges/paris/Balcony.jpg",
        "Description": "UI_CHALLENGES_DEMARA_SHEIKH_LEDGE_DESC",
        "Rewards": {
            "MasteryXP": 2000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "335ce4e7-36bb-45cd-aa24-18564d48ed4e"
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillMethodStrict",
                                        "accident_push"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "hard", "assassination"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4907-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "8c86b489-38a3-4d26-a754-cdb80d3e327f",
        "Name": "UI_CHALLENGES_DEMARA_47_PAN_NAME",
        "ImageName": "images/challenges/paris/Pan.jpg",
        "Description": "UI_CHALLENGES_DEMARA_47_PAN_DESC",
        "Rewards": {
            "MasteryXP": 2000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "f9c3905a-ec94-43b6-aae6-8b2f752467f7"
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillItemCategory",
                                        "pistol"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "easy", "assassination"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4907-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "8c86b479-38a3-4d26-a754-cdb80d3e327f",
        "Name": "UI_CHALLENGES_DEMARA_ACTION_KIRROYAL_NAME",
        "ImageName": "images/challenges/paris/Action.jpg",
        "Description": "UI_CHALLENGES_DEMARA_ACTION_KIRROYAL_DESC",
        "Rewards": {
            "MasteryXP": 2000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "124c40d5-b342-4288-b202-57e80148e0d7"
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillMethodStrict",
                                        "accident_electric"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "easy", "assassination"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4907-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "8c86b489-38b3-4d26-a754-cdb80d3e327f",
        "Name": "UI_CHALLENGES_DEMARA_BLOODSTAIN_TEQUILA_NAME",
        "ImageName": "images/challenges/paris/Bloodstain.jpg",
        "Description": "UI_CHALLENGES_DEMARA_BLOODSTAIN_TEQUILA_DESC",
        "Rewards": {
            "MasteryXP": 2000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "46b78498-b470-4aad-b72b-d90f3126a7f6"
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillItemRepositoryId",
                                        "e30a5b15-ce4d-41d5-a2a5-08dec9c4fe79"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "easy", "assassination"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4907-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "8c86b479-37a3-4d27-a754-cdb80d3e327f",
        "Name": "UI_CHALLENGES_DEMARA_HEADACHE_KAMIKAZE_NAME",
        "ImageName": "images/challenges/paris/Headache.jpg",
        "Description": "UI_CHALLENGES_DEMARA_HEADACHE_KAMIKAZE_DESC",
        "Rewards": {
            "MasteryXP": 2000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "1b21e6e6-beba-4f7e-8760-e9604a69c569"
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillClass",
                                        "poison"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "easy", "assassination"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4907-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "c5457a74-4f6f-4ab3-ad6c-8b33b55f5c69",
        "Name": "UI_CHALLENGES_DAMANHUR_GOD_MESSAGE_NAME",
        "ImageName": "images/challenges/sapienza/Bell.jpg",
        "Description": "UI_CHALLENGES_DAMANHUR_GOD_MESSAGE_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARENT_COASTALTOWN",
        "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Context": {},
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "89fafd79-9c9f-4a0d-a4a1-13c2ffdcf039"
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.SetPieceId",
                                        "61b4181a-8761-432a-9584-557eea178fe2"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "hard", "assassination"],
        "InclusionData": {
            "ContractIds": ["e07f9e22-53c1-4f28-9f2c-a4dff358180c"]
        }
    },
    {
        "Id": "7021c868-63cd-4ef1-80db-4255433072c7",
        "Name": "UI_CHALLENGES_DAMANHUR_LITTLE_WATER_NAME",
        "ImageName": "images/challenges/sapienza/Water.jpg",
        "Description": "UI_CHALLENGES_DAMANHUR_LITTLE_WATER_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARENT_COASTALTOWN",
        "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "2da5acff-0025-4814-831f-30156a4ee38f"
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.SetPieceType",
                                        "7b28519a-3c66-4498-a61b-ae6926a85594"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "hard", "assassination"],
        "InclusionData": {
            "ContractIds": ["e07f9e22-53c1-4f28-9f2c-a4dff358180c"]
        }
    },
    {
        "Id": "32ded342-8895-4cc9-852c-4be4441e8497",
        "Name": "UI_CHALLENGES_SAPIENZA_47_ASSASINATION_FIBERWIRE_NAME",
        "ImageName": "images/challenges/profile_challenges/generic_location_47_fiberwire.jpg",
        "Description": "UI_CHALLENGES_SAPIENZA_47_ASSASINATION_FIBERWIRE_DESC",
        "Rewards": {
            "MasteryXP": 1000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_COASTALTOWN",
        "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": ["$Value.IsTarget", true]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillItemCategory",
                                        "fiberwire"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
    
                    }
                }
            }
        },   
        "Tags": ["story", "hard", "primary", "targets"],
        "InclusionData": {
            "ContractIds": ["e07f9e22-53c1-4f28-9f2c-a4dff358180c"]
            
        }
    },
    {
        "Id": "3c268ae0-1051-475d-956b-b7038608ffc8",
        "Name": "UI_CHALLENGES_SAPIENZA_47_MASTER_OF_TRADE_NAME",
        "ImageName": "images/challenges/profile_challenges/generic_location_47_versatile.jpg",
        "Description": "UI_CHALLENGES_SAPIENZA_47_MASTER_OF_TRADE_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_COASTALTOWN",
        "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Constants": {
                "RequiredChallenges": [
                    "851776ef-3d59-4423-b5c1-f27a36b8c30e",
                    "95fd1ed9-d00b-426a-abcc-7776f4ff136e",
                    "b21f8e92-4759-4b9c-b2bc-bbb2b182a27b",
                    "3f9567d0-7465-4da5-bd4d-13da26e52b6d",
                    "32ded342-8895-4cc9-852c-4be4441e8497"
                ]
            },
            "Context": {
                "CompletedChallenges": []
            },
            "ContextListeners": {
                "CompletedChallenges": {
                    "comparand": "$.RequiredChallenges",
                    "type": "challengetree"
                }
            },
            "Scope": "hit",
            "States": {
                "Start": {
                    "ChallengeCompleted": [
                        {
                            "$pushunique": [
                                "CompletedChallenges",
                                "$Value.ChallengeId"
                            ]
                        },
                        {
                            "Condition": {
                                "$all": {
                                    "?": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$.##"
                                                ]
                                            },
                                            "in": "$.CompletedChallenges"
                                        }
                                    },
                                    "in": "$.RequiredChallenges"
                                }
                            },
                            "Transition": "Success"
                        }
                    ]
                }
            }
        },
        "Tags": ["story", "hard", "assassination"],
        "InclusionData": {
            "ContractIds": ["e07f9e22-53c1-4f28-9f2c-a4dff358180c"]
            
        }
    
    
    },
    {
        "Id": "3f9567d0-7465-4da5-bd4d-13da26e52b6d",
        "Name": "UI_CHALLENGES_SAPIENZA_47_ASSASINATION_DROWN_NAME",
        "ImageName": "images/challenges/profile_challenges/generic_location_47_drown.jpg",
        "Description": "UI_CHALLENGES_SAPIENZA_47_ASSASINATION_DROWN_DESC",
        "Rewards": {
            "MasteryXP": 1000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_COASTALTOWN",
        "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": ["$Value.IsTarget", true]
                                },
                                {
                                    "$eq": [
                                        "$Value.SetPieceType",
                                        "7b28519a-3c66-4498-a61b-ae6926a85594"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "hard", "assassination"],
        "InclusionData": {
            "ContractIds": ["e07f9e22-53c1-4f28-9f2c-a4dff358180c"]
            
        }
    
    
    },
    {
        "Id": "851776ef-3d59-4423-b5c1-f27a36b8c30e",
        "Name": "UI_CHALLENGES_SAPIENZA_47_ASSASINATION_HEADSHOT_NAME",
        "ImageName": "images/challenges/profile_challenges/generic_location_47_headshot.jpg",
        "Description": "UI_CHALLENGES_SAPIENZA_47_ASSASINATION_HEADSHOT_DESC",
        "Rewards": {
            "MasteryXP": 1000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_COASTALTOWN",
        "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": ["$Value.IsTarget", true]
                                },
                                {
                                    "$eq": [
                                        "$Value.IsHeadshot",
                                        true
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "hard", "assassination"],
        "InclusionData": {
            "ContractIds": ["e07f9e22-53c1-4f28-9f2c-a4dff358180c"]
            
        }
    
    
    },
    {
        "Id": "95fd1ed9-d00b-426a-abcc-7776f4ff136e",
        "Name": "UI_CHALLENGES_SAPIENZA_47_ASSASINATION_POISON_NAME",
        "ImageName": "images/challenges/profile_challenges/generic_location_47_poison.jpg",
        "Description": "UI_CHALLENGES_SAPIENZA_47_ASSASINATION_POISON_DESC",
        "Rewards": {
            "MasteryXP": 1000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_COASTALTOWN",
        "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": ["$Value.IsTarget", true]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillClass",
                                        "poison"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "hard", "assassination"],
        "InclusionData": {
            "ContractIds": ["e07f9e22-53c1-4f28-9f2c-a4dff358180c"]
        }
    },
    {
        "Id": "b21f8e92-4759-4b9c-b2bc-bbb2b182a27b",
        "Name": "UI_CHALLENGES_SAPIENZA_47_ASSASINATION_ACCIDENT_NAME",
        "ImageName": "images/challenges/profile_challenges/generic_location_47_accident.jpg",
        "Description": "UI_CHALLENGES_SAPIENZA_47_ASSASINATION_ACCIDENT_DESC",
        "Rewards": {
            "MasteryXP": 1000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_COASTALTOWN",
        "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": ["$Value.IsTarget", true]
                                },
                                {
                                    "$eq": ["$Value.Accident", true]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "hard", "assassination"],
        "InclusionData": {
            "ContractIds": ["e07f9e22-53c1-4f28-9f2c-a4dff358180c"]
        }
    },
    {
        "Id": "7022v868-63cd-4ef1-80db-4255433072c7",
        "Name": "UI_CHALLENGES_DAMANHUR_SNIPER_SAZERAC_NAME",
        "ImageName": "images/challenges/sapienza/SniperChurch.jpg",
        "Description": "UI_CHALLENGES_DAMANHUR_SNIPER_SAZERAC_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARENT_COASTALTOWN",
        "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "89fafd79-9c9f-4a0d-a4a1-13c2ffdcf039"
                                    ]
                                },
                                {
                                    "$contains": [
                                        "$Value.KillItemCategory",
                                         "sniperrifle"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "hard", "assassination"],
        "InclusionData": {
            "ContractIds": ["e07f9e22-53c1-4f28-9f2c-a4dff358180c"]
        }
    },
    {
        "Id": "8446v868-63cd-4ef1-80db-4255433072c7",
        "Name": "UI_CHALLENGES_DAMANHUR_FIBER_WALLBANGER_NAME",
        "ImageName": "images/challenges/sapienza/Fiber.jpg",
        "Description": "UI_CHALLENGES_DAMANHUR_FIBER_WALLBANGER_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARENT_COASTALTOWN",
        "ParentLocationId": "LOCATION_PARENT_COASTALTOWN",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "a5b1f605-7767-4db4-a24b-a9191a10f12d"
                                    ]
                                },
                                {
                                    "$contains": [
                                        "$Value.KillItemCategory",
                                         "fiberwire"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "hard", "assassination"],
        "InclusionData": {
            "ContractIds": ["e07f9e22-53c1-4f28-9f2c-a4dff358180c"]
        }
    },
    {
        "Id": "025gcae0-ef94-427f-88ba-1044f9a49f5d",
        "Name": "UI_CHALLENGES_PEACOCK_47_ASSASINATION_ACCIDENT_NAME",
        "ImageName": "images/challenges/profile_challenges/generic_location_47_accident.jpg",
        "Description": "UI_CHALLENGES_PEACOCK_47_ASSASINATION_ACCIDENT_DESC",
        "Rewards": {
            "MasteryXP": 1000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": ["$Value.IsTarget", true]
                                },
                                {
                                    "$eq": ["$Value.Accident", true]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "easy", "assassination"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        },
    },
    {
        "Id": "048y5dee-bc61-4342-8ad3-ee3351f156d2",
        "Name": "UI_CHALLENGES_PEACOCK_47_ASSASINATION_DROWN_NAME",
        "ImageName": "images/challenges/profile_challenges/generic_location_47_drown.jpg",
        "Description": "UI_CHALLENGES_PEACOCK_47_ASSASINATION_DROWN_DESC",
        "Rewards": {
            "MasteryXP": 1000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": ["$Value.IsTarget", true]
                                },
                                {
                                    "$eq": [
                                        "$Value.SetPieceType",
                                        "7b28519a-3c66-4498-a61b-ae6926a85594"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "easy", "assassination"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        },
    },
    {
        "Id": "4c9c2c21-cf4c-44bf-9cdf-6742d02914eb",
        "Name": "UI_CHALLENGES_PEACOCK_47_MASTER_OF_TRADE_NAME",
        "ImageName": "images/challenges/profile_challenges/generic_location_47_versatile.jpg",
        "Description": "UI_CHALLENGES_PEACOCK_47_MASTER_OF_TRADE_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Constants": {
                "RequiredChallenges": [
                    "048y5dee-bc61-4342-8ad3-ee3351f156d2",
                    "89c746ff-05ef-47bd-95b9-90e2f112de91",
                    "8c86v389-38a3-4d26-a754-dfb80d3e327f",
                    "f2a7585d-38b8-4e8d-878b-fda27ee6fcc4",
                    "048y5dee-bc61-4342-8ad3-ee3351f156d2"
                ]
            },
            "Context": {
                "CompletedChallenges": []
            },
            "ContextListeners": {
                "CompletedChallenges": {
                    "comparand": "$.RequiredChallenges",
                    "type": "challengetree"
                }
            },
            "Scope": "hit",
            "States": {
                "Start": {
                    "ChallengeCompleted": [
                        {
                            "$pushunique": [
                                "CompletedChallenges",
                                "$Value.ChallengeId"
                            ]
                        },
                        {
                            "Condition": {
                                "$all": {
                                    "?": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$.##"
                                                ]
                                            },
                                            "in": "$.CompletedChallenges"
                                        }
                                    },
                                    "in": "$.RequiredChallenges"
                                }
                            },
                            "Transition": "Success"
                        }
                    ]
                }
            }
        },
        "Tags": ["story", "easy", "assassination"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        },
    },
    {
        "Id": "89c746ff-05ef-47bd-95b9-90e2f112de91",
        "Name": "UI_CHALLENGES_PEACOCK_47_ASSASINATION_FIBERWIRE_NAME",
        "ImageName": "images/challenges/profile_challenges/generic_location_47_fiberwire.jpg",
        "Description": "UI_CHALLENGES_PEACOCK_47_ASSASINATION_FIBERWIRE_DESC",
        "Rewards": {
            "MasteryXP": 1000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": ["$Value.IsTarget", true]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillItemCategory",
                                        "fiberwire"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "normal", "assassination"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        },
    },
    {
        "Id": "8c86v389-38a3-4d26-a754-dfb80d3e327f",
        "Name": "UI_CHALLENGES_PEACOCK_47_ASSASINATION_HEADSHOT_NAME",
        "ImageName": "images/challenges/profile_challenges/generic_location_47_headshot.jpg",
        "Description": "UI_CHALLENGES_PEACOCK_47_ASSASINATION_HEADSHOT_DESC",
        "Rewards": {
            "MasteryXP": 1000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": ["$Value.IsTarget", true]
                                },
                                {
                                    "$eq": [
                                        "$Value.IsHeadshot",
                                        true
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "easy", "assassination"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        },
    },
    {
        "Id": "f2a7585d-38b8-4e8d-878b-fda27ee6fcc4",
        "Name": "UI_CHALLENGES_PEACOCK_47_ASSASINATION_POISON_NAME",
        "ImageName": "images/challenges/profile_challenges/generic_location_47_poison.jpg",
        "Description": "UI_CHALLENGES_PEACOCK_47_ASSASINATION_POISON_DESC",
        "Rewards": {
            "MasteryXP": 1000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": ["$Value.IsTarget", true]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillClass",
                                        "poison"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "easy", "assassination"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        }
    },
    {   "Id": "0d6504a4-730c-4ed3-8233-fd261f1cce60",
        "Name": "UI_CHALLENGES_BENKO_BALCONY_CROSS_NAME",
        "ImageName": "images/challenges/paris/CrossBalcony.jpg",
        "Description": "UI_CHALLENGES_BENKO_BALCONY_CROSS_DESC",
        "Rewards": {
            "MasteryXP": 2000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "a7930fae-37ac-45f1-977f-4e9ef8d37434"
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillMethodStrict",
                                        "accident_push"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "hard", "assassination"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "9c90b489-38b3-4d26-e621-cdb80d3e327f",
        "Name": "UI_CHALLENGES_BENKO_47_NAME",
        "ImageName": "images/challenges/paris/47.jpg",
        "Description": "UI_CHALLENGES_BENKO_47_DESC",
        "Rewards": {
            "MasteryXP": 2000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "a7930fae-37ac-45f1-977f-4e9ef8d37434"
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillItemRepositoryId",
                                        "e70adb5b-0646-4f88-bd4a-85bea7a2a654"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                    
                }
            }
        },
        "Tags": ["story", "easy", "assassination"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "fd6f4ae1-480e-429d-8d33-0bb0ee73341e",
        "Name": "UI_CHALLENGES_BENKO_EXPL_MORGAN_NAME",
        "ImageName": "images/challenges/paris/Explosion.jpg",
        "Description": "UI_CHALLENGES_BENKO_EXPL_MORGAN_DESC",
        "Rewards": {
            "MasteryXP": 2000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Context": {},
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$or": [
                                {
                                    "$and": [
                                        {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "f65fff84-6cad-4a11-9a0a-b89430c03397"
                                            ]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.SetPieceType",
                                                "1464cb31-e00b-4adc-8430-b8592d29f701"
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "$and": [
                                        {
                                            "$eq": [
                                                "$Value.RepositoryId",
                                                "f65fff84-6cad-4a11-9a0a-b89430c03397"
                                            ]
                                        },
                                        {
                                            "$eq": [
                                                "$Value.SetPieceType",
                                                "fab9eacb-dcc6-41e5-894b-4b14acc34b78"
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "medium", "assassination"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "00000200-0000-0000-0850-000000000022",
        "Name": "UI_CHALLENGES_BENKO_CHAN_MORGAN_NAME",
        "ImageName": "images/challenges/paris/Accident.jpg",
        "Description": "UI_CHALLENGES_BENKO_CHAN_MORGAN_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARENT_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
                        "Constants": {
                            "Collection": [
                                "966a8c88-76eb-4cfa-a50a-b927618b22f5",
                                "69495224-e982-4a79-989c-afff7e980490",
                                "e3c339ce-b390-45d4-ae37-7151947c3fe1",
                                "0612c231-65f3-43a8-a6f6-a0f2805ce234"
                            ]
                        },
                        "Scope": "session",
                        "Context": {},
                        "States": {
                            "Start": {
                                "Kill": {
                                    "Condition": {
                                        "$and": [
                                            {
                                                "$eq": [
                                                    "$Value.RepositoryId",
                                                    "f65fff84-6cad-4a11-9a0a-b89430c03397"
                                                ]
                                            },
                                            {
                                                "$any": {
                                                    "?": {
                                                        "$eq": [
                                                            "$.#",
                                                            "$Value.SetPieceType"
                                                        ]
                                                    },
                                                    "in": "$.Collection"
                                                }
                                            }
                                        ]
                                    },
                                    "Transition": "Success"
                                }
                            }
                        }
                    },
        "Tags": ["story", "hard", "assassination"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "8a80b489-40c6-4d26-e621-cdb80d3e327f",
        "Name": "UI_CHALLENGES_BENKO_NAPOLEON_MORGAN_NAME",
        "ImageName": "images/challenges/paris/Sabre.jpg",
        "Description": "UI_CHALLENGES_BENKO_NAPOLEON_MORGAN_DESC",
        "Rewards": {
            "MasteryXP": 2000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "f65fff84-6cad-4a11-9a0a-b89430c03397"
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillItemRepositoryId",
                                        "94f52181-b9ec-4363-baef-d53b4e424b74"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                    
                }
            }
        },
        "Tags": ["story", "easy", "assassination"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "7582v868-63cd-4ef1-80db-4255433072c7",
        "Name": "UI_CHALLENGES_BENKO_SNIPER_CROSS_NAME",
        "ImageName": "images/challenges/paris/Sniper.jpg",
        "Description": "UI_CHALLENGES_BENKO_SNIPER_CROSS_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "a7930fae-37ac-45f1-977f-4e9ef8d37434"
                                    ]
                                },
                                {
                                    "$contains": [
                                        "$Value.KillItemCategory",
                                         "sniperrifle"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "hard", "assassination"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "7582v828-66se-4ef1-80db-4255433072c7",
        "Name": "UI_CHALLENGES_BENKO_BURN_CROSS_NAME",
        "ImageName": "images/challenges/paris/Fire.jpg",
        "Description": "UI_CHALLENGES_BENKO_BURN_CROSS_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "a7930fae-37ac-45f1-977f-4e9ef8d37434"
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillMethodStrict",
                                        "accident_burn"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "hard", "assassination"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "7cc769a9-0e91-40b9-9548-21ee58d897d8",
        "Name": "UI_CHALLENGES_NEWZEALAND_47_ASSASINATION_ACCIDENT_NAME",
        "ImageName": "images/challenges/profile_challenges/generic_location_47_accident.jpg",
        "Description": "UI_CHALLENGES_NEWZEALAND_47_ASSASINATION_ACCIDENT_DESC",
        "Rewards": {
            "MasteryXP": 1000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_NEWZEALAND",
        "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": ["$Value.IsTarget", true]
                                },
                                {
                                    "$eq": ["$Value.Accident", true]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "easy", "assassination"],
        "InclusionData": {
            "ContractIds": ["c47ecffd-895a-4847-b847-62153ed56575"]
        }
    },
    {
        "Id": "4b4250ba-a537-43e7-9828-af780c36030b",
        "Name": "UI_CHALLENGES_NEWZEALAND_47_ASSASINATION_DROWN_NAME",
        "ImageName": "images/challenges/profile_challenges/generic_location_47_drown.jpg",
        "Description": "UI_CHALLENGES_NEWZEALAND_47_ASSASINATION_DROWN_DESC",
        "Rewards": {
            "MasteryXP": 1000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_NEWZEALAND",
        "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": ["$Value.IsTarget", true]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillMethodStrict",
                                        "accident_drown"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "easy", "assassination"],
        "InclusionData": {
            "ContractIds": ["c47ecffd-895a-4847-b847-62153ed56575"]
        }    
    },
    {
        "Id": "c1bb7891-7c8c-499c-ba1c-95eabfcb6c9b",
        "Name": "UI_CHALLENGES_NEWZEALAND_47_ASSASINATION_FIBERWIRE_NAME",
        "ImageName": "images/challenges/profile_challenges/generic_location_47_fiberwire.jpg",
        "Description": "UI_CHALLENGES_NEWZEALAND_47_ASSASINATION_FIBERWIRE_DESC",
        "Rewards": {
            "MasteryXP": 1000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_NEWZEALAND",
        "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": ["$Value.IsTarget", true]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillItemCategory",
                                        "fiberwire"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "easy", "assassination"],
        "InclusionData": {
            "ContractIds": ["c47ecffd-895a-4847-b847-62153ed56575"]
        }    
    },
    {
        "Id": "371rrr68-287d-4a88-a8b4-41aecf9fb665",
        "Name": "UI_CHALLENGES_NEWZEALAND_47_ASSASINATION_HEADSHOT_NAME",
        "ImageName": "images/challenges/profile_challenges/generic_location_47_headshot.jpg",
        "Description": "UI_CHALLENGES_NEWZEALAND_47_ASSASINATION_HEADSHOT_DESC",
        "Rewards": {
            "MasteryXP": 1000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_NEWZEALAND",
        "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": ["$Value.IsTarget", true]
                                },
                                {
                                    "$eq": [
                                        "$Value.IsHeadshot",
                                        true
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "easy", "assassination"],
        "InclusionData": {
            "ContractIds": ["c47ecffd-895a-4847-b847-62153ed56575"]
        }    
    },
    {
        "Id": "f78e833b-e16f-4c9d-81ea-204197755a0c",
        "Name": "UI_CHALLENGES_NEWZEALAND_47_ASSASINATION_POISON_NAME",
        "ImageName": "images/challenges/profile_challenges/generic_location_47_poison.jpg",
        "Description": "UI_CHALLENGES_NEWZEALAND_47_ASSASINATION_POISON_DESC",
        "Rewards": {
            "MasteryXP": 1000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_NEWZEALAND",
        "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
        "Type": "location",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": ["$Value.IsTarget", true]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillClass",
                                        "poison"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "easy", "assassination"],
        "InclusionData": {
            "ContractIds": ["c47ecffd-895a-4847-b847-62153ed56575"]
        }
    },
    {
        "Id": "2204504e-1ee8-44bf-ba0c-7ed131f10c38",
        "Name": "UI_CHALLENGES_NEWZEALAND_47_MASTER_OF_TRADE_NAME",
        "ImageName": "images/challenges/profile_challenges/generic_location_47_versatile.jpg",
        "Description": "UI_CHALLENGES_NEWZEALAND_47_MASTER_OF_TRADE_DESC",
        "Rewards": {
            "MasteryXP": 2000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_NEWZEALAND",
        "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Constants": {
                "RequiredChallenges": [
                    "7cc769a9-0e91-40b9-9548-21ee58d897d8",
                    "4b4250ba-a537-43e7-9828-af780c36030b",
                    "c1bb7891-7c8c-499c-ba1c-95eabfcb6c9b",
                    "371rrr68-287d-4a88-a8b4-41aecf9fb665",
                    "f78e833b-e16f-4c9d-81ea-204197755a0c"
                ]
            },
            "Context": {
                "CompletedChallenges": []
            },
            "ContextListeners": {
                "CompletedChallenges": {
                    "comparand": "$.RequiredChallenges",
                    "type": "challengetree"
                }
            },
            "Scope": "hit",
            "States": {
                "Start": {
                    "ChallengeCompleted": [
                        {
                            "$pushunique": [
                                "CompletedChallenges",
                                "$Value.ChallengeId"
                            ]
                        },
                        {
                            "Condition": {
                                "$all": {
                                    "?": {
                                        "$any": {
                                            "?": {
                                                "$eq": [
                                                    "$.#",
                                                    "$.##"
                                                ]
                                            },
                                            "in": "$.CompletedChallenges"
                                        }
                                    },
                                    "in": "$.RequiredChallenges"
                                }
                            },
                            "Transition": "Success"
                        }
                    ]
                }
            }
        },
        "Tags": ["story", "medium", "assassination"],
        "InclusionData": {
            "ContractIds": ["c47ecffd-895a-4847-b847-62153ed56575"]
        }
    },
    {
        "Id": "a8b5ce66-67d7-417e-98cd-8c2d00f62b16",
        "Name": "UI_CHALLENGES_BENKO_GIFT_STABBED_NAME",
        "ImageName": "images/challenges/paris/award.jpg",
        "Description": "UI_CHALLENGES_BENKO_GIFT_STABBED_DESC",
        "Rewards": {
            "MasteryXP": 2000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARENT_PARIS",
        "ParentLocationId": "LOCATION_PARENT_PARIS",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "hit",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$eq": [
                                "$Value.SetPieceId",
                                "1a29d28c-be03-4149-b49c-b0c38d060772"
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "medium", "assassination"],
        "InclusionData": {
            "ContractIds": ["d27ecffd-955a-4727-a5cc-72253ed56500"]
        }
    },
    {
        "Id": "8c87c589-38a3-4d26-a754-cdb80d3e327f",
        "Name": "UI_CHALLENGES_KIWI_47_LASTBULLET_NAME",
        "ImageName": "images/challenges/HB Kiwi/LastBullet.jpg",
        "Description": "UI_CHALLENGES_KIWI_47_LASTBULLET_DESC",
        "Rewards": {
            "MasteryXP": 2000
        },
        "Drops": ["FIREARMS_HERO_PISTOL_BLACKLILLYV3"],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARENT_NEWZEALAND",
        "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "3f5d9a9d-5a51-437a-a4c5-c2eae28a4eed"
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillItemCategory",
                                        "pistol"
                                    ]
                                },
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "easy", "assassination"],
        "InclusionData": {
            "ContractIds": ["c47ecffd-895a-4847-b847-62153ed56575"]
        }
    },
    {
        "Id": "cd77d3f6-bcdf-4dce-810f-4b0658910a7a",
        "Name": "UI_CHALLENGES_KIWI_EXPLOSION_NAME",
        "ImageName": "images/challenges/HB Kiwi/Explosion.jpg",
        "Description": "UI_CHALLENGES_KIWI_EXPLOSION_DESC",
        "Rewards": {
            "MasteryXP": 2000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARENT_NEWZEALAND",
        "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "hit",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "3f5d9a9d-5a51-437a-a4c5-c2eae28a4eed"
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillClass",
                                        "explosion"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "medium", "assassination"],
        "InclusionData": {
            "ContractIds": ["c47ecffd-895a-4847-b847-62153ed56575"]
        }
    },
    {
        "Id": "03e1656f-9ac8-4a2a-88d8-4c8d68b9c18a",
        "Name": "UI_CHALLENGES_KIWI_ELECTRICAL_NAME",
        "ImageName": "images/challenges/HB Kiwi/Electrical.jpg",
        "Description": "UI_CHALLENGES_KIWI_ELECTRICAL_DESC",
        "Rewards": {
            "MasteryXP": 2000
        },
        "Drops": ["FIREARMS_HERO_PISTOL_TASER"],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARENT_NEWZEALAND",
        "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "3f5d9a9d-5a51-437a-a4c5-c2eae28a4eed"
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillMethodStrict",
                                        "accident_electric"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "easy", "assassination"],
        "InclusionData": {
            "ContractIds": ["c47ecffd-895a-4847-b847-62153ed56575"]
        }
    },
    {
        "Id": "ce59ab74-4084-41d2-8256-fddc7164c45d",
        "Name": "UI_CHALLENGES_KIWI_47_ASSASINATION_FIBERWIRE_NAME",
        "ImageName": "images/challenges/HB Kiwi/FiberWire.jpg",
        "Description": "UI_CHALLENGES_KIWI_47_ASSASINATION_FIBERWIRE_DESC",
        "Rewards": {
            "MasteryXP": 2000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARENT_NEWZEALAND",
        "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": ["$Value.IsTarget", true]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillItemCategory",
                                        "fiberwire"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "normal", "assassination"],
        "InclusionData": {
            "ContractIds": ["c47ecffd-895a-4847-b847-62153ed56575"]
        },
    },
    {
        "Id": "722341b2-67c1-4ed3-a823-c70a6637946c",
        "Name": "UI_CHALLENGES_KIWI_CHEF_MARTINEZ_NAME",
        "ImageName": "images/challenges/HB Kiwi/DevilKitchen.jpg",
        "Description": "UI_CHALLENGES_KIWI_CHEF_MARTINEZ_DESC",
        "Rewards": {
            "MasteryXP": 4000
        },
        "Drops": [],
        "IsPlayable": true,
        "IsLocked": false,
        "HideProgression": false,
        "CategoryName": "UI_MENU_PAGE_PROFILE_CHALLENGES_CATEGORY_SIGNATUREKILL",
        "Icon": "challenge_category_assassination",
        "LocationId": "LOCATION_PARENT_NEWZEALAND",
        "ParentLocationId": "LOCATION_PARENT_NEWZEALAND",
        "Type": "contract",
        "DifficultyLevels": [],
        "OrderIndex": 10000,
        "XpModifier": {},
        "RuntimeType": "Hit",
        "Definition": {
            "Context": {},
            "Scope": "session",
            "States": {
                "Start": {
                    "Kill": {
                        "Condition": {
                            "$and": [
                                {
                                    "$eq": [
                                        "$Value.RepositoryId",
                                        "3f5d9a9d-5a51-437a-a4c5-c2eae28a4eed"
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.OutfitRepositoryId",
                                        "b3e5fbd9-3043-4828-9dd2-471b92f808ed"
                                    ]
                                },
                                {
                                    "$eq": [
                                        "$Value.KillItemRepositoryId",
                                        "1bbf0ed5-0515-4599-a4c9-454ce59cff44"
                                    ]
                                }
                            ]
                        },
                        "Transition": "Success"
                    }
                }
            }
        },
        "Tags": ["story", "hard", "assassination"],
        "InclusionData": {
            "ContractIds": ["c47ecffd-895a-4847-b847-62153ed56575"]
        }
    }
]


module.exports = function ElusivesChallenges(controller) {
    if (Math.abs(PEACOCKVER) < 6600) {
        log(LogLevel.ERROR, `[Elusive's WoA Challenges] This plugin requires PEACOCK v6.6.0! You're on v${PEACOCKVERSTRING}!`)
        return
    }

    controller.challengeService.registerGroup(featChallenges, "LOCATION_PARENT_PARIS", "h3")
    controller.challengeService.registerGroup(assassinationChallenges, "LOCATION_PARENT_PARIS", "h3")
    controller.challengeService.registerGroup(featChallenges, "LOCATION_PARENT_COASTALTOWN", "h3")
    controller.challengeService.registerGroup(assassinationChallenges, "LOCATION_PARENT_COASTALTOWN", "h3"),
    controller.challengeService.registerGroup(featChallenges, "LOCATION_PARENT_NEWZEALAND", "h3")
    controller.challengeService.registerGroup(assassinationChallenges, "LOCATION_PARENT_NEWZEALAND", "h3")

    /**
     * For feats
     */
    for (const challenge of featChallenges) {
        controller.challengeService.registerChallenge(
            challenge,
            "feats",
            challenge.ParentLocationId,
            "h3"
        )
    }

    /**
     * For assassinations
     */
    for (const challenge of assassinationChallenges) {
        controller.challengeService.registerChallenge(
            challenge,
            "assassination",
            challenge.ParentLocationId,
            "h3"
        )
    }

    


    log(LogLevel.INFO, "[WOA Expansion] Challenge for WOA Expansion is loaded... (Plugin Started)")
}
