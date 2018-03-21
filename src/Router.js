import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./Common/NotFound";
import LoginForm from './Common/LoginForm';
import ChecklistApi from './Checklist/ChecklistApi';
import RegisterForm from './Profile/RegisterForm';
// import Dashboard from './Home/Dashboard';
// import SteveWay from "./Profile/SteveWay";


const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* <IndexRedirect to="/" /> */}

      {/* <Route exact path="/" component={App} /> */}

      <Route path="/login" component={LoginForm} />

      <Route path="/RegisterUser" component={RegisterForm} />

      <Route path="/checklist" component={ChecklistApi} />

      {/* <Route path="/dashboard/:userId" component={Dashboard} /> */}

      {/* <Route path="/steveway" component={SteveWay} /> */}

      {/* <Route path="/home" component={App} /> */}

      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;