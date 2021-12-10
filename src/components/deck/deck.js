import { useState } from 'react';
import BodyHeader from '../bodyheader/bodyheader';
import './deck.css';

function Deck({ cards, handleDraw, handleShuffle }) {
  const [numToDraw, setNumToDraw] = useState(1);

  function draw() {
    handleDraw(numToDraw);
    setNumToDraw(1);
  }

  return (
    <div className="main-body__block main-body__block--deck">
      <BodyHeader title="Deck" detail={`${cards.length}/52`}></BodyHeader>
      <ul className="cards-in-deck__list">
      {cards.map((c, i) => {
        return(
          <li key={i} className="deck-card" style={{left: `${(cards.length - (i + 1)) / 4}px`, top: `${(i + 1) / 2}px`,  zIndex: cards.length - (i + 1)}}>
            <img className="card-deck__image" width="100%" src="./assets/cards/1B.svg" alt={`${c.rank}${c.suit}`} />
            {/*<div className="deck-card__dummy">{`${c.rank}${c.suit}`}</div>*/}
          </li>
        )
      })}
      </ul>
      <div className="card-controls">
        <button className="btn control" type="button" onClick={handleShuffle}>Shuffle</button>
        <form method="GET" action="/" className="draw-card control">
          <label htmlFor="draw-card-input" className="sr-only">Enter number of cards to draw</label>
          <input id="draw-card-input" className="draw-card__input" type="number" min="1" max="52" value={numToDraw} onChange={(e) => setNumToDraw(e.target.value)} />
          <button className="draw-card__submit btn" type="button" onClick={draw}>Draw</button>
        </form>
      </div>
    </div>
  );
}

export default Deck;