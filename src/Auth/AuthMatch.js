// Imports
import React, { Component } from "react";
import ChecklistCSS from '../styles/ChecklistCSS.css';

class ChecklistApi extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
        fetch("http://localhost:5000/api/token?username=Chaz&password=Abc123!", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            },
            credentials: "same-origin"
          }).then(function(response) {
            response.status     //=> number 100–599
            response.statusText //=> String
            response.headers    //=> Headers
            response.url        //=> String
          
            return response.text()
          }, function(error) {
            error.message //=> String
          })};
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            <h3>User Logged In</h3>
          </ul>
        );
      }
    }
  }
export default ChecklistApi