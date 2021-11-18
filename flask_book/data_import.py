import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")

mydb = myclient["cookbook"]
mycol = mydb["users"]

data = [
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

x = mycol.insert_many(data)

print(x.inserted_ids)