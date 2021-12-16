from config import db, parse_json
from server import app


@app.route('/api/likes')
def get_likes():
    cursor = db.likes.find({})
    likes =[]
    for like in cursor:
        likes.append(like)
    
    return parse_json(likes)


@app.route('/api/recipecards')
def get_recipes():
    cursor = db.recipecards.find({})
    recipes = []
    for recipe in cursor:
        recipes.append(recipe)

    return parse_json(recipes)