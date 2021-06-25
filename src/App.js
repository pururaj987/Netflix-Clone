import React, { useEffect } from 'react';
import HomeScreen from './components/Screens/HomeScreen';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginScreen from './components/Screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './components/Screens/ProfileScreen';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  console.log(user);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        // USer is logged in
        dispatch(login({
          uid : userAuth.uid,
          email: userAuth.email
        }))
      } else {
        //User is logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  } , [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
         <LoginScreen />
        ) : (
          <Switch>
            <Route exact path = "/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/"> 
              <HomeScreen />
            </Route>
          </Switch>
        )}
       
      </Router>
    </div>
  );
}

export default App;
