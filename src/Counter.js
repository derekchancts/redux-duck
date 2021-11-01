import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/ducks/counter';


const Counter = (props) => {
  // const [count, setCount] = useState(0);
  // const count = useSelector(state => state.counter.count);

  const { name } = props;

  const dispatch = useDispatch();

  // const increment = () => {
  //   setCount(count + 1);
  // };

  // const decrement = () => {
  //   setCount(count - 1);
  // };

  const handleIncrement = () => {
    dispatch(increment())
  };

  const handleDecrement = () => {
    dispatch(decrement())
  };

  return (
    <div style={{ backgroundColor: 'grey', margin: '10px', padding: '10px 0'}} >
      {/* <h3> {`Count: ${count}`} </h3> */}
      {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
      <h2>{ name }</h2>
      <div>
        <button onClick={handleIncrement}> Increment </button>
        <button onClick={handleDecrement}> Decrement </button>
      </div>
    </div>
  )
}

export default Counter
