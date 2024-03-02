from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client['plant_app']
collection = db['plants']

plant_data = [
    {
        "id": 0,
        "name": "Aglaonema",
        "description": "Popular houseplant with stunning, variegated leaves. Low-maintenance and thrives in bright, indirect light."
    },
    {
        "id": 1,
        "name": "Alocasia",
        "description": "Striking foliage with large, arrowhead-shaped leaves. Prefers moderate to high humidity and well-draining soil"
    },
    {
        "id": 2,
        "name": "BegoniaRex",
        "description": "Eye-catching with vibrant, patterned leaves. Requires consistent moisture and bright, indirect light."
    },
    {
        "id": 3,
        "name": "BostonFern",
        "description": "Elegant fern with delicate fronds. Needs high humidity and moist soil, ideal for bathrooms or terrariums."
    },
    {
        "id": 4,
        "name": "BunnyEarCactus",
        "description": "Adorable cactus with soft, fuzzy ears. Low-maintenance and thrives in full sun and dry soil."
    },
    {
        "id": 5,
        "name": "Chlorophytum comosum",
        "description": "Easy-care plant known for its cascading spiderettes. Tolerates various light conditions and moderate watering."
    },
    {
        "id": 6,
        "name": "CrassulaPortulaca",
        "description": "Beautiful succulent with thick, jade-like leaves. Requires full sun and infrequent watering."
    },
    {
        "id": 7,
        "name": "Echeveria",
        "description": "Popular succulent with rosettes of colorful or textured leaves. Needs full sun and well-draining soil."
    },
    {
        "id": 8,
        "name": "Epipremnum",
        "description": "Versatile climber with lush, heart-shaped leaves. Thrives in various light conditions and prefers moist soil."
    },
    {
        "id": 9,
        "name": "FicusElastica",
        "description": "Large, rubbery leaves on a sturdy tree-like structure. Adapts to moderate light and prefers moist soil."
    },
    {
        "id": 10,
        "name": "Ficusbenjamina",
        "description": "Popular weeping fig with glossy, green leaves. Requires bright, indirect light and consistent moisture."
    },
    {
        "id": 11,
        "name": "Fiddle-leaf",
        "description": "Showstopping plant with large, fiddle-shaped leaves. Needs bright, indirect light and high humidity."
    },
    {
        "id": 12,
        "name": "Jade plant",
        "description": "Succulent with thick, oval leaves, known for bringing good luck. Requires full sun and infrequent watering."
    },
    {
        "id": 13,
        "name": "Kalanchoe",
        "description": "Succulent with vibrant blooms and unique foliage. Enjoys bright, indirect light and well-draining soil."
    },
    {
        "id": 14,
        "name": "Monstera deliciosa",
        "description": "Popular vine with large, split leaves. Requires bright, indirect light and moderate watering."
    },
    {
        "id": 15,
        "name": "Peperomia caperata",
        "description": "Compact foliage plant with coin-shaped leaves. Easy-care and tolerates various light conditions."
    },
    {
        "id": 16,
        "name": "Philodendron Hope Selloum",
        "description": "Large, lush foliage with heart-shaped leaves. Prefers bright, indirect light and regular watering."
    },
    {
        "id": 17,
        "name": "PonytailPalm",
        "description": " Unique ponytail trunk topped with feathery leaves. Needs full sun and infrequent watering."
    },
    {
        "id": 18,
        "name": "Schefflera",
        "description": "Lush tree-like plant with glossy, compound leaves. Adapts to moderate light and enjoys misting."
    },
    {
        "id": 19,
        "name": "Solenostemon",
        "description": "Vibrant foliage with colorful markings and serrated edges. Requires bright light and consistent moisture."
    },
    {
        "id": 20,
        "name": "Syngonium",
        "description": "Climbing vine with arrowhead-shaped leaves. Thrives in moderate to bright, indirect light and moist soil."
    },
    {
        "id": 21,
        "name": "Tradescantia fluminensis",
        "description": "Trailing vine with variegated leaves. Easy-care and tolerates various light conditions."
    },
    {
        "id": 22,
        "name": "snake plant",
        "description": "Tough, upright plant with long, sword-like leaves. Low-maintenance and thrives in moderate light and infrequent watering."
    },
    {
        "id": 23,
        "name": "zz plant",
        "description": "Air-purifying foliage with glossy, dark green leaves. Tolerates low light and infrequent watering."
    }
]

result = collection.insert_many(plant_data)
print(f"Data inserted with IDs {result.inserted_ids}")