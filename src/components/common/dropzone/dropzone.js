import { useContext } from 'react';
import GameContext, { gameActions } from 'utils/context/game';

import styles from 'components/common/dropzone/styles.less';

export const Dropzone = ({ id, children }) => {
  const { gameState, gameDispatch } = useContext(GameContext);

  const dynamicsStyles = {
    backgroundColor:
      gameState.draggingCard && gameState.sourceCardId === id ? 'red' : '',
  };

  const onDragStart = () =>
    gameDispatch({
      type: gameActions.setCard,
      id,
    });
  const onDrageOver = e => e.preventDefault();
  const onDrop = () =>
    gameDispatch({
      type: gameActions.moveCards,
      id,
    });

  return (
    <div
      className={styles.dropzone}
      draggable={true}
      onDragStart={onDragStart}
      onDragOver={onDrageOver}
      onDrop={onDrop}
      style={{ ...dynamicsStyles }}
    >
      {children}
    </div>
  );
};

export default Dropzone;
