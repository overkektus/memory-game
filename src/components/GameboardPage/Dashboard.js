import React, { Component } from 'react';
import './Dashboard.css'

class Dashboard extends Component {
  render() {
    return(
      <div className='dashboard'>
        <h2>
          Time: 46s
        </h2>
        <h2>
          Score: 240
        </h2>
      </div>
    );
  }
}

export default Dashboard;
