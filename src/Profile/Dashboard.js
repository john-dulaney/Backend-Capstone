import React, {Component} from 'react';
import ChecklistApi from '../Checklist/ChecklistApi';
class Dashboard extends Component {
  render() {
    return (
      <div>
          <ChecklistApi />
      </div>
    );
  }
}

export default Dashboard;
