import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import counterReducer from './ducks/counter';
import userReducer from './ducks/user';
import { watcherSaga } from './sagas/rootSaga';


const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer
})


const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const devTools = compose (
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



const store = createStore(reducer, devTools);
// const store = createStore(reducer, {}, applyMiddleware(...middlewares));


sagaMiddleware.run(watcherSaga);

export default store;



