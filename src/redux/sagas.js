import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOGIN_REQUEST, loginSuccess, loginFailure } from './actions';

function* loginSaga(action) {
  try {
    const { username, password } = action.payload;
    // Simulate authentication
    if ((username === 'user1' && password === 'user1') ||
        (username === 'user2' && password === 'user2') ||
        (username === 'user3' && password === 'user3') ||
        (username === 'user4' && password === 'user4') ||
        (username === 'admin' && password === 'admin')) {
      yield put(loginSuccess({ username }));
    } else {
      yield put(loginFailure('Invalid credentials'));
    }
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* watchLoginRequest() {
  yield takeEvery(LOGIN_REQUEST, loginSaga);
}

export default function* rootSaga() {
  yield all([
    watchLoginRequest(),
  ]);
}
