import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")

mydb = myclient["cookbook"]

mycol = mydb["users"]

print(mydb.list_collection_names())