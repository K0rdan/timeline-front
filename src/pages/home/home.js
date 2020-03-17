import { useReducer, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { withApollo } from 'gql/client';
import GameContext, { gameReducer, defaultGameState } from 'utils/context/game';
import { Card } from 'components/common';

import styles from 'pages/home/styles.less';

const userQuery = gql`
  query {
    user {
      name
    }
  }
`;

export const Home = () => {
  const { loading, error, data } = useQuery(userQuery);
  if (error) {
    return <div>Error...</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (data) {
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
  }

  return null;
};

export default withApollo(Home);
