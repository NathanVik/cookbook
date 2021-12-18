from bson.objectid import ObjectId
import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")

mydb = myclient["cookbook"]
mycol = mydb["users"]
mycol2 = mydb["recipes"]
mycol3 = mydb["details"]
# mycol4 = mydb["likes"]

user_data = [
    {
        "_id": ObjectId("619c29dc4058f0075685b2c8"),
        "username": "testuser1",
        "email": "testuser1@mail.com",
        "password": "abc123",
        "profilepic": "default",
        # "likes": {
        #     "1": "3",
        # },
    },
    {
        "_id": ObjectId("61a841e02fa01c9416c2a8a0"),
        "username": "testuser2",
        "email": "testuser2@mail.com",
        "password": "abc123",
        "profilepic": "default",
        # "likes": {
        #     "1": "1",
        #     "2": "2",
        #     "3": "3",
        # },
    },
    {
        "_id": ObjectId("61b5024445911eb0a4bd33ce"),
        "username": "testuser3",
        "email": "testuser1@mail.com",
        "password": "abc123",
        "profilepic": "default",
        # "likes": {
        #     "1": "1",
        #     "2": "2",
        # },
    },
]

recipe_data = [
    {
        "_id": ObjectId("61b5030fa24e5316e6861bab"),
        "title": "Bread",
        "user_id": ObjectId("619c29dc4058f0075685b2c8"),
        "filename": "default",
    },
    {
        "_id": ObjectId(),
        "title": "Cake",
        "user_id": ObjectId("619c29dc4058f0075685b2c8"),
        "filename": "default",
    },
    {
        "_id": ObjectId(),
        "title": "Roast",
        "user_id": ObjectId("61a841e02fa01c9416c2a8a0"),
        "filename": "default",
    },
]

recipe_detail_data = [
    {
        "_id": ObjectId(),
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
        "recipe_id": ObjectId("61b5030fa24e5316e6861bab"),
    },

]

# user_liked_data = [
#     {
#         "_id": "1",
#         "user_id": "1",
#         "recipe_id": "3",
#     },
#     {
#         "_id": "2",
#         "user_id": "2",
#         "recipe_id": "1"
#     },
# ]

x = mycol.insert_many(user_data)
x2 = mycol2.insert_many(recipe_data)
x3 = mycol3.insert_many(recipe_detail_data)

print(x.inserted_ids)
print(x2.inserted_ids)
print(x3.inserted_ids)
