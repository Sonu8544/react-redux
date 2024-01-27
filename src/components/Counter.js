import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, increase, toggleCounter, multiply, devide } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch(increment());
  };

  const increaseHandler = () => {
    dispatch(increase(5)); // Increment by 5
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  const multiplyCounterHandler = () => {
    dispatch(multiply(2)); // Multiply by 2
  }

  const devideHandlar = () =>{
    dispatch(devide(2))
  }

  return (
    <main className={classes.counter}>
      <h1>-- Redux Counter --</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={multiplyCounterHandler}> Multiply By 2 </button>
        <button onClick={devideHandlar} > Devide By 2 </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
