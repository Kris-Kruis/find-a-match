import React from 'react';
import './Board.css';
import ICard from '../../models/card';
import Card from '../Card';

interface BoardProps {
  cards: ICard[];
  openCard(cardId: ICard): void;
}
export default function Board({ cards, openCard }: BoardProps) {
  return (
    <div className="board">
      {cards.map((item) => (
        <Card
          key={item.id}
          {...item}
          open={openCard}
        />
      ))}
    </div>
  );
}
