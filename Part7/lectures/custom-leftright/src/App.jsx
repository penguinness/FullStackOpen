import { useState } from 'react';

const useCounter = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue(value + 1);
  };

  const decrease = () => {
    setValue(value - 1);
  };

  const zero = () => {
    setValue(0);
  };

  return {
    value,
    increase,
    decrease,
    zero,
  };
};

const App = () => {
  const left = useCounter();
  const right = useCounter();

  return (
    <div>
      {left.value}
      <button onClick={left.increase}>left</button>
      <button onClick={right.increase}>right</button>
      {right.value}
    </div>
  );
};

export default App;
