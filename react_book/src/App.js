import './App.css';
import NavBar from "./components/navBar";
import Home from './components/home';
import LandingPage from "./components/landingPage";
import Login from './components/login';
import UserRegistration from './components/userRegistration';
import UserProfile from './components/userProfile';
import CreateRecipe from './components/createRecipe';
import GlobalState from './contexts/globalContext';
import ViewRecipe from './components/viewRecipe';
import ViewUserProfile from './components/viewUserProfile';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <div className="App">
          <NavBar></NavBar>
          <Switch>
            <Route path="/" exact component={LandingPage}></Route>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/register" exact component={UserRegistration}></Route>
            <Route path="/myprofile" exact component={UserProfile}></Route>
            <Route path="/profile/:userID" exact component={ViewUserProfile}></Route>
            <Route path="/create-recipe" component={CreateRecipe}></Route>
            <Route path="/recipe/:recipeID" component={ViewRecipe}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </GlobalState>
  )
}

export default App;
