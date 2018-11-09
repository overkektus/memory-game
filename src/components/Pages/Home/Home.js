import React, { Component } from 'react';
import { Button, Layout } from 'antd';
import PageFooter from '../../Footer/';
import logo from '../../../assets/collage.svg';
import './Home.css';

const { Footer, Content } = Layout;

class Home extends Component {
  handleStartGameButton = (event) => {
    const { history } = this.props;
    history.push('/gameboard');
  }

  render() {
    console.log(this.props);
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

export default Home;
