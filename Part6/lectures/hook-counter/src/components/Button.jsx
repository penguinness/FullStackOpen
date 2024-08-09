import { useCounterDispatch } from '../CounterContext';

const Button = ({ type, label }) => {
  const dispatch = useCounterDispatch();
  return <button onClick={() => dispatch({ type })}>{label}</button>;
};

export default Button;
