import React, { Component } from 'react';
import { Redirect } from 'react-router';
export default class LoginComponent extends Component {
    render(){
        if(this.state.isLoggedIn === true){
            return (<Redirect to="../Trips/SavedTripsDashboard" />);
        }else{
            return (<Redirect to="../Profile/LoginForm" />);
        }
    }
}