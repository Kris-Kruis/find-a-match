import CardTypes from './cardTypes';

export default interface ICard {
  id: string;
  isVisible: boolean;
  type: CardTypes;
  content: JSX.Element;
}
