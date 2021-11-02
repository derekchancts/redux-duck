import React, { useEffect, useState } from 'react';
import './App.css';
import Counter from './Counter';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from './redux/ducks/user';
import axios from 'axios'



function App() {
  // const [count, setCount] = useState(0);
  // const [todos, setTodos] = useState([]);
  
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    // axios.get(`https://my-json-server.typicode.com/derekchancts/demo/users`)
    // axios.get(`http://localhost:5000/users`)
    //  .then(res => {
    //   setTodos(res.data)
    //  })
  }, [dispatch]);

  // console.log(todos)

  
  const user = useSelector(state => state.user.user);
  // console.log(user)


  const count = useSelector(state => state.counter.count);

  return (
    <div className="App">
      { user && (
        user.map(user => (
          // <ul key={user.id}>
          //   <li style={{ listStyle: "none"}}>
          //     Name: {user.name}
          //   </li>
          // </ul>
          <h3 key={user.id}>{user.name}</h3>
        ))
      )

      }
      <h1>Redux Example</h1>
      <h2> The count: {count} </h2>
      <Counter name={"Batman and Robin"}/>
    </div>
  );
}

export default App;
