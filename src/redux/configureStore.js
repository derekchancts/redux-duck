import { createStore, combineReducers } from 'redux';
import counterReducer from './ducks/counter';

const reducer = combineReducers({
  counter: counterReducer
})


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();



const store = createStore(reducer, devTools);

export default store;