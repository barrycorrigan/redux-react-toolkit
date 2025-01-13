import React from 'react';
import "./styles.css";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, decrementByAmount } from './redux/counter'

function App() {
  const { count } = useSelector((state: { counter: { count: number } }) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      <button onClick={() => dispatch(decrementByAmount(5))}>Decrement by 5</button>
    </div>
  )
}

export default App
