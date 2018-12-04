import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { dispatch } from 'src/store'
import { startGame, resetGame } from 'src/ducks/gameboard'
import { Button, Layout } from 'antd'
import ForkMeLink from 'src/components/ForkMeLink'
import logo from 'src/assets/collage.svg'
import './ResultPage.css'

const { Content } = Layout

class ResultPage extends Component {
  handleStartGameButton = event => {
    dispatch(push('/gameboard'))
    dispatch(resetGame())
    dispatch(startGame(18))
  }

  render() {
    const { score, time } = this.props
    return (
      <Layout style={{ height: '-webkit-fill-available' }}>
        <Content className="result">
          <ForkMeLink />
          <img src={logo} alt="logo" />
          <h2>
            Your result:
            <span> {score}</span>
          </h2>
          <h2>
            Time passed:
            <span> {time}</span>
          </h2>
          <Button size="large" onClick={this.handleStartGameButton}>
            Start new game
          </Button>
        </Content>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  ...state,
  score: state.gameboard.score,
  time: state.gameboard.time,
})

export default connect(mapStateToProps)(ResultPage)
