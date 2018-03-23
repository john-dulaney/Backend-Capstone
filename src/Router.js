import React from 'react';
import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from './Common/NotFound';
import RegisterForm from './Profile/RegisterForm';
import CreateListItem from './Checklist/CreateListItem';
import CreateNewTrip from './Trips/CreateNewTrip';
import LoginForm from './Profile/LoginForm';
import SavedTrips from './Trips/SavedTrips';
import DisplayCheckList from './Checklist/DisplayCheckList';

const Router = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />

      <Route exact path="/Login" component={LoginForm} />

      <Route exact path="/RegisterUser" component={RegisterForm} />

      <Route exact path="/CreateListItem" component={CreateListItem} />

      <Route exact path="/CreateNewTrip" component={CreateNewTrip} />
      
      <Route exact path="/SavedTrips" component={SavedTrips} />
      <Route exact path="/DisplayCheckList" component={DisplayCheckList} />

      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>;

export default Router;
