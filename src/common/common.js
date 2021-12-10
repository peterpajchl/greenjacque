import CONSTANTS from "./constants";
import Card from "./card";

function sortCards(hand) {
  const handCopy = hand.slice(0);
  handCopy.sort((a, b) => {
    const aSuit = CONSTANTS.SUITES.indexOf(a.suit);
    const bSuit = CONSTANTS.SUITES.indexOf(b.suit);
    const aRank = CONSTANTS.RANKS.indexOf(a.rank);
    const bRank = CONSTANTS.RANKS.indexOf(b.rank);
    if (aSuit === bSuit) return aRank - bRank
    else return aSuit - bSuit;
  });
  return handCopy;
}

function serialiseCards(arr) {
  return arr.map((c) => `${c.suit}:${c.rank}`).join('|');
}

function deserialiseCards(str) {
  if (!str) return [];
  return str.split('|').map((s) => {
    const [suite, rank] = s.split(':');
    return new Card(suite, rank);
  });
}

function assembleDeck() {
  return CONSTANTS.SUITES.flatMap((s) => CONSTANTS.RANKS.map((r) => new Card(s, r)));
}

function shuffleCards(arr) {
  const shuffled = arr.slice(0);
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export {
  assembleDeck,
  shuffleCards,
  serialiseCards,
  deserialiseCards,
  sortCards
};