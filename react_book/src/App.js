import './App.css';
import NavBar from "./components/navBar";
import Home from './components/home';
import LandingPage from "./components/landingPage";
import Login from './components/login';
import UserRegistration from './components/userRegistration';
import UserProfile from './components/userProfile';

import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>

      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact component={UserRegistration}></Route>
          <Route path="/profile" exact component={UserProfile}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
