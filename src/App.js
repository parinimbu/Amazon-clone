import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';  
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import {loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51IId0kJsr3tdfml32rmJuOMcuO90KgmmfMUaI543555yhDLv5ViLTdG2M7sBWL92ufT7VKeanRiDlMYoYReWhn6w003iOd42C5');

function App() {

  const [{}, dispatch ] = useStateValue(); 

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>', authUser);

      if (authUser){
        //the user just logged in / the user was just logged in
        dispatch ({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
      
        <Switch>
        <Route path="/login">
           <Login />
          </Route>
          
          <Route path="/checkout">
          <Header />
             <Checkout /> 
          </Route>

          <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
          <Payment />
          </Elements>
            
          </Route>

          <Route path="/">
          <Header />
             <Home />
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
