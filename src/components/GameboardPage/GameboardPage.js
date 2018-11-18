import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Card } from 'antd';
import { startOverview, startGame, cardClick, stopOverview } from 'actions';
import PlayingCard from 'components/PlayingCard';
import logo from 'assets/collage.svg';
import './GameboardPage.css';

const { Header, Content, Footer } = Layout;

class GameBoard extends Component {
  componentDidMount() {
    const { dispatch, gameboard, isOverlooked } = this.props;
    if(!gameboard) {
      dispatch(startGame(18));
    }
    if(!isOverlooked) {
      dispatch(startOverview());
      const asyncStopOverview = () => {
        return dispatch => {
          setTimeout(() => {
            dispatch(stopOverview(this.props.gameboard));
          }, 5000);
        }
      }
      dispatch(asyncStopOverview());
    }
  }

  handleClickPlayingCard = (cardId) => {
    const { dispatch, gameboard, isFreezed } = this.props;
    dispatch(cardClick(cardId, gameboard, isFreezed));
  }

  render() {
    const { gameboard } = this.props;

    let cards = []

    if(gameboard) {
      cards = gameboard.map(item => (
        <Card>
          <PlayingCard
            id={item.id}
            cardType={item.type}
            isFlipped={item.isFlipped}
            onClick={this.handleClickPlayingCard}
          />
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
  gameboard: state.gameboard.gameboard,
  isOverlooked: state.gameboard.isOverlooked,
  isFreezed: state.gameboard.isFreezed
})

export default connect(mapStateToProps)(GameBoard);
