import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dispatch } from 'store'
import { clickCard } from 'ducks/gameboard'
import { Card } from 'antd'
import PlayingCard from 'components/PlayingCard'
import './Cards.css'

class Cards extends Component {
  handleClickPlayingCard(cardId) {
    const { isFreeze } = this.props
    if (!isFreeze) {
      dispatch(clickCard(cardId))
    }
  }

  render() {
    const { gameboard } = this.props
    return (
      <div className="cards">
        {gameboard &&
          gameboard.map(({ id, type, isFlipped }) => (
            <Card key={id}>
              <PlayingCard
                id={id}
                cardType={type}
                isFlipped={isFlipped}
                onClick={() => this.handleClickPlayingCard(id)}
              />
            </Card>
          ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  gameboard: state.gameboard.gameboard,
  isFreeze: state.gameboard.isFreeze,
})

export default connect(mapStateToProps)(Cards)
