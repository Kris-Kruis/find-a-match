import ICard from '../models/card';

export default function isIdenticalCards(cardsData: ICard[]): boolean {
  if (!cardsData.length) {
    return false;
  }
  const cardType = cardsData[0].type;
  return !cardsData.some((item) => item.type !== cardType);
}
