import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")

mydb = myclient["cookbook"]
mycol = mydb["users"]

user_data = [
    {
        "_id": "1",
        "username": "testuser1",
        "email": "testuser1@mail.com",
        "password": "abc123",
    },
    {
        "_id": "2",
        "username": "testuser2",
        "email": "testuser2@mail.com",
        "password": "abc123",
    },
    {
        "_id": "3",
        "username": "testuser3",
        "email": "testuser1@mail.com",
        "password": "abc123",
    },
]

recipe_data = [
    {
        "_id": "1",
        "title": "Bread",
        "user_id": "1",
    },
    {
        "_id": "2",
        "title": "Cake",
        "user_id": "1",
    },
    {
        "_id": "3",
        "title": "Roast",
        "user_id": "3",
    },
]

recipe_detail_data = [
    {
        "_id": "1",
        "ingredients": {
            "Flour": "2 cups",
            "Water": "1 cup",
            "salt": "2 tsp",
        },
        "instructions": {
            "Step 1": "Pour ingredients together",
            "Step 2": "Mix em up",
            "Step 3": "Bake It",
        },
        "recipe_id": "1",
    },

]