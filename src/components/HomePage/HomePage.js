import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Layout } from 'antd';
import { startGame,  } from 'actions';
import logo from 'assets/collage.svg';
import './HomePage.css';

const { Footer, Content } = Layout;

class HomePage extends Component {
  handleStartGameButton = (event) => {
    const { history } = this.props;
    history.push('/gameboard');

    const { dispatch } = this.props;
    dispatch(startGame(18));
  }

  render() {
    return (
      <Layout style={{ height: '-webkit-fill-available'}}>
        <Content className='home'>
          <img src={logo} alt="logo"/>
          <h1>Memory Game</h1>
          <Button
            size='large'
            onClick={this.handleStartGameButton}
          >
            Start Game!
          </Button>
        </Content>
        <Footer >
          {/* <PageFooter/> */}
        </Footer>
      </Layout>
    );
  }
}

export default connect()(HomePage);
