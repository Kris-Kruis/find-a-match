import ICard from '../models/card';
import unicorn1 from '../images/unicorn1.png';
import unicorn2 from '../images/unicorn2.png';
import unicorn3 from '../images/unicorn3.png';
import unicorn4 from '../images/unicorn4.png';
import unicorn5 from '../images/unicorn5.png';
import unicorn6 from '../images/unicorn6.png';
import CardTypes from '../models/cardTypes';
import makeRandomArr from './makeRandomArr';
import generateID from './generateID';

const CARDS: ICard[] = [
  {
    id: generateID(),
    isVisible: false,
    type: CardTypes.One,
    content: <img src={unicorn1} alt="unicorn1" />,
  },
  {
    id: generateID(),
    isVisible: false,
    type: CardTypes.Two,
    content: <img src={unicorn2} alt="unicorn2" />,
  },
  {
    id: generateID(),
    isVisible: false,
    type: CardTypes.Three,
    content: <img src={unicorn3} alt="unicorn3" />,
  },
  {
    id: generateID(),
    isVisible: false,
    type: CardTypes.Four,
    content: <img src={unicorn4} alt="unicorn4" />,
  },
  {
    id: generateID(),
    isVisible: false,
    type: CardTypes.Five,
    content: <img src={unicorn5} alt="unicorn5" />,
  },
  {
    id: generateID(),
    isVisible: false,
    type: CardTypes.Six,
    content: <img src={unicorn6} alt="unicorn6" />,
  },
  {
    id: generateID(),
    isVisible: false,
    type: CardTypes.Six,
    content: <img src={unicorn6} alt="unicorn6" />,
  },
  {
    id: generateID(),
    isVisible: false,
    type: CardTypes.Five,
    content: <img src={unicorn5} alt="unicorn5" />,
  },
  {
    id: generateID(),
    isVisible: false,
    type: CardTypes.Four,
    content: <img src={unicorn4} alt="unicorn4" />,
  },
  {
    id: generateID(),
    isVisible: false,
    type: CardTypes.Three,
    content: <img src={unicorn3} alt="unicorn3" />,
  },
  {
    id: generateID(),
    isVisible: false,
    type: CardTypes.Two,
    content: <img src={unicorn2} alt="unicorn2"  />,
  },
  {
    id: generateID(),
    isVisible: false,
    type: CardTypes.One,
    content: <img src={unicorn1} alt="unicorn1" />,
  },
];

export default function makeCards() {
  return CARDS.sort(makeRandomArr);
}
