import { useState, useEffect, useRef } from 'react';
import { withApollo } from 'gql/client';
import Home from 'pages/home';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const animate = time => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;

      // Pass on a function to the setter of the state
      // to make sure we always have the latest state
      setCount(prevCount => (prevCount + deltaTime * 0.01) % 100);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []); // Make sure the effect runs only once

  return <div style={{ flex: 1 }}>{Math.round(count)}</div>;
};

const IndexComponent = () => {
  return (
    <div>
      <Counter />
      <Home />
    </div>
  );
};

export default withApollo(IndexComponent);
