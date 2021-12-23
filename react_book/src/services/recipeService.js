import axios from "axios";
const ServerUrl = "http://127.0.0.1:5000";

class RecipeService {

    // GET RECENT RECIPE CARDS - SERVER WILL QUERY DB FOR MOST RECENT ENTRIES
    async getRecentRecipes() {
        let response = await axios.get(ServerUrl + '/api/recipecards/recent');
        return response.data;
    }

    // GET RECIPE CARDS FROM SPECIFIC USER
    async getUserRecipes(userID) {
        let response = await axios.get(ServerUrl + '/api/user/' + userID + '/recipes');
        return response.data;
    }

    // GET RECIPES BY FOLLOWED USERS
    async getFollowedRecipes(userID) {
        let response = await axios.get(ServerUrl + '/api/recipecards/following/' + userID);
        return response.data;
    }


    // GET INDIVIDUAL RECIPE DETAIL BASED ON RECIPE ID
    async getRecipeDetail(recipeID) {
        let response = null
        try {
            response = await axios.get(ServerUrl + '/api/recipe/' + recipeID);
        } catch (error) {
            console.log(error);
            return null;
        }
        if(response.status === 200){
            return response.data;
        } else {
          console.error("Error getting recipe details", response.data);
          return null;
        }
    }

}


export default RecipeService;