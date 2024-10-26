const { log, LogLevel } = require("@peacockproject/core/loggingInterop")

const contracts = [
    {
        "Data": {
            "Objectives": [],
            "Bricks": [],
            "GameChangers": [
                "61a618c2-1cfc-46fa-846b-467de76042d6",
                "b48bb7f9-b630-48cb-a816-720ed7959319",
                "1f8f0b8b-1f65-4d6c-a2f4-fc8adffa394a",
                "9673f602-3b2a-4bd3-94b3-b3b311b7bc7e",
                "a77cf01e-ab02-4b1c-a4bd-a37fb8be1114",
                "008d2eb9-c1c8-44e0-a636-ccca63629f3c",
                "1efef5c0-7381-4e22-ac04-ffbd0822cc96",
                "f96e94b7-1c0e-49c9-9332-07346a955fd2",
                "95690829-7da4-4225-a087-08918cccf120"
            ]
        },
        "Metadata": {
            "IsLocked": false,
            "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
            "IsPublished": true,
            "TileImage": "images/locations/Location_northamerica_gartersnake/Tile.jpg",
            "Location": "LOCATION_NORTHAMERICA_GARTERSNAKE",
            "Title": "UI_CONTRACT_CREATE_CONTRACT_TITLE",
            "ScenePath": "assembly:/_pro/scenes/missions/skunk/scene_gartersnake.entity",
            "Description": "UI_CONTRACT_CREATE_CONTRACT_DESC",
            "Id": "26977adc-17b5-489d-a9b7-f276d5cfd7a6",
            "CreationTimestamp": "2018-04-30T13:48:25.473Z",
            "CodeName_Hint": "Create contract Suburbia GarterSnake",
            "Type": "creation",
            "Release": "2.0.x",
            "Entitlements": ["H2_LEGACY_EXPANSION"],
            "LastUpdate": "2021-06-07T12:55:56.9119668Z",
            "PublicId": "022933650047"
        },
        "UserData": {}
    },
    {
        "Data": {
            "Objectives": [],
            "Bricks": [],
            "GameChangers": [
                "61a618c2-1cfc-46fa-846b-467de76042d6",
                "b48bb7f9-b630-48cb-a816-720ed7959319",
                "1f8f0b8b-1f65-4d6c-a2f4-fc8adffa394a",
                "9673f602-3b2a-4bd3-94b3-b3b311b7bc7e",
                "a77cf01e-ab02-4b1c-a4bd-a37fb8be1114",
                "008d2eb9-c1c8-44e0-a636-ccca63629f3c",
                "1efef5c0-7381-4e22-ac04-ffbd0822cc96",
                "f96e94b7-1c0e-49c9-9332-07346a955fd2",
                "95690829-7da4-4225-a087-08918cccf120"
            ]
        },
        "Metadata": {
            "IsLocked": false,
            "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
            "IsPublished": true,
            "TileImage": "images/locations/LOCATION_MIAMI_COTTONMOUTH/tile.jpg",
            "Location": "LOCATION_MIAMI_COTTONMOUTH",
            "Title": "UI_CONTRACT_CREATE_CONTRACT_TITLE",
            "ScenePath": "assembly:/_pro/scenes/missions/miami/scene_cottonmouth.entity",
            "Description": "UI_CONTRACT_CREATE_CONTRACT_DESC",
            "Id": "66ea2e0f-17a7-4172-91b6-d96e2548ca1d",
            "CreationTimestamp": "2014-10-28T09:41:25.473Z",
            "CodeName_Hint": "Create contract Miami CottonMouth",
            "Type": "creation",
            "Release": "2.0.x",
            "Entitlements": ["H2_LEGACY_EXPANSION"],
            "LastUpdate": "2021-04-15T12:40:17.005166Z",
            "PublicId": "011861443447"
        },
        "UserData": {}
    },
    {
        "Data": {
            "Objectives": [],
            "Bricks": [],
            "GameChangers": [
                "61a618c2-1cfc-46fa-846b-467de76042d6",
                "b48bb7f9-b630-48cb-a816-720ed7959319",
                "1f8f0b8b-1f65-4d6c-a2f4-fc8adffa394a",
                "9673f602-3b2a-4bd3-94b3-b3b311b7bc7e",
                "a77cf01e-ab02-4b1c-a4bd-a37fb8be1114",
                "008d2eb9-c1c8-44e0-a636-ccca63629f3c",
                "1efef5c0-7381-4e22-ac04-ffbd0822cc96",
                "f96e94b7-1c0e-49c9-9332-07346a955fd2",
                "95690829-7da4-4225-a087-08918cccf120"
            ]
        },
        "Metadata": {
            "IsLocked": false,
            "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
            "IsPublished": true,
            "TileImage": "images/locations/LOCATION_MUMBAI_KINGCOBRA/tile.jpg",
            "Location": "LOCATION_MUMBAI_KINGCOBRA",
            "Title": "UI_CONTRACT_CREATE_CONTRACT_TITLE",
            "ScenePath": "assembly:/_pro/scenes/missions/mumbai/scene_kingcobra.entity",
            "Description": "UI_CONTRACT_CREATE_CONTRACT_DESC",
            "Id": "e00ea75e-2596-5d78-b0fd-12e583db5bde",
            "CreationTimestamp": "2017-02-23T13:48:25.473Z",
            "CodeName_Hint": "Create contract Mumbai KingCobra",
            "Type": "creation",
            "Release": "2.0.x",
            "Entitlements": ["H2_LEGACY_EXPANSION"],
            "LastUpdate": "2021-06-01T12:15:38.4787513Z",
            "PublicId": "013090926647"
        },
        "UserData": {}
    },
    {
        "Data": {
            "Objectives": [],
            "Bricks": [],
            "GameChangers": [
                "61a618c2-1cfc-46fa-846b-467de76042d6",
                "b48bb7f9-b630-48cb-a816-720ed7959319",
                "1f8f0b8b-1f65-4d6c-a2f4-fc8adffa394a",
                "9673f602-3b2a-4bd3-94b3-b3b311b7bc7e",
                "a77cf01e-ab02-4b1c-a4bd-a37fb8be1114",
                "008d2eb9-c1c8-44e0-a636-ccca63629f3c",
                "1efef5c0-7381-4e22-ac04-ffbd0822cc96",
                "f96e94b7-1c0e-49c9-9332-07346a955fd2",
                "95690829-7da4-4225-a087-08918cccf120"
            ]
        },
        "Metadata": {
            "IsLocked": false,
            "CreatorUserId": "fadb923c-e6bb-4283-a537-eb4d1150262e",
            "IsPublished": true,
            "TileImage": "images/locations/LOCATION_COLOMBIA_ANACONDA/tile.jpg",
            "Location": "LOCATION_COLOMBIA_ANACONDA",
            "Title": "UI_CONTRACT_CREATE_CONTRACT_TITLE",
            "ScenePath": "assembly:/_pro/scenes/missions/colombia/scene_anaconda.entity",
            "Description": "UI_CONTRACT_CREATE_CONTRACT_DESC",
            "Id": "df1b1e23-9d50-43a4-77c8-6d917a4f1899",
            "CreationTimestamp": "2014-10-28T09:41:25.473Z",
            "CodeName_Hint": "Create contract Colombia Anaconda",
            "Type": "creation",
            "Release": "2.0.x",
            "Entitlements": ["H2_LEGACY_EXPANSION"],
            "LastUpdate": "2021-06-01T12:15:38.4549466Z",
            "PublicId": "012802063247"
        },
        "UserData": {}
    }      
]

module.exports = function MissionPlugin(controller) {
    contracts.forEach((contract) => {
        controller.addMission(contract)
        controller.missionsInLocations[contract.Metadata.Location].push(contract.Metadata.Id)
    })

    log(LogLevel.INFO, "[FinalCreateContract] Plugin is loaded and contracts should be on mission screen!")
}
