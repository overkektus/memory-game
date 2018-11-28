import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { dispatch } from 'store'
import { startGame } from 'ducks/gameboard'
import { Button, Layout } from 'antd'
import ForkMeLink from 'components/ForkMeLink'
import logo from 'assets/collage.svg'
import './HomePage.css'

const { Content } = Layout

class HomePage extends Component {
  handleStartGameButton = event => {
    dispatch(push('/gameboard'))
    dispatch(startGame(18))
  }

  render() {
    return (
      <Layout style={{ height: '-webkit-fill-available' }}>
        <Content className="home">
          <ForkMeLink />
          <img src={logo} alt="logo" />
          <h1>Memory Game</h1>
          <Button size="large" onClick={this.handleStartGameButton}>
            Start Game!
          </Button>
        </Content>
      </Layout>
    )
  }
}

export default HomePage
