import React, { useMemo } from 'react';
import classNames from 'classnames';
import './Card.css';
import ICard from '../../models/card';

type CardProps = ICard & {
  open(cardId: ICard): void;
};

export default function Card({ open, ...props }: CardProps) {
  const { isVisible, content } = props;

  const cardClassNames = useMemo(() => classNames({
    'card': true,
    'card_visible': isVisible,
  }), [isVisible]);

  const handleClick = () => {
    if (isVisible) {
      return;
    };
    open(props);
  };

  return (
    <div className={cardClassNames} onClick={handleClick}>
      {isVisible ? content : null}
    </div>
  );
}
