import React, { Component } from 'react'
import { Button, Layout } from 'antd'
import { dispatch } from 'store'
import { startGame } from 'ducks/gameboard'
import logo from 'assets/collage.svg'
import './HomePage.css'

const { Content } = Layout

class HomePage extends Component {
  handleStartGameButton = event => {
    const { history } = this.props
    history.push('/gameboard')

    dispatch(startGame(18))
  }

  render() {
    return (
      <Layout style={{ height: '-webkit-fill-available' }}>
        <Content className="home">
          <a href="https://github.com/you">
            <img
              className="forkme"
              src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
              alt="Fork me on GitHub"
            />
          </a>
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
