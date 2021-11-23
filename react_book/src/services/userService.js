import axios from "axios";
const ServerUrl = "http://127.0.0.1:5000";


class UserService {
    
    //Get User Data -- for user detail page
    async getUserDetail(userID) {
        let response = await axios.get(ServerUrl + 'api/user/' + userID);
        return response.data;
    }

}

export default UserService;