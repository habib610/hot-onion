import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FoodDetails from './components/FoodDetails/FoodDetails';
import Login from './components/Login/Login';
export const UserContext = createContext();


function App() {
  const [cart, setCart] = useState(0);
  return (
    <UserContext.Provider value={[cart, setCart]}>
    
    <div>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
      <Home></Home>
          </Route>
          <Route  path="/home">
      <Home></Home>
          </Route>
          <Route  path="/food/:foodId">
      <FoodDetails></FoodDetails>
          </Route>
          <Route  path="/login">
      <Login></Login>
          </Route>

        </Switch>
      </Router>
     
    </div>
    </UserContext.Provider>
  );
}

export default App;
