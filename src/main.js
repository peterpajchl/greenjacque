import './styles/main.css';
import './styles/elements.css';
import './styles/animation.css';

import { useEffect, useState } from 'react';
import {
  assembleDeck,
  shuffleCards,
  serialiseCards,
  deserialiseCards,
  sortCards
} from './common/common';
import Deck from './components/deck/deck';
import Hand from './components/hand/hand';
import Notification from './components/notification/notification';
import CONSTANTS from './common/constants';
import MainHeader from './components/mainheader/mainheader';

function Main() {
  const [deck, setDeck] = useState([]);
  const [hand, setHand] = useState([]);
  const [hasMsg, setHasMsg] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    onload();
  }, []);

  function onload() {
    const timeString = localStorage.getItem(CONSTANTS['STORAGE-KEY-TIME']);
    const deckString = localStorage.getItem(CONSTANTS['STORAGE-KEY-DECK']);
    const handString = localStorage.getItem(CONSTANTS['STORAGE-KEY-HAND']);

    if (timeString && deckString && handString) { // this is a bit naive
      const date = new Date(parseInt(timeString));
      const deck = deserialiseCards(deckString);
      const hand = deserialiseCards(handString);

      setDeck(deck);
      setHand(hand);
      setMsg(`Loaded your saved game from ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} @ ${date.getHours()}: ${date.getMinutes()} . Please press "Reset" to start over.`);
      setHasMsg(true);
      setTimeout(() => {
        setHasMsg(false);
        setMsg('');
      }, 4000);
    } else {
      setDeck(assembleDeck());
      setHand([]);
    }
  }

  function handleSave() {
    const timestamp = Date.now();
    const deckString = serialiseCards(deck);
    const handString = serialiseCards(hand);
    localStorage.setItem(CONSTANTS['STORAGE-KEY-TIME'], timestamp);
    localStorage.setItem(CONSTANTS['STORAGE-KEY-DECK'], deckString);
    localStorage.setItem(CONSTANTS['STORAGE-KEY-HAND'], handString);
  }

  function handleReset() {
    setDeck(assembleDeck());
    setHand([]);
    localStorage.removeItem(CONSTANTS['STORAGE-KEY-TIME']);
    localStorage.removeItem(CONSTANTS['STORAGE-KEY-DECK']);
    localStorage.removeItem(CONSTANTS['STORAGE-KEY-HAND']);
  }

  function handleSort() {
    setHand(sortCards(hand));
  }

  function handleDraw(numToDraw) {
    const deckCopy = deck.slice(0);
    const removedCards = deckCopy.splice(0, numToDraw);
    setDeck(deckCopy);
    setHand([...hand, ...removedCards]);
  };

  function handleShuffle() {
    setDeck(shuffleCards(deck));
  }

  return (
    <>
      <MainHeader handleSave={handleSave} handleReset={handleReset}></MainHeader>
      <main className="main-body">
        <Notification msg={msg} hasMsg={hasMsg}></Notification>
        <Deck cards={deck} handleDraw={handleDraw} handleShuffle={handleShuffle} />
        <Hand cards={hand} sort={handleSort} />
      </main>
    </>
  );
}

export default Main;
