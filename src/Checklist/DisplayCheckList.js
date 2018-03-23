// Imports
import React, { Component } from "react";
// import ChecklistCSS from '../styles/ChecklistCSS.css';
// import { ReactDOM } from 'react-dom';

class DisplayCheckList extends Component {
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
            this.setState({
              isLoaded: true,
              items: result
            })
          },
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
          {/*  // 1. We need to sort the checklistems by their corresponding checklist id . 

            // 2. We need to then hardcode the tryptypeId's to the corresponding activity.

            // 3. we need to then display the activity in the 

            // 4. Work on the tables, getting the relational data together. thats the mission. */}


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
export default DisplayCheckList