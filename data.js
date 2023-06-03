var APP_DATA = {
  "scenes": [
    {
      "id": "0-gegenber",
      "name": "Gegenüber",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.16807381308656488,
        "pitch": -0.2899425327628862,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.08077867361902769,
          "pitch": 0.09913798778567795,
          "rotation": 0,
          "target": "1-hausecke"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hausecke",
      "name": "Hausecke",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.07575150750041715,
        "pitch": 0.03236278650133961,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -2.888464402974254,
          "pitch": 0.017588802877464005,
          "rotation": 0,
          "target": "0-gegenber"
        },
        {
          "yaw": 0.6977481886317722,
          "pitch": 0.03226391556907515,
          "rotation": 0,
          "target": "2-zugang"
        },
        {
          "yaw": -0.5448020863361691,
          "pitch": 0.032145413886405905,
          "rotation": 0,
          "target": "3-garageneinfahrt"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-zugang",
      "name": "Zugang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.0723113262261172,
        "pitch": -0.015648479228243417,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -3.0422224175264017,
          "pitch": 0.04450392489243704,
          "rotation": 0,
          "target": "4-eg-gang"
        },
        {
          "yaw": 1.606554030206616,
          "pitch": -0.007943999483302377,
          "rotation": 0,
          "target": "1-hausecke"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-garageneinfahrt",
      "name": "Garageneinfahrt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.05008336114417489,
        "pitch": 0.01940922659965949,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.144066675229773,
          "pitch": 0.07923189663037356,
          "rotation": 0,
          "target": "4-eg-gang"
        },
        {
          "yaw": 2.382822494218151,
          "pitch": 0.008057039238984487,
          "rotation": 0,
          "target": "0-gegenber"
        },
        {
          "yaw": 1.9725925798634272,
          "pitch": 0.024455512362285603,
          "rotation": 0,
          "target": "1-hausecke"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-eg-gang",
      "name": "EG, Gang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.7922277354496092,
        "pitch": 0.009704613299826192,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.20088357377716548,
          "pitch": 0.06080094767460764,
          "rotation": 0,
          "target": "5-eg-stiegenantritt"
        },
        {
          "yaw": 1.4308851734779466,
          "pitch": 0.08024612718549662,
          "rotation": 0,
          "target": "6-eg-stiegenaustritt"
        },
        {
          "yaw": -2.6886691867073527,
          "pitch": 0.0471798247799633,
          "rotation": 0,
          "target": "3-garageneinfahrt"
        },
        {
          "yaw": -3.0381275734987057,
          "pitch": 0.04247014030884877,
          "rotation": 0,
          "target": "2-zugang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-eg-stiegenantritt",
      "name": "EG, Stiegenantritt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.7175226192152699,
        "pitch": 0.02481856568416063,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.6353496048581357,
          "pitch": 0.09288843591975748,
          "rotation": 0,
          "target": "4-eg-gang"
        },
        {
          "yaw": -0.16018196455976863,
          "pitch": -0.2889817070872578,
          "rotation": 0,
          "target": "21-1og-stiegenaustritt"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-eg-stiegenaustritt",
      "name": "EG, Stiegenaustritt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.6761253754464978,
        "pitch": -0.03881845319932076,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.5877818892011852,
          "pitch": 0.04288074831724131,
          "rotation": 0,
          "target": "4-eg-gang"
        },
        {
          "yaw": -0.009053962438873242,
          "pitch": 0.41783704437974656,
          "rotation": 0,
          "target": "7-eg-ug-stiegenpodest"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-eg-ug-stiegenpodest",
      "name": "EG-UG, Stiegenpodest",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.43709115180380564,
        "pitch": 0.0032348710999450248,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.440381143495129,
          "pitch": -0.14683733192920556,
          "rotation": 0,
          "target": "6-eg-stiegenaustritt"
        },
        {
          "yaw": 0.039833524646534,
          "pitch": 0.42996165972538414,
          "rotation": 0,
          "target": "8-ug-stiegenantritt"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-ug-stiegenantritt",
      "name": "UG, Stiegenantritt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.7284852530063262,
        "pitch": 0.01617435549971269,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.6204646307426493,
          "pitch": -0.31009866235053174,
          "rotation": 0,
          "target": "7-eg-ug-stiegenpodest"
        },
        {
          "yaw": 1.204936894041559,
          "pitch": 0.026285923786618426,
          "rotation": 0,
          "target": "10-ug-kiwa-r"
        },
        {
          "yaw": 0.38409817012531633,
          "pitch": 0.016186299571018026,
          "rotation": 0,
          "target": "11-ug-fahrrad-r-1"
        },
        {
          "yaw": -0.03018666758776334,
          "pitch": 0.012805494584803512,
          "rotation": 0,
          "target": "13-ug-keller-1"
        },
        {
          "yaw": -0.2037110119364023,
          "pitch": 0.017833307125481923,
          "rotation": 0,
          "target": "9-ug-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-ug-gang",
      "name": "UG, Gang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.5987238173145677,
        "pitch": 0.022644097699595633,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.4037414334912803,
          "pitch": 0.031361837230749146,
          "rotation": 0,
          "target": "8-ug-stiegenantritt"
        },
        {
          "yaw": -1.7251563306347109,
          "pitch": 0.037332421357744394,
          "rotation": 0,
          "target": "10-ug-kiwa-r"
        },
        {
          "yaw": -1.907411915576109,
          "pitch": 0.04718564261730762,
          "rotation": 0,
          "target": "11-ug-fahrrad-r-1"
        },
        {
          "yaw": 1.7109847444963053,
          "pitch": 0.04937286266920715,
          "rotation": 0,
          "target": "13-ug-keller-1"
        },
        {
          "yaw": 0.10884646700094436,
          "pitch": 0.03152147837904451,
          "rotation": 0,
          "target": "19-ug-e-raum-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-ug-kiwa-r",
      "name": "UG, KIWA-R",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.04998024772938159,
        "pitch": 0.01337190257333809,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -2.7769039945951874,
          "pitch": 0.10329584233293332,
          "rotation": 0,
          "target": "8-ug-stiegenantritt"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-ug-fahrrad-r-1",
      "name": "UG, Fahrrad-R (1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.9431373978651365,
        "pitch": -0.0024001379979647908,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -3.103658448701024,
          "pitch": -0.013519482239672698,
          "rotation": 0,
          "target": "12-ug-fahrrad-r-2"
        },
        {
          "yaw": -1.0801618600400538,
          "pitch": 0.10873098175622964,
          "rotation": 0,
          "target": "8-ug-stiegenantritt"
        },
        {
          "yaw": 1.03560412090836,
          "pitch": 0.06662479063929361,
          "rotation": 0,
          "target": "9-ug-gang"
        },
        {
          "yaw": 1.3715948460607663,
          "pitch": 0.046846742252604656,
          "rotation": 0,
          "target": "13-ug-keller-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-ug-fahrrad-r-2",
      "name": "UG, Fahrrad-R (2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4188750603978981,
          "pitch": 0.039793007921751666,
          "rotation": 0,
          "target": "11-ug-fahrrad-r-1"
        },
        {
          "yaw": -1.6464117181830638,
          "pitch": 0.044559833404321125,
          "rotation": 0,
          "target": "9-ug-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-ug-keller-1",
      "name": "UG, Keller (1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.308469626442836,
        "pitch": 0.009048839676847109,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 3.064431026255125,
          "pitch": 0.011776986734465922,
          "rotation": 0,
          "target": "9-ug-gang"
        },
        {
          "yaw": -1.4836869320178927,
          "pitch": -0.002165929532615962,
          "rotation": 0,
          "target": "14-ug-keller-2"
        },
        {
          "yaw": -0.056827794596488346,
          "pitch": 0.009672853859232333,
          "rotation": 0,
          "target": "15-ug-keller-3"
        },
        {
          "yaw": 1.6087158284550211,
          "pitch": 0.01853728564849888,
          "rotation": 0,
          "target": "18-ug-wasserzhler"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-ug-keller-2",
      "name": "UG, Keller (2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 1.2777935073772184,
        "pitch": 0.04357547678127993,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.4791835911437214,
          "pitch": 0.11269003596601479,
          "rotation": 0,
          "target": "13-ug-keller-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-ug-keller-3",
      "name": "UG, Keller (3)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.8354815245416276,
        "pitch": -0.012939484399771217,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.62487293174323,
          "pitch": 0.05441327166748344,
          "rotation": 0,
          "target": "13-ug-keller-1"
        },
        {
          "yaw": -0.0030827300868629948,
          "pitch": 0.03180564280491183,
          "rotation": 0,
          "target": "16-ug-fww-r-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-ug-fww-r-1",
      "name": "UG, FWW-R (1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.8591209004986347,
        "pitch": 0.0032379456271822704,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -2.8858712015408994,
          "pitch": 0.0075229880394793724,
          "rotation": 0,
          "target": "15-ug-keller-3"
        },
        {
          "yaw": -0.8861869453360978,
          "pitch": -0.006654547587379156,
          "rotation": 0,
          "target": "17-ug-fww-r-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-ug-fww-r-2",
      "name": "UG, FWW-R (2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.7239131170463082,
        "pitch": 0.010279433063640653,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -2.6927672843017927,
          "pitch": 0.0014719147238437813,
          "rotation": 0,
          "target": "16-ug-fww-r-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-ug-wasserzhler",
      "name": "UG, Wasserzähler",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.2360529662047846,
        "pitch": 0.0029020472484155846,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.21747360174940944,
          "pitch": 0.011398526663775499,
          "rotation": 0,
          "target": "13-ug-keller-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-ug-e-raum-1",
      "name": "UG, E-Raum (1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.6607685364476872,
        "pitch": 0.0036486346888189303,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.6457096061314598,
          "pitch": -0.011410454673431047,
          "rotation": 0,
          "target": "20-ug-e-raum-2"
        },
        {
          "yaw": -3.046910044105969,
          "pitch": -0.0007019619828092516,
          "rotation": 0,
          "target": "9-ug-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-ug-e-raum-2",
      "name": "UG, E-Raum (2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.2646807703907257,
        "pitch": 0.00047986931631349705,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.8393915678237658,
          "pitch": -0.0027576443903765124,
          "rotation": 0,
          "target": "19-ug-e-raum-1"
        },
        {
          "yaw": 1.2025173308602817,
          "pitch": -0.013079195526993104,
          "rotation": 0,
          "target": "9-ug-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-1og-stiegenaustritt",
      "name": "1OG, Stiegenaustritt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.639701112796164,
        "pitch": -0.0032348710999485775,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.3999339594274147,
          "pitch": 0.3858472043069767,
          "rotation": 0,
          "target": "5-eg-stiegenantritt"
        },
        {
          "yaw": -0.07158299083938147,
          "pitch": 0.024691610625431792,
          "rotation": 0,
          "target": "22-1og-top4-zugang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-1og-top4-zugang",
      "name": "1OG, Top4, Zugang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.084224211052115,
        "pitch": 0.00967319013418333,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 2.039069277931226,
          "pitch": 0.009663589231067249,
          "rotation": 0,
          "target": "28-2og-stiegenaustritt"
        },
        {
          "yaw": 3.0450751426766303,
          "pitch": 0.007698165127816736,
          "rotation": 0,
          "target": "21-1og-stiegenaustritt"
        },
        {
          "yaw": 0.16575004636912816,
          "pitch": 0.12151456761828427,
          "rotation": 0,
          "target": "23-1og-top4-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-1og-top4-gang",
      "name": "1OG, Top4, Gang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.3445138108068537,
        "pitch": -0.011142333788711767,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.9017056784135242,
          "pitch": 0.007096353941580702,
          "rotation": 0,
          "target": "24-1og-top4-kiz"
        },
        {
          "yaw": -2.4272720710620703,
          "pitch": 0.003834388981115211,
          "rotation": 0,
          "target": "25-1og-top4-ez"
        },
        {
          "yaw": 2.162265503765175,
          "pitch": 0.005332167197286353,
          "rotation": 0,
          "target": "22-1og-top4-zugang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-1og-top4-kiz",
      "name": "1OG, Top4, KiZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.9789020587272361,
        "pitch": 0.01293948439977477,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.9964313512347758,
          "pitch": 0.004820858004752182,
          "rotation": 0,
          "target": "26-1og-top4-bad"
        },
        {
          "yaw": -1.7218944873824977,
          "pitch": -0.0043339552365608824,
          "rotation": 0,
          "target": "27-1og-top4-wok"
        },
        {
          "yaw": 3.0854419079502176,
          "pitch": 0.012899228852063516,
          "rotation": 0,
          "target": "22-1og-top4-zugang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-1og-top4-ez",
      "name": "1OG, Top4, EZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.8582466886980775,
        "pitch": -0.0032348016751893027,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.830048866825205,
          "pitch": 0.026748844014496953,
          "rotation": 0,
          "target": "27-1og-top4-wok"
        },
        {
          "yaw": -2.7709549610461988,
          "pitch": 0.06071269399049761,
          "rotation": 0,
          "target": "26-1og-top4-bad"
        },
        {
          "yaw": 2.2143419030743106,
          "pitch": 0.0686556081984655,
          "rotation": 0,
          "target": "23-1og-top4-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-1og-top4-bad",
      "name": "1OG, Top4, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.1220566978343154,
        "pitch": 0.03075842323111644,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.1395391790214973,
          "pitch": -0.010722274271033783,
          "rotation": 0,
          "target": "27-1og-top4-wok"
        },
        {
          "yaw": 0.39183365623567923,
          "pitch": -0.022816049627039092,
          "rotation": 0,
          "target": "25-1og-top4-ez"
        },
        {
          "yaw": 1.1870485054899511,
          "pitch": -0.04866190449235752,
          "rotation": 0,
          "target": "24-1og-top4-kiz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-1og-top4-wok",
      "name": "1OG, Top4, WoKü",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.555491049769472,
        "pitch": 0.00882237572712441,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.06269485748466508,
          "pitch": -0.01062729440606347,
          "rotation": 0,
          "target": "23-1og-top4-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-2og-stiegenaustritt",
      "name": "2OG, Stiegenaustritt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.093485469731105,
        "pitch": -0.002508484008826528,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.5246867673112678,
          "pitch": 0.41041162433467626,
          "rotation": 0,
          "target": "21-1og-stiegenaustritt"
        },
        {
          "yaw": -3.0151576069590895,
          "pitch": 0.005311592836431345,
          "rotation": 0,
          "target": "29-2og-top8-zugang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-2og-top8-zugang",
      "name": "2OG, Top8, Zugang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.8832883692701685,
        "pitch": 2.2240268116036077e-7,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.10087403310106424,
          "pitch": -0.01602125462486015,
          "rotation": 0,
          "target": "28-2og-stiegenaustritt"
        },
        {
          "yaw": -1.2234697768136087,
          "pitch": -0.02129420705599827,
          "rotation": 0,
          "target": "35-2og-stiegenantritt"
        },
        {
          "yaw": 3.077826146216946,
          "pitch": -0.0029072465470321163,
          "rotation": 0,
          "target": "30-2og-top8-gang-kiz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-2og-top8-gang-kiz",
      "name": "2OG, Top8, Gang, KiZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.9561363895607862,
        "pitch": 0.0064697421998847204,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.07496732301840936,
          "pitch": 0.011303793824682273,
          "rotation": 0,
          "target": "29-2og-top8-zugang"
        },
        {
          "yaw": 1.2795089875553014,
          "pitch": 0.013274681512800868,
          "rotation": 0,
          "target": "32-2og-top8-gang-bad"
        },
        {
          "yaw": 1.5414175034010702,
          "pitch": 0.011670215901487424,
          "rotation": 0,
          "target": "33-2og-top8-wok"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-2og-top8-gang-ez",
      "name": "2OG, Top8, Gang, EZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.845645519555953,
        "pitch": 0.006468849059622528,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.8360453532351677,
          "pitch": 0.0029704673094457235,
          "rotation": 0,
          "target": "29-2og-top8-zugang"
        },
        {
          "yaw": 0.5035066592051454,
          "pitch": 0.010380279890112476,
          "rotation": 0,
          "target": "32-2og-top8-gang-bad"
        },
        {
          "yaw": 1.4597106805790725,
          "pitch": 0.02340261969662194,
          "rotation": 0,
          "target": "33-2og-top8-wok"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-2og-top8-gang-bad",
      "name": "2OG, Top8, Gang, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.0022765164156233197,
        "pitch": -0.0032348710999450248,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.9450793242426627,
          "pitch": -0.022466262817538052,
          "rotation": 0,
          "target": "30-2og-top8-gang-kiz"
        },
        {
          "yaw": -2.760958589948574,
          "pitch": -0.024067585719178552,
          "rotation": 0,
          "target": "31-2og-top8-gang-ez"
        },
        {
          "yaw": 2.0375414465279738,
          "pitch": -0.020424697187971574,
          "rotation": 0,
          "target": "33-2og-top8-wok"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-2og-top8-wok",
      "name": "2OG, Top8, WoKü",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.783542636217728,
        "pitch": -0.004112033583556496,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 2.6772843589181043,
          "pitch": 0.012573503292578891,
          "rotation": 0,
          "target": "34-2og-top8-wok-balkon"
        },
        {
          "yaw": -0.20394237128145853,
          "pitch": 0.037496569901286136,
          "rotation": 0,
          "target": "31-2og-top8-gang-ez"
        },
        {
          "yaw": 0.08951727919216168,
          "pitch": 0.03336255568925495,
          "rotation": 0,
          "target": "29-2og-top8-zugang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-2og-top8-wok-balkon",
      "name": "2OG, Top8, Wokü-Balkon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.4871745129479912,
        "pitch": -0.0032348710999485775,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 3.1348833713188107,
          "pitch": -0.006848878270700354,
          "rotation": 0,
          "target": "33-2og-top8-wok"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-2og-stiegenantritt",
      "name": "2OG, Stiegenantritt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.7466973843314832,
        "pitch": 0.00970461329982264,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.006038604867239172,
          "pitch": -0.349828835376119,
          "rotation": 0,
          "target": "36-3og-stiegenaustritt"
        },
        {
          "yaw": 1.7424169902875155,
          "pitch": -0.03155342183231724,
          "rotation": 0,
          "target": "29-2og-top8-zugang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-3og-stiegenaustritt",
      "name": "3OG, Stiegenaustritt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.8946709513483881,
        "pitch": 0.0032348710999450248,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.5620051697826014,
          "pitch": 0.2929470403173404,
          "rotation": 0,
          "target": "35-2og-stiegenantritt"
        },
        {
          "yaw": 0.10101897033014318,
          "pitch": 0.0022684447453613643,
          "rotation": 0,
          "target": "37-3og-top12-zugang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-3og-top12-zugang",
      "name": "3OG, Top12, Zugang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.6078298829771533,
        "pitch": 0.012939484399772994,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.2161406261676984,
          "pitch": -0.011006068974843686,
          "rotation": 0,
          "target": "41-3og-stiegenantritt"
        },
        {
          "yaw": -0.025318249184945074,
          "pitch": -0.011200258366033111,
          "rotation": 0,
          "target": "36-3og-stiegenaustritt"
        },
        {
          "yaw": 2.854176177416061,
          "pitch": -0.02661711912841369,
          "rotation": 0,
          "target": "38-3og-top12-gang-ez"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-3og-top12-gang-ez",
      "name": "3OG, Top12, Gang, EZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.878042099317078,
        "pitch": -0.004479052292222008,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 2.938216302143144,
          "pitch": -0.008229437525379524,
          "rotation": 0,
          "target": "39-3og-top12-ez-balkon"
        },
        {
          "yaw": 1.4405581569496952,
          "pitch": 0.006202223540224594,
          "rotation": 0,
          "target": "40-3og-top12-wok"
        },
        {
          "yaw": -0.8455225407373543,
          "pitch": 0.003334872752343898,
          "rotation": 0,
          "target": "37-3og-top12-zugang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-3og-top12-ez-balkon",
      "name": "3OG, Top12, EZ-Balkon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.5486476856380254,
        "pitch": -0.001990689907675147,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.13484923122363668,
          "pitch": 0.007520114954072454,
          "rotation": 0,
          "target": "38-3og-top12-gang-ez"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-3og-top12-wok",
      "name": "3OG, Top12, WoKü",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.55155290359027,
        "pitch": -0.0015033768729466601,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.15684489044858374,
          "pitch": -0.01115686282460615,
          "rotation": 0,
          "target": "38-3og-top12-gang-ez"
        },
        {
          "yaw": 0.1199124926006494,
          "pitch": -0.007476446974365558,
          "rotation": 0,
          "target": "37-3og-top12-zugang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-3og-stiegenantritt",
      "name": "3OG, Stiegenantritt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.2782004121642387,
        "pitch": 0.02235551170243255,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.3286926410832063,
          "pitch": 0.006437920885066006,
          "rotation": 0,
          "target": "37-3og-top12-zugang"
        },
        {
          "yaw": -3.078247696572454,
          "pitch": -0.37059044717561207,
          "rotation": 0,
          "target": "42-4og-stiegenaustritt"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-4og-stiegenaustritt",
      "name": "4OG, Stiegenaustritt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.2200367591569616,
        "pitch": -0.0014829447983366606,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.650896005790056,
          "pitch": 0.3000729636190478,
          "rotation": 0,
          "target": "41-3og-stiegenantritt"
        },
        {
          "yaw": -3.0898685366897194,
          "pitch": 0.004393014988059107,
          "rotation": 0,
          "target": "43-4og-top16-zugang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-4og-top16-zugang",
      "name": "4OG, Top16, Zugang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.7211817102907148,
        "pitch": 0.00610365940407398,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.1763149964609987,
          "pitch": -0.024945476750946938,
          "rotation": 0,
          "target": "47-4og-stiegenantritt"
        },
        {
          "yaw": 0.025887920752211357,
          "pitch": -0.014856205531195599,
          "rotation": 0,
          "target": "42-4og-stiegenaustritt"
        },
        {
          "yaw": -3.11945642142663,
          "pitch": 0.0049294586461723355,
          "rotation": 0,
          "target": "44-4og-top16-gang-kiz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-4og-top16-gang-kiz",
      "name": "4OG, Top16, Gang, KiZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.8886013677428934,
        "pitch": 0.013199485314977721,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.6173342942600515,
          "pitch": 0.021084703334238952,
          "rotation": 0,
          "target": "46-4og-top16-wok"
        },
        {
          "yaw": 1.8131655227808556,
          "pitch": 0.017020335048608004,
          "rotation": 0,
          "target": "45-4og-top16-gang-ez"
        },
        {
          "yaw": 0.11156373759178706,
          "pitch": 0.04162824320015446,
          "rotation": 0,
          "target": "43-4og-top16-zugang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-4og-top16-gang-ez",
      "name": "4OG, Top16, Gang, EZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.329140828375886,
        "pitch": -0.007282762964337053,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.5337953591731566,
          "pitch": 0.026517230586234675,
          "rotation": 0,
          "target": "46-4og-top16-wok"
        },
        {
          "yaw": -1.7472730792205233,
          "pitch": 0.024084885066525175,
          "rotation": 0,
          "target": "44-4og-top16-gang-kiz"
        },
        {
          "yaw": -1.094138587753335,
          "pitch": 0.033780137124235665,
          "rotation": 0,
          "target": "43-4og-top16-zugang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-4og-top16-wok",
      "name": "4OG, Top16, WoKü",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.659401865767947,
        "pitch": 0.00298667282549836,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.07486931531345142,
          "pitch": 0.0018426411496506034,
          "rotation": 0,
          "target": "43-4og-top16-zugang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-4og-stiegenantritt",
      "name": "4OG, Stiegenantritt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.7717390649035778,
        "pitch": 0.009704613299826192,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.760744083038981,
          "pitch": -0.02774966496342479,
          "rotation": 0,
          "target": "43-4og-top16-zugang"
        },
        {
          "yaw": 0.03333770912967715,
          "pitch": -0.3781413320689406,
          "rotation": 0,
          "target": "48-5og-stiegenaustritt"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-5og-stiegenaustritt",
      "name": "5OG, Stiegenaustritt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.8969471415012968,
        "pitch": 0.0032348710999450248,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.5502083534147895,
          "pitch": 0.3123556110380612,
          "rotation": 0,
          "target": "47-4og-stiegenantritt"
        },
        {
          "yaw": 0.03931631730178076,
          "pitch": 0.009506609220622408,
          "rotation": 0,
          "target": "49-5og-top20-zugang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-5og-top20-zugang",
      "name": "5OG, Top20, Zugang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.6829549246934299,
        "pitch": -0.006469742199886497,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.2709167085316988,
          "pitch": -0.03044409963527528,
          "rotation": 0,
          "target": "52-5og-stiegenantritt"
        },
        {
          "yaw": -0.037426362566204574,
          "pitch": -0.02020606977325201,
          "rotation": 0,
          "target": "48-5og-stiegenaustritt"
        },
        {
          "yaw": 3.093142049403342,
          "pitch": 0.02400365260434789,
          "rotation": 0,
          "target": "50-5og-top20-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "50-5og-top20-gang",
      "name": "5OG, Top20, Gang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.8081633275538902,
        "pitch": 1.7763568394002505e-15,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.5980944190678645,
          "pitch": -0.010601188824548302,
          "rotation": 0,
          "target": "51-5og-top20-wok"
        },
        {
          "yaw": 0.06918701778010927,
          "pitch": -0.00556636477700323,
          "rotation": 0,
          "target": "49-5og-top20-zugang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-5og-top20-wok",
      "name": "5OG, Top20, WoKü",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.6480245200701997,
        "pitch": 0.005989423228225377,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.033418184002282914,
          "pitch": 0.007812705656963459,
          "rotation": 0,
          "target": "50-5og-top20-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-5og-stiegenantritt",
      "name": "5OG, Stiegenantritt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.4163419931214847,
        "pitch": -0.011756792287524576,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.4408779118809534,
          "pitch": -0.017153097195343747,
          "rotation": 0,
          "target": "49-5og-top20-zugang"
        },
        {
          "yaw": 3.1122827747380715,
          "pitch": -0.40242315535715534,
          "rotation": 0,
          "target": "53-1dg-stiegenaustritt"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "53-1dg-stiegenaustritt",
      "name": "1DG, Stiegenaustritt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.2521041867777427,
        "pitch": -0.016416941056977663,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.6776093204064715,
          "pitch": 0.3032813209084857,
          "rotation": 0,
          "target": "52-5og-stiegenantritt"
        },
        {
          "yaw": -3.110252056219993,
          "pitch": -0.03463904308668653,
          "rotation": 0,
          "target": "58-1dg-gang"
        },
        {
          "yaw": 0.05002009795499163,
          "pitch": 0.005718851445431383,
          "rotation": 0,
          "target": "54-1dg-top22-wok"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "54-1dg-top22-wok",
      "name": "1DG, Top22, WoKü",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.9033892079080736,
        "pitch": 0.02831015244227686,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.506868964364486,
          "pitch": 0.020210701786435692,
          "rotation": 0,
          "target": "53-1dg-stiegenaustritt"
        },
        {
          "yaw": -0.31558993025788595,
          "pitch": 0.007893723819810461,
          "rotation": 0,
          "target": "55-1dg-top22-balkon"
        },
        {
          "yaw": -2.9677289948163033,
          "pitch": 0.06314199793386521,
          "rotation": 0,
          "target": "56-1dg-top22-sz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "55-1dg-top22-balkon",
      "name": "1DG, Top22, Balkon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 1.1938258604072978,
        "pitch": 0.012273114070076474,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -3.05973772839938,
          "pitch": 0.0038853357974844016,
          "rotation": 0,
          "target": "54-1dg-top22-wok"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "56-1dg-top22-sz",
      "name": "1DG, Top22, SZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 3.0440100741423812,
        "pitch": 0.00836692069788647,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 3.0440100741423812,
          "pitch": 0.00836692069788647,
          "rotation": 0,
          "target": "57-1dg-top22-terrasse"
        },
        {
          "yaw": 0.030914622330698194,
          "pitch": 0.018609941643797256,
          "rotation": 0,
          "target": "54-1dg-top22-wok"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "57-1dg-top22-terrasse",
      "name": "1DG, Top22, Terrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.1346390558713004,
        "pitch": 0.006024084809173047,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.29512836092488826,
          "pitch": -0.0065887995720199655,
          "rotation": 0,
          "target": "56-1dg-top22-sz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "58-1dg-gang",
      "name": "1DG, Gang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.185298035239075,
        "pitch": 0.024902507310340383,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.613401042023625,
          "pitch": -0.0012182167082102069,
          "rotation": 0,
          "target": "53-1dg-stiegenaustritt"
        },
        {
          "yaw": -1.4322836594483803,
          "pitch": -0.0010570307378579002,
          "rotation": 0,
          "target": "54-1dg-top22-wok"
        },
        {
          "yaw": 0.24710734631118747,
          "pitch": 0.01539273628551463,
          "rotation": 0,
          "target": "59-1dg-top23-vr"
        },
        {
          "yaw": -3.0522930641446706,
          "pitch": -0.0065264830327116385,
          "rotation": 0,
          "target": "63-1dg-stiegenantritt"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "59-1dg-top23-vr",
      "name": "1DG, Top23, VR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.296593407677868,
        "pitch": 0.0006736528496951166,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 2.976446029087427,
          "pitch": -0.0036458494911943973,
          "rotation": 0,
          "target": "60-1dg-top23-ez"
        },
        {
          "yaw": -1.5066584078417957,
          "pitch": 0.011074837708058283,
          "rotation": 0,
          "target": "61-1dg-top23-gang"
        },
        {
          "yaw": 0.034562922569072896,
          "pitch": 0.04584230689362023,
          "rotation": 0,
          "target": "58-1dg-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "60-1dg-top23-ez",
      "name": "1DG, Top23, EZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.97757237833442,
        "pitch": -0.008118953652338945,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.9504215484578502,
          "pitch": 0.05520234706624194,
          "rotation": 0,
          "target": "59-1dg-top23-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "61-1dg-top23-gang",
      "name": "1DG, Top23, Gang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.033943800479502,
        "pitch": -0.016753877079681345,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.2006273481298955,
          "pitch": -0.0517834277815048,
          "rotation": 0,
          "target": "62-1dg-top23-wok"
        },
        {
          "yaw": 1.412568661869388,
          "pitch": 0.017708826824442525,
          "rotation": 0,
          "target": "59-1dg-top23-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "62-1dg-top23-wok",
      "name": "1DG, Top23, WoKü",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.9709087328076222,
        "pitch": 0.008596220694318646,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.5616708612976904,
          "pitch": 0.010218967072129104,
          "rotation": 0,
          "target": "61-1dg-top23-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "63-1dg-stiegenantritt",
      "name": "1DG, Stiegenantritt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.7011670560185941,
        "pitch": 0.01617435549971269,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.6846637903387185,
          "pitch": 0.0027034823478437886,
          "rotation": 0,
          "target": "58-1dg-gang"
        },
        {
          "yaw": 0.004879233243981318,
          "pitch": -0.2957576643792734,
          "rotation": 0,
          "target": "67-2dg-stiegenaustritt"
        },
        {
          "yaw": -3.130348884258277,
          "pitch": 0.01163002913896527,
          "rotation": 0,
          "target": "64-1dg-top24-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "64-1dg-top24-vr",
      "name": "1DG, Top24, VR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.164394778153664,
        "pitch": -0.002200984437893183,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -2.961751284536243,
          "pitch": -0.01205928214510621,
          "rotation": 0,
          "target": "65-1dg-top24-wok"
        },
        {
          "yaw": -1.2213044145125913,
          "pitch": -0.010137941745105294,
          "rotation": 0,
          "target": "66-1dg-top24-sz"
        },
        {
          "yaw": 0.4499602561560607,
          "pitch": 0.02446518991387947,
          "rotation": 0,
          "target": "63-1dg-stiegenantritt"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "65-1dg-top24-wok",
      "name": "1DG, Top24, WoKü",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.0520734876193387,
        "pitch": 0.0024704608721517474,
        "fov": 1.2324346117165306
      },
      "linkHotspots": [
        {
          "yaw": 0.3461413465131997,
          "pitch": -0.002139398826233929,
          "rotation": 0,
          "target": "64-1dg-top24-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "66-1dg-top24-sz",
      "name": "1DG, Top24, SZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.9529555086521313,
          "pitch": 0.07525697544620158,
          "rotation": 0,
          "target": "64-1dg-top24-vr"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "67-2dg-stiegenaustritt",
      "name": "2DG, Stiegenaustritt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.2848387390144076,
        "pitch": 0.0015458874744140871,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.5971811952568622,
          "pitch": 0.3320027559193761,
          "rotation": 0,
          "target": "63-1dg-stiegenantritt"
        },
        {
          "yaw": -2.9350812685777896,
          "pitch": -0.004763401080822405,
          "rotation": 0,
          "target": "68-2dg-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "68-2dg-gang",
      "name": "2DG, Gang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.205834610147372,
        "pitch": 0.00580694134811921,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 3.0535880227108994,
          "pitch": -0.016084734087829844,
          "rotation": 0,
          "target": "69-2dg-top25-vr-wok"
        },
        {
          "yaw": 1.438905505164115,
          "pitch": -0.022921707528073654,
          "rotation": 0,
          "target": "67-2dg-stiegenaustritt"
        },
        {
          "yaw": -1.4302524719857423,
          "pitch": 0.026985254414146453,
          "rotation": 0,
          "target": "74-2dg-top26-vr-kche"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "69-2dg-top25-vr-wok",
      "name": "2DG, Top25, VR, WoKü",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.3350015402507633,
        "pitch": 0.0008750442723908236,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.47258163223968,
          "pitch": 0.0030190229589308615,
          "rotation": 0,
          "target": "70-2dg-top25terrasse"
        },
        {
          "yaw": -0.3246040087139406,
          "pitch": -0.015832893007278415,
          "rotation": 0,
          "target": "68-2dg-gang"
        },
        {
          "yaw": -1.8609307755407976,
          "pitch": -0.013505067290832784,
          "rotation": 0,
          "target": "72-2dg-top25-gang-ez"
        },
        {
          "yaw": -1.4948508547914656,
          "pitch": -0.018685652863688063,
          "rotation": 0,
          "target": "73-2dg-top25-gang-kiz-bad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "70-2dg-top25terrasse",
      "name": "2DG, Top25.Terrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 3.0687172895977675,
        "pitch": 0.001417716666683333,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -2.6585484692470835,
          "pitch": 0.001204227478343256,
          "rotation": 0,
          "target": "69-2dg-top25-vr-wok"
        },
        {
          "yaw": 2.2568967403250957,
          "pitch": 0.0009756391870574532,
          "rotation": 0,
          "target": "71-2dg-top25-dachterrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "71-2dg-top25-dachterrasse",
      "name": "2DG, Top25, Dachterrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.2573461254273735,
        "pitch": 0.23566313548978002,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 2.610900464820909,
          "pitch": 0.5919877477380631,
          "rotation": 0,
          "target": "70-2dg-top25terrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "72-2dg-top25-gang-ez",
      "name": "2DG, Top25, Gang, EZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.09333717304142652,
        "pitch": 0.035583582099365074,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -1.9620972759150668,
          "pitch": 0.03885024877813237,
          "rotation": 0,
          "target": "69-2dg-top25-vr-wok"
        },
        {
          "yaw": 1.7670313730456453,
          "pitch": 0.01294125279628311,
          "rotation": 0,
          "target": "73-2dg-top25-gang-kiz-bad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "73-2dg-top25-gang-kiz-bad",
      "name": "2DG, Top25, Gang, KiZ, Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -2.4819915331055604,
          "pitch": 0.015423229128080251,
          "rotation": 0,
          "target": "69-2dg-top25-vr-wok"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "74-2dg-top26-vr-kche",
      "name": "2DG, Top26, VR, Küche",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.3884808946762988,
        "pitch": 0.003457476184635766,
        "fov": 1.214842862155721
      },
      "linkHotspots": [
        {
          "yaw": -1.639853556364642,
          "pitch": -0.02066753407651767,
          "rotation": 0,
          "target": "76-2dg-top26-terrasse"
        },
        {
          "yaw": 3.0200299108432818,
          "pitch": 0.0044739066734553745,
          "rotation": 0,
          "target": "75-2dg-top26-wz"
        },
        {
          "yaw": -2.636635685989667,
          "pitch": -0.023934408926795214,
          "rotation": 0,
          "target": "77-2dg-top26-sz"
        },
        {
          "yaw": 1.1265656130201158,
          "pitch": 0.0022766352425964698,
          "rotation": 0,
          "target": "68-2dg-gang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "75-2dg-top26-wz",
      "name": "2DG, Top26, WZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.9935381417354527,
        "pitch": -0.14578892982849112,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": -0.13375629814444423,
          "pitch": 0.009735534837188808,
          "rotation": 0,
          "target": "74-2dg-top26-vr-kche"
        },
        {
          "yaw": -0.8574337272935502,
          "pitch": 0.014705746300665012,
          "rotation": 0,
          "target": "77-2dg-top26-sz"
        },
        {
          "yaw": -0.5141820402477748,
          "pitch": 0.013895176008304588,
          "rotation": 0,
          "target": "76-2dg-top26-terrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "76-2dg-top26-terrasse",
      "name": "2DG, Top26, Terrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.031871229819014246,
        "pitch": -0.003234871099941472,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.7187698938118228,
          "pitch": 0.06145859161972389,
          "rotation": 0,
          "target": "74-2dg-top26-vr-kche"
        },
        {
          "yaw": -2.950048863221703,
          "pitch": 0.023918514227117882,
          "rotation": 0,
          "target": "77-2dg-top26-sz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "77-2dg-top26-sz",
      "name": "2DG, Top26, SZ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 0.40521992198476653,
        "pitch": 0.012939484399771217,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 1.1686181363454224,
          "pitch": 0.03655502115365117,
          "rotation": 0,
          "target": "74-2dg-top26-vr-kche"
        },
        {
          "yaw": 0.02523802820332044,
          "pitch": 0.05395742668221892,
          "rotation": 0,
          "target": "76-2dg-top26-terrasse"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
