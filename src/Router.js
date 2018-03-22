import React from "react";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import NotFound from "./Common/NotFound";
import LoginForm from './Common/LoginForm';
import RegisterForm from './Profile/RegisterForm';
import App from './App';
import CreateListItem from "./Checklist/CreateListItem";
import CreateNewTrip from './Trips/CreateNewTrip';
import NavBar from './Common/Navbar';

const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* <IndexRedirect to="/" /> */}

      <Route exact path="/" component={App} />

      <Route exact path="/Login" component={LoginForm} />

      <Route exact path="/RegisterUser" component={RegisterForm} />

      <Route exact path="/CreateListItem" component={CreateListItem} />

      <Route exact path="/CreateNewTrip" component={CreateNewTrip} />

      {/* <Route path="/dashboard/:userId" component={Dashboard} /> */}

      {/* <Route path="/home" component={App} /> */}

      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;