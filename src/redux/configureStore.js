// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import createSagaMiddleware from 'redux-saga';
import counterReducer from './ducks/counter';
// import userReducer from './ducks/user';
import userSlice from './ducks/userSlice';
import { watcherSaga } from './sagas/rootSaga';


const reducer = combineReducers({
  counter: counterReducer,
  // user: userReducer
  user: userSlice
});


const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const devTools = compose (
//   applyMiddleware(...middleware),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );


// const store = createStore(reducer, {}, applyMiddleware(...middlewares));
// const store = createStore(reducer, devTools);
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: false
  }).concat(middleware)
  // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
  //   thunk: false
  // }).concat(middleware)],
})


sagaMiddleware.run(watcherSaga);

export default store;



