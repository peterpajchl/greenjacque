import CONSTANTS from './constants';

class Card {

  constructor(suit, rank) {
    if (!CONSTANTS.SUITES.includes(suit)) throw new Error(`Invalid suit "${suit}" provided`);
    if (!CONSTANTS.RANKS.includes(rank)) throw new Error(`Invalid rank "${rank}" provided`)
    this.suit = suit;
    this.rank = rank;
  }

}

export default Card;