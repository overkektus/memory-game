import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Card } from 'antd';
import { dispatch } from 'store';
import { startGame, stopOverview } from 'ducks/gameboard';
import Footer from 'components/Footer';
import PlayingCard from 'components/PlayingCard';
import logo from 'assets/collage.svg';
import './GameboardPage.css';

const { Header, Content } = Layout;

class GameBoard extends Component {
  componentDidMount() {
    const { gameboard } = this.props;
    if(!gameboard) {
      dispatch(startGame(18));
    }
  }

  handleClickPlayingCard = (cardId) => {
    const { dispatch, gameboard, isFreezed } = this.props;
    // dispatch(cardClick(cardId, gameboard, isFreezed));
  }

  render() {
    const { gameboard, isOverlooked } = this.props;
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
    console.log(isOverlooked)
    if(gameboard && !isOverlooked) {
      const asyncStopOverview = () => {
        return dispatch => {
          setTimeout(() => {
            dispatch(stopOverview(gameboard));
          }, 5000);
        }
      }
      dispatch(asyncStopOverview());
    }
    return (
      <Layout style={{ height: '-webkit-fill-available'}}>
        <Header className='header'>
          <img className='header__logo' src={logo} alt='logo'/>
          <h1 className='header__title'>Memory Game</h1>
          <iframe
            title='github stars button'
            src="https://ghbtns.com/github-btn.html?user=overkektus&repo=memory-game&type=star&count=true&size=medium"
            frameBorder="0"
            scrolling="0"
            width="120px"
            height="20px">
          </iframe>
        </Header>
        <Content className='game-board'>
          <div className='board'>
            {cards}
          </div>
        </Content>
        <Footer/>
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
