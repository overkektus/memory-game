import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';
import PlayingCard from 'components/PlayingCard';
import './Cards.css';

class Cards extends Component {
  render() {
    const { gameboard } = this.props;
    let cards = [];
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
    return(
      <div className='cards'>
        {cards}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gameboard: state.gameboard.gameboard
});

export default connect(mapStateToProps)(Cards);
