import './App.css';
import NavBar from "./components/navBar";
import Home from './components/home';
import LandingPage from "./components/landingPage";
import Login from './components/login';

import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>

        <Switch>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
