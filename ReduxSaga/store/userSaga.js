// store/userSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUsersSuccess, fetchUsersFailure, addUserSuccess, addUserFailure, fetchUsersStart, addUserStart, findUserByNameStart, findUserByNameSuccess, findUserByNameFailure } from './userSlice';
import { getAllUser, addUser, findUserByName } from '../screens/api/userAPI';

// Worker Saga: Fetch Users
function* fetchUsersSaga() {
  try {
    const users = yield call(getAllUser);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error.toString()));
  }
}

// Worker Saga: Add User
function* addUserSaga(action) {
  try {
    const newUser = yield call(addUser, action.payload);
    yield put(addUserSuccess(newUser));
  } catch (error) {
    yield put(addUserFailure(error.toString()));
  }
}

// Worker Saga: Find User by Name
function* findUserByNameSaga(action) {
  try {
    const user = yield call(findUserByName, action.payload);
    yield put(findUserByNameSuccess(user[0])); // assume API returns an array, get the first user
  } catch (error) {
    yield put(findUserByNameFailure(error.toString()));
  }
}

// Watcher Saga
export default function* userSaga() {
  yield takeLatest(fetchUsersStart.type, fetchUsersSaga);
  yield takeLatest(addUserStart.type, addUserSaga);
  yield takeLatest(findUserByNameStart.type, findUserByNameSaga);
}
