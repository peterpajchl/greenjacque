import Card from './card';
import {
  sortCards,
  serialiseCards,
  deserialiseCards,
  assembleDeck,
  shuffleCards
} from './common';

describe('Class::Card', () => {

  test('it should produce a valid card with set suit and rank', () => {
    const card = new Card('H', '3');
    expect(card.suit).toEqual('H');
    expect(card.rank).toEqual('3');
  });
  
  test('it should throw an error for card with invalid input', () => {
    expect(() => new Card('U', '3')).toThrow(`Invalid suit "U" provided`);
  });

});

describe('Function::sortCards', () => {

  test('it should sort cards out-of-order into defined order', () => {
    const cardsOutOfOrder = [
      new Card('D', '8'),
      new Card('S', 'K'),
      new Card('H', '5'),
      new Card('H', '4'),
      new Card('C', 'J'),
      new Card('D', '6')
    ];

    const cardsInOrder = [
      new Card('C', 'J'),
      new Card('S', 'K'),
      new Card('H', '4'),
      new Card('H', '5'),
      new Card('D', '6'),
      new Card('D', '8')
    ];

    expect(sortCards(cardsOutOfOrder)).toEqual(cardsInOrder);
  });

});

describe('Function::serialiseCards', () => {

  test('it should serialise into a string for set cards', () => {
    const cards = [
      new Card('D', '8'),
      new Card('S', 'K'),
      new Card('H', '5'),
      new Card('H', '4'),
      new Card('C', 'J'),
      new Card('D', '6')
    ];
    
    expect(serialiseCards(cards)).toEqual('D:8|S:K|H:5|H:4|C:J|D:6');
  });

  // test for invalid input

});

describe('Function::deserialiseCards', () => {

  test('it should deserealise a string into an array of cards', () => {
    const validOutput = [
      new Card('D', '8'),
      new Card('S', 'K'),
      new Card('H', '5')
    ];

    expect(deserialiseCards('D:8|S:K|H:5')).toEqual(validOutput);
  });

  // test for invalid input

});

describe('Function::assembleDeck', () => {

  test('it should return an array of 52 cards', () => {
    const deck = assembleDeck();
    expect(deck.length).toEqual(52);
    expect(deck[0]).toBeInstanceOf(Card);
  });

  test('it should always return same original deck', () => {
    const deck1 = assembleDeck();
    const deck2 = assembleDeck();
    expect(deck1).toEqual(deck2);
  });

  test('it should have 2 of clubs as first card', () => {
    const deck = assembleDeck();
    expect(deck[0]).toEqual(new Card('C', '2'));
  });

});

describe('Function::shuffleCards', () => {

  test('it should shuffle the deck of cards', () => {
    const original = assembleDeck();
    expect(shuffleCards(original)).not.toBe(original);
  });

});