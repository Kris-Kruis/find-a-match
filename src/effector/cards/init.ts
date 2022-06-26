import { combine } from 'effector';
import {
  $cards,
  $coupleOfCards,
  $matchCounter,
  changeVisibilityCards,
  incMatchCounter,
  resetAppStore,
  resetCoupleOfCards,
  updateCoupleOfCards
} from '.';
import ICard from '../../models/card';
import makeCards from '../../utils/makeCards';

const handleChangeVisibilityCards = (store: ICard[], cards: ICard[]): ICard[] => {
  if (!cards.length) {
    return [...store];
  }

  const newCards: ICard[] = store.map((item) => Object.assign({}, item));

  cards.forEach((card) => {
    const cardIdx = store.findIndex((item) => item.id === card.id);
    newCards.splice(cardIdx, 1, {
      ...store[cardIdx],
      isVisible: !store[cardIdx].isVisible,
    });
  });

  return newCards;
};

const handleUpdateCoupleOfCards = (store: ICard[], card: ICard): ICard[] => {
  const newCoupleOfCards = [...store, card];

  if (newCoupleOfCards.length > 2) {
    newCoupleOfCards.shift();
  }

  return newCoupleOfCards;
};

const handleIncMatchCounter = (store: number) => store + 1;

$cards
  .on(changeVisibilityCards, handleChangeVisibilityCards)
  .on(resetAppStore, () => makeCards());
$coupleOfCards
  .on(resetCoupleOfCards, () => [])
  .on(updateCoupleOfCards, handleUpdateCoupleOfCards)
  .reset(resetAppStore);
$matchCounter
  .on(incMatchCounter, handleIncMatchCounter)
  .reset(resetAppStore);

const $appStoreCombined = combine({
  cards: $cards,
  coupleOfCards: $coupleOfCards,
  matchCounter: $matchCounter,
});

export {
  $appStoreCombined,
  changeVisibilityCards,
  incMatchCounter,
  resetAppStore,
  resetCoupleOfCards,
  updateCoupleOfCards,
};
