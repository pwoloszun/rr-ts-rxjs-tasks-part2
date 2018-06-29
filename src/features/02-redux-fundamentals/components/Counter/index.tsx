import * as React from 'react';

import './index.css';

interface Props {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  squareValue?: number;
  onReset?: () => void;
}

function Counter(props: Props) {
  const { value, onIncrement, onDecrement, squareValue, onReset } = props;

  return (
    <div className="counter">
      <h3>Counter</h3>
      <h2>Value: {value}</h2>
      <h5>Square: {squareValue}</h5>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default Counter;
