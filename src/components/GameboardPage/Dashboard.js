import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Dashboard.css'

class Dashboard extends Component {
  state = {
    secondsElapsed: 0,
  }

  render() {
    const { score } = this.props
    return (
      <div className="dashboard">
        <h2>Score: {score}</h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  score: state.gameboard.score,
})

export default connect(mapStateToProps)(Dashboard)
