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
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboaed/Dashboard';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import AddDoctor from './components/AddDoctor/AddDoctor';

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
      <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <PrivateRoute path="/allPatients">
            <AllPatients></AllPatients>
          </PrivateRoute>
          <PrivateRoute path="/addDoctor">
            <AddDoctor></AddDoctor>
          </PrivateRoute>
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
