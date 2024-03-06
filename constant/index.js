const contractType = {
    Apprendistato: "apprendistato",
    Indeterminato: "indeterminato",
    Determinato: "determinato",
}


 const costSheet = {
    "indeterminato": {
        "dirigenti": {
            "INPS": 26.96,
            "INAIL": 0.4
        },
        "operai": {
            "INPS": 30.98,
            "INAIL": 2.0
        },
        "impiegati": {
            "INPS": 28.76,
            "INAIL": 0.5
        }
    },
    "determinato": {
        "dirigenti": {
            "INPS": 28.36,
            "INAIL": 0.4
        },
        "operai": {
            "INPS": 32.38,
            "INAIL": 2.0
        },
        "impiegati": {
            "INPS": 30.16,
            "INAIL": 0.5
        }
    },
    "apprendistato": {
        "dirigenti": {
            "INPS": 14.0,
            "INAIL": 0.0
        },
        "operai": {
            "INPS": 14.0,
            "INAIL": 0.0
        },
        "impiegati": {
            "INPS": 14.0,
            "INAIL": 0.0
        }
    }
}


 const regionalRate = {

    "15000": {
        "Marche": "1.23",
        "Lombardia": "1.23",
        "Molise": "1.73",
        "Valle d'Aosta": "1.23",
        "Abruzzo": "1.73",
        "Liguria": "1.23",
        "Puglia": "1.33",
        "Trento": "1.23",
        "Emilia Romagna": "1.33",
        "Umbria": "1.23",
        "Campania": "2.13",
        "Basilicata": "1.23",
        "Sicilia": "1.23",
        "Veneto": "1.23",
        "Bolzano": "1.23",
        "Friuli Venezia Giulia": "1.10",
        "Toscana": "1.42",
        "Piemonte": "2.02",
        "Sardegna": "1.23",
        "Calabria": "1.73",
        "Lazio": "2.13"
    },
    "28000": {
        "Marche": "1.53",
        "Lombardia": "1.58",
        "Molise": "1.93",
        "Valle d'Aosta": "1.23",
        "Abruzzo": "1.73",
        "Liguria": "2.19",
        "Puglia": "1.43",
        "Trento": "1.23",
        "Emilia Romagna": "1.93",
        "Umbria": "2.02",
        "Campania": "3.36",
        "Basilicata": "1.23",
        "Sicilia": "1.23",
        "Veneto": "1.23",
        "Bolzano": "1.23",
        "Friuli Venezia Giulia": "1.23",
        "Toscana": "1.43",
        "Piemonte": "2.13",
        "Sardegna": "1.23",
        "Calabria": "1.73",
        "Lazio": "3.33"
    },
    "50000": {
        "Marche": "2.10",
        "Lombardia": "1.72",
        "Molise": "2.13",
        "Valle d'Aosta": "1.23",
        "Abruzzo": "1.73",
        "Liguria": "2.31",
        "Puglia": "2.03",
        "Trento": "1.23",
        "Emilia Romagna": "2.13",
        "Umbria": "2.07",
        "Campania": "3.20",
        "Basilicata": "1.23",
        "Sicilia": "1.23",
        "Veneto": "1.23",
        "Bolzano": "1.23",
        "Friuli Venezia Giulia": "1.23",
        "Toscana": "2.08",
        "Piemonte": "3.15",
        "Sardegna": "1.23",
        "Calabria": "1.73",
        "Lazio": "3.33"
    },
    ">50000": {
        "Marche": "2.13",
        "Lombardia": "1.73",
        "Molise": "2.33",
        "Valle d'Aosta": "1.23",
        "Abruzzo": "1.73",
        "Liguria": "2.33",
        "Puglia": "2.25",
        "Trento": "2.13",
        "Emilia Romagna": "2.27",
        "Umbria": "2.23",
        "Campania": "3.33",
        "Basilicata": "1.23",
        "Sicilia": "1.23",
        "Veneto": "1.23",
        "Bolzano": "2.13",
        "Friuli Venezia Giulia": "1.23",
        "Toscana": "2.13",
        "Piemonte": "3.33",
        "Sardegna": "1.23",
        "Calabria": "1.73",
        "Lazio": "3.33"
    }
}


const irpefRate = {
    //Values are in percentage
    "15000": "23",
    "28000": "23",
    "50000": "35",
    ">50000": "43"
}


const RegionProvinceMap = {
    Abruzzo: ["L'Aquila", "Teramo", "Pescara", "Chieti"],
    Basilicata: ["Potenza", "Matera"],
    Calabria: [
        "Catanzaro",
        "Cosenza",
        "Reggio Calabria",
        "Crotone",
        "Vibo Valentia",
    ],
    Campania: ["Napoli", "Avellino", "Benevento", "Caserta", "Salerno"],
    "Emilia-Romagna": [
        "Bologna",
        "Ferrara",
        "Forlì-Cesena",
        "Modena",
        "Parma",
        "Piacenza",
        "Ravenna",
        "Reggio Emilia",
    ],
    "Friuli-Venezia Giulia": ["Trieste", "Gorizia", "Udine", "Pordenone"],
    Lazio: ["Roma", "Frosinone", "Latina", "Rieti", "Viterbo"],
    Liguria: ["Genova", "Imperia", "La Spezia", "Savona"],
    Lombardia: [
        "Milano",
        "Bergamo",
        "Brescia",
        "Como",
        "Cremona",
        "Lecco",
        "Lodi",
        "Mantova",
        "Monza e Brianza",
        "Pavia",
        "Sondrio",
        "Varese",
    ],
    Marche: ["Ancona", "Ascoli Piceno", "Fermo", "Macerata", "Pesaro e Urbino"],
    Molise: ["Campobasso", "Isernia"],
    Piemonte: [
        "Torino",
        "Alessandria",
        "Asti",
        "Biella",
        "Cuneo",
        "Novara",
        "Verbano-Cusio-Ossola",
        "Vercelli",
    ],
    Puglia: [
        "Bari",
        "Barletta-Andria-Trani",
        "Brindisi",
        "Foggia",
        "Lecce",
        "Taranto",
    ],
    Sardegna: ["Cagliari", "Nuoro", "Oristano", "Sassari"],
    Sicilia: [
        "Palermo",
        "Agrigento",
        "Caltanissetta",
        "Catania",
        "Enna",
        "Messina",
        "Ragusa",
        "Siracusa",
        "Trapani",
    ],
    Toscana: [
        "Firenze",
        "Arezzo",
        "Grosseto",
        "Livorno",
        "Lucca",
        "Massa-Carrara",
        "Pisa",
        "Pistoia",
        "Prato",
        "Siena",
    ],
    "Trentino-Alto Adige": ["Trento", "Bolzano"],
    Umbria: ["Perugia", "Terni"],
    "Valle d'Aosta": ["Aosta"],
    Veneto: [
        "Venezia",
        "Belluno",
        "Padova",
        "Rovigo",
        "Treviso",
        "Verona",
        "Vicenza",
    ],
}


module.exports = {
    contractType,
    costSheet,
    regionalRate,
    irpefRate,
    RegionProvinceMap
}