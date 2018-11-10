import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Card } from 'antd';
import { startGame } from '../../../actions';
import PlayingCard from '../../PlayingCard/';
import logo from '../../../assets/collage.svg';
import './GameBoard.css';

const { Header, Content, Footer } = Layout;

class GameBoard extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(startGame(18));
  }

  render() {
    const { gameboard } = this.props;

    let cards = []

    if(gameboard) {
      cards = gameboard.map(item => (
        <Card>
          <PlayingCard cardType={item.type}/>
        </Card>
      ));
    }

    return (
      <Layout style={{ height: '-webkit-fill-available'}}>
        <Header className='header'>
          <img className='header__logo' src={logo} alt='logo'/>
          <h1 className='header__title'>Memory Game</h1>
        </Header>
        <Content className='game-board'>
          <div className='board'>
            {cards}
          </div>
        </Content>
        <Footer>
        </Footer>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  gameboard: state.gameboard.gameboard
})

export default connect(mapStateToProps)(GameBoard);
