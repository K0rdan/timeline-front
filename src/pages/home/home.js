import { useReducer, useContext } from 'react';
import { Card } from 'components/common';
import GameContext, { gameReducer, defaultGameState } from 'utils/context/game';

import styles from 'pages/home/styles.less';

export const Home = () => {
  const [state, dispatch] = useReducer(gameReducer, defaultGameState);
  const { cards } = useContext(GameContext);
  return (
    <div id={styles.homeWrapper}>
      <GameContext.Provider
        value={{ gameState: state, gameDispatch: dispatch }}
      >
        {cards.map(({ id, name }) => (
          <Card key={`Card-${id}`} id={id} title={name} />
        ))}
      </GameContext.Provider>
    </div>
  );
};

export default Card;
