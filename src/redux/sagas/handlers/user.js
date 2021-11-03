import { put, call } from 'redux-saga/effects';
// import { setUser } from '../../ducks/user';
import { setUser } from '../../ducks/userSlice';
import { requestGetUser } from '../requests/user';


export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser)
    // console.log(response)
    // const { data } = response;
    // const { data } = response.data;
    // console.log(data)
    // yield put(setUser({ ...data }))  
    yield put(setUser(response.data.data))  // yield put - redux saga's way of dispatching a redux action
  } catch (error) {
    console.log(error)
  }
}