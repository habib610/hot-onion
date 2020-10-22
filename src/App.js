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
import DeliveryDetail from './components/DeliveryDetails/DeliveryDetail';
export const UserContext = createContext();


function App() {
  const [cart, setCart] = useState(0);
  return (
    <UserContext.Provider value={[cart, setCart]}>
    
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
      <Header></Header>
      <Home></Home>
          </Route>
          <Route  path="/home">
      <Header></Header>
      <Home></Home>
          </Route>
          <Route  path="/food/:foodId">
      <FoodDetails></FoodDetails>
          </Route>
          <Route  path="/login">
      <Login></Login>
          </Route>
          <Route  path="/deliveryDetails">
      <DeliveryDetail></DeliveryDetail>
          </Route>

        </Switch>
      </Router>
     
    </div>
    </UserContext.Provider>
  );
}

export default App;
