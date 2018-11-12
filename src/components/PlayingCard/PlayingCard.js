import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './PlayingCard.css';
import alien from '../../assets/emoji/alien.svg';
import angel from '../../assets/emoji/angel.svg';
import brokenHeart from '../../assets/emoji/broken-heart.svg';
import confused from '../../assets/emoji/confused.svg';
import cool from '../../assets/emoji/cool.svg';
import cry1 from '../../assets/emoji/cry-1.svg';
import cry from '../../assets/emoji/cry.svg';
import dead from '../../assets/emoji/dead.svg';
import devil from '../../assets/emoji/devil.svg';
import drool from '../../assets/emoji/drool.svg';
import evil from '../../assets/emoji/evil.svg';
import glitter from '../../assets/emoji/glitter.svg';
import happy from '../../assets/emoji/happy.svg';
import headache from '../../assets/emoji/headache.svg';
import heart from '../../assets/emoji/heart.svg';
import hipster from '../../assets/emoji/hipster.svg';
import hypnotized from '../../assets/emoji/hypnotized.svg';
import inLove from '../../assets/emoji/in-love.svg';
import karate from '../../assets/emoji/karate.svg';
import kiss1 from '../../assets/emoji/kiss-1.svg';
import kiss from '../../assets/emoji/kiss.svg';
import laughing1 from '../../assets/emoji/laughing-1.svg';
import laughing2 from '../../assets/emoji/laughing-2.svg';
import laughing from '../../assets/emoji/laughing.svg';
import money from '../../assets/emoji/money.svg';
import muted from '../../assets/emoji/muted.svg';
import nerd from '../../assets/emoji/nerd.svg';
import ninja from '../../assets/emoji/ninja.svg';
import pirate from '../../assets/emoji/pirate.svg';
import quiet from '../../assets/emoji/quiet.svg';
import sad from '../../assets/emoji/sad.svg';
import shy from '../../assets/emoji/shy.svg';
import sick1 from '../../assets/emoji/sick-1.svg';
import sick from '../../assets/emoji/sick.svg';
import skull from '../../assets/emoji/skull.svg';
import sleeping from '../../assets/emoji/sleeping.svg';
import smile1 from '../../assets/emoji/smile-1.svg';
import smile from '../../assets/emoji/smile.svg';
import straight from '../../assets/emoji/straight.svg';
import surprised from '../../assets/emoji/surprised.svg';
import sweating from '../../assets/emoji/sweating.svg';
import tongue from '../../assets/emoji/tongue.svg';
import vomiting from '../../assets/emoji/vomiting.svg';
import weird1 from '../../assets/emoji/weird-1.svg';
import weird from '../../assets/emoji/weird.svg';
import wink1 from '../../assets/emoji/wink-1.svg';
import wink from '../../assets/emoji/wink.svg';
import wondering from '../../assets/emoji/wondering.svg';
import yelling from '../../assets/emoji/yelling.svg';
import zombie from '../../assets/emoji/zombie.svg';

class PlayingCard extends Component {
  handleCardClick = (event) => {
    this.props.onClick(this.props.id);
  }

  render() {
    const { cardType, isFlipped } = this.props;
    let cardImg;
    switch(cardType) {
      case 'alien':
        cardImg = alien; break;
      case 'angel':
        cardImg = angel; break;
      case 'broken-heart':
        cardImg = brokenHeart; break;
      case 'confused':
        cardImg = confused; break;
      case 'cool':
        cardImg = cool; break;
      case 'cry-1':
        cardImg = cry1; break;
      case 'cry':
        cardImg = cry; break;
      case 'dead':
        cardImg = dead; break;
      case 'devil':
        cardImg = devil; break;
      case 'drool':
        cardImg = drool; break;
      case 'evil':
        cardImg = evil; break;
      case 'glitter':
        cardImg = glitter; break;
      case 'happy':
        cardImg = happy; break;
      case 'headache':
        cardImg = headache; break;
      case 'heart':
        cardImg = heart; break;
      case 'hipster':
        cardImg = hipster; break;
      case 'hypnotized':
        cardImg = hypnotized; break;
      case 'in-love':
        cardImg = inLove; break;
      case 'karate':
        cardImg = karate; break;
      case 'kiss-1':
        cardImg = kiss1; break;
      case 'kiss':
        cardImg = kiss; break;
      case 'laughing-1':
        cardImg = laughing1; break;
      case 'laughing-2':
        cardImg = laughing2; break;
      case 'laughing':
        cardImg = laughing; break;
      case 'money':
        cardImg = money; break;
      case 'muted':
        cardImg = muted; break;
      case 'nerd':
        cardImg = nerd; break;
      case 'ninja':
        cardImg = ninja; break;
      case 'pirate':
        cardImg = pirate; break;
      case 'quiet':
        cardImg = quiet; break;
      case 'sad':
        cardImg = sad; break;
      case 'shy':
        cardImg = shy; break;
      case 'sick-1':
        cardImg = sick1; break;
      case 'sick':
        cardImg = sick; break;
      case 'skull':
        cardImg = skull; break;
      case 'sleeping':
        cardImg = sleeping; break;
      case 'smile-1':
        cardImg = smile1; break;
      case 'smile':
        cardImg = smile; break;
      case 'straight':
        cardImg = straight; break;
      case 'surprised':
        cardImg = surprised; break;
      case 'sweating':
        cardImg = sweating; break;
      case 'tongue':
        cardImg = tongue; break;
      case 'vomiting':
        cardImg = vomiting; break;
      case 'weird-1':
        cardImg = weird1; break;
      case 'weird':
        cardImg = weird; break;
      case 'wink-1':
        cardImg = wink1; break;
      case 'wink':
        cardImg = wink; break;
      case 'wondering':
        cardImg = wondering; break;
      case 'yelling':
        cardImg = yelling; break;
      case 'zombie':
        cardImg = zombie; break;
      default:

    }
    const cardClass = cx({
      card: true,
      flipped: isFlipped
    });
    return (
      <div className="cardContainer">
        <div className={cardClass} onClick={this.handleCardClick}>
          <div className="front">
          </div>
          <div className="back">
            <img
              className='playing-card__img'
              src={cardImg}
              draggable={false}
              alt={this.props.cardType}
            />
          </div>
        </div>
      </div>
    );
  }
}

PlayingCard.propTypes = {
  cardType: PropTypes.oneOf([
    'alien',
    'angel',
    'broken-heart',
    'confused',
    'cool',
    'cry',
    'cry-1',
    'dead',
    'devil',
    'drool',
    'evil',
    'glitter',
    'happy',
    'headache',
    'heart',
    'hipster',
    'hypnotized',
    'in-love',
    'karate',
    'kiss',
    'kiss-1',
    'laughing',
    'laughing-1',
    'laughing-2',
    'money',
    'muted',
    'nerd',
    'ninja',
    'pirate',
    'quiet',
    'sad',
    'shy',
    'sick',
    'sick-1',
    'skull',
    'sleeping',
    'smile',
    'smile-1',
    'straight',
    'surprised',
    'sweating',
    'tongue',
    'vomiting',
    'weird',
    'weird-1',
    'wink',
    'wink-1',
    'wondering',
    'yelling',
    'zombie',
  ]).isRequired
};

export default PlayingCard;
