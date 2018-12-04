import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { dispatch } from 'src/store'
import { startGame } from 'src/ducks/gameboard'
import { Button, Layout } from 'antd'
import ForkMeLink from 'src/components/ForkMeLink'
import logo from 'src/assets/collage.svg'
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
          <a href="/">
            <h1>Memory Game</h1>
          </a>
          <Button size="large" onClick={this.handleStartGameButton}>
            Start Game!
          </Button>
        </Content>
      </Layout>
    )
  }
}

export default HomePage
