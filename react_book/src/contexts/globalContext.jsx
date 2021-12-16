import React, { Component } from 'react';
import siteContext  from './siteContext';
import axios from "axios";
const ServerUrl = "http://127.0.0.1:5000";

class GlobalState extends Component {
    state = { 
        isLoggedIn: false,
     }
    render() { 
        return  <siteContext.Provider 
                    value={{
                        isLoggedIn: this.state.isLoggedIn,
                        handleLogin: this.handleLogin,
                    }}
                >
                    {this.props.children}
                </siteContext.Provider>;
         
    }

    handleLogin = async (user) => {
            // send user to server
        let response = await axios.post(ServerUrl + "/api/user/login", user);
        console.log(response)
        return response;
        
        
        // Redirect
        // let errorMessage = this.state.errorMessage;
        // if (response.status === 200) {
        //     localStorage.setItem("user", JSON.stringify(response.data));
        //     this.props.history.push("/");
        // } else if (response.status === 404) {
        //   this.setState({ errorMessage: true });
        //   setTimeout(() => {
        //     this.setState({ errorMessage: false });
        //   }, 3500);
        }
    }
 // RECONFIGURE ERROR MESSAGE RETURNS FOR CONTEXT LOGIN


    


export default GlobalState;