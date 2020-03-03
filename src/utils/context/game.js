import { createContext } from 'react';
import { find, findIndex } from 'lodash';

export const gameActions = {
  setCard: 'SET_CARD',
  moveCards: 'MOVE_CARDS',
};
export const defaultGameState = {
  draggingCard: null,
  sourceCardId: null,
  cards: [
    {
      id: 1,
      name: 'TEST1',
      date: new Date(2001),
    },
    {
      id: 2,
      name: 'TEST2',
      date: new Date(2002),
    },
    {
      id: 3,
      name: 'TEST3',
      date: new Date(2003),
    },
  ],
};
export const gameReducer = (state, action) => {
  switch (action.type) {
    case gameActions.setCard:
      const foundCard = find(state.cards, ({ id }) => id === action.id);
      return {
        ...state,
        draggingCard: true,
        sourceCardId: foundCard !== -1 ? foundCard.id : null,
      };
    case gameActions.moveCards:
      const sourceIndex = findIndex(
        state.cards,
        ({ id }) => id === state.sourceCardId,
      );
      const destIndex = findIndex(state.cards, ({ id }) => id === action.id);
      if (sourceIndex !== -1 && destIndex !== -1) {
        const tmp = state.cards[sourceIndex];
        state.cards[sourceIndex] = state.cards[destIndex];
        state.cards[destIndex] = tmp;
      }
      return {
        ...state,
        draggingCard: false,
      };
    default:
      return state;
  }
};

export const GameContext = createContext(defaultGameState);
export default GameContext;
