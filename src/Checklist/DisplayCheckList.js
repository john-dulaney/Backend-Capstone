
import React, { Component } from 'react';

class DisplayCheckList extends Component {
  render() {
    return (
        <div>
          <form>
            <h3>{this.props.UserName}</h3>
            <h3>{this.props.Password}</h3>
            <button>DisplayCheckList</button>
          </form>
            <a>{this.props.Register}</a>
        </div>
    )
  }
}

export default DisplayCheckList;