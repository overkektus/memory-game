import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Dashboard.css'

class Dashboard extends Component {
  state = {
    runningTime: 0,
  }
  render() {
    const { score } = this.props
    // const startTime = Math.round(new Date() / 1000) - this.state.runningTime
    // this.timer = setInterval(() => {
    //   this.setState({ runningTime: Math.round(new Date() / 1000) - startTime })
    // })
    // TODO: Refactor timer
    return (
      <div className="dashboard">
        <h2>Time: {this.state.runningTime}s</h2>
        <h2>Score: {score}</h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  score: state.gameboard.score,
})

export default connect(mapStateToProps)(Dashboard)
