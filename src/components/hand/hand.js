import { useEffect, useState } from 'react';
import BodyHeader from '../bodyheader/bodyheader';
import CONSTANTS from '../../common/constants';
import './hand.css';

function Hand({ cards, sort }) {
  const [totalInHand, setTotalInHand] = useState(0);

  useEffect(() => {
    setTotalInHand(calculateTotal(cards));
  }, [cards]);

  function calculateTotal(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return 0;
    return arr.reduce((previous, current) => {
      return previous + CONSTANTS.RANKS.indexOf(current.rank) + 2;
    }, 0);
  }

  return (
    <div className="main-body__block main-body__block--hand">
      <BodyHeader title="Hand" detail={`${cards.length} (${totalInHand})`}></BodyHeader>
      <ul className="cards-in-hand__list">
        {cards.map((c, i) => {
          return(
            <li key={i} className="drawn-card slide-in" style={{left: `${i * 28}px`, zIndex: i + 1, transform: `translateX(${-100 * (i + 1)}%)`}}>
              <img className="drawn-card__image" src={`./assets/cards/${c.rank}${c.suit}.svg`} alt={`Card: ${c.rank} of ${c.suit}`} width="100%" />
            </li>
          )
        })}
      </ul>
      <div className="card-controls">
        <button className="btn control" type="button" disabled={cards.length < 2} onClick={sort}>Sort</button>
      </div>
    </div>
  );
}

export default Hand;