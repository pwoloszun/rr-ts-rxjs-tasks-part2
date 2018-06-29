import * as React from 'react';

import './index.css';

interface Props {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

function Counter(props: Props) {
  const { value, onIncrement, onDecrement } = props;

  return (
    <div className="async-counter">
      <h3>Counter</h3>
      <h2>Value: {value}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
