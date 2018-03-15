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
      fetch("http://localhost:5000/api/ChecklistItem")
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({ 
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            Random list of things because i can crud:
            {items.map(item => (
              <li key={item.checklistItemId}>
                {item.checklistAction} {item.tripTypeId} {item.tripType}
              </li>
            ))}
          </ul>
        );
      }
    }
  }
export default ChecklistApi