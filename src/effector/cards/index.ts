import { createEvent, createStore } from 'effector';
import ICard from '../../models/card';
import makeCards from '../../utils/makeCards';

export const resetAppStore = createEvent();
export const resetCoupleOfCards = createEvent();
export const updateCoupleOfCards = createEvent<ICard>();
export const changeVisibilityCards = createEvent<ICard[]>();
export const incMatchCounter = createEvent();

export const $cards = createStore<ICard[]>(makeCards());
export const $coupleOfCards = createStore<ICard[]>([]);
export const $matchCounter = createStore<number>(0);
