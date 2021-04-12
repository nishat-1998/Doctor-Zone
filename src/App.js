import React,{ createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboaed/Dashboard';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
    <Switch>
     
      <Route path="/appointment">
        <Appointment></Appointment>
      </Route>
      <Route path="/dashboard/appointment">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/dashboard/allPatients">
            <AllPatients></AllPatients>
          </Route>
      <Route path="/login">
          <Login></Login>
          </Route>
      <Route exact path="/">
       <Home></Home>
      </Route>
    </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
