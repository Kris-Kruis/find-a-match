import React, { useCallback, useEffect } from 'react';
import { useStore } from 'effector-react';

import './App.css';
import ICard from '../../models/card';
import Board from '../Board';
import isIdenticalCards from '../../utils/isIdenticalCards';
import {
  $appStoreCombined,
  changeVisibilityCards,
  incMatchCounter,
  resetAppStore,
  resetCoupleOfCards,
  updateCoupleOfCards,
} from '../../effector/init';

export default function App() {
  const { cards, coupleOfCards, matchCounter } = useStore($appStoreCombined);

  const isUserWon = useCallback((): boolean => (
    (cards.length / 2) === matchCounter
  ), [cards.length, matchCounter]);

  const checkCoupleOfCards = useCallback(() => {
    if (coupleOfCards.length < 2) {
      return;
    }

    if (!isIdenticalCards(coupleOfCards)) {
      changeVisibilityCards(coupleOfCards);
    } else {
      incMatchCounter();
    }

    resetCoupleOfCards();
  }, [coupleOfCards]);

  useEffect(() => {
    checkCoupleOfCards();
  }, [checkCoupleOfCards]);

  const openCard = (card: ICard) => {
    changeVisibilityCards([card]);
    setTimeout(() => updateCoupleOfCards(card), 500);
  };

  const getInfoAboutVictory = useCallback(() => {
    return isUserWon() ? 'Вы победили!' : '';
  }, [isUserWon]);

  const resetBoard = () => resetAppStore();

  return (
    <div className="app">
      <span className="info-about-victory">{getInfoAboutVictory()}</span>
      <div className="top-bar">
        <div className="button_reset" onClick={resetBoard} />
      </div>
      <Board
        cards={cards}
        openCard={openCard}
      />
    </div>
  );
}
