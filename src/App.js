
import React from 'react';
import './App.css';
import Counter from './Counter';
import { useSelector } from 'react-redux';



function App() {
  // const [count, setCount] = useState(0);

  const count = useSelector(state => state.counter.count);

  return (
    <div className="App">
      <h1>Redux Example</h1>
      <h2> The count: {count} </h2>
      <Counter name={"Batman and Robin"}/>
    </div>
  );
}

export default App;
