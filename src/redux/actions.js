// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

// Action Creators
export const loginRequest = (username, password) => ({
  type: LOGIN_REQUEST,
  payload: { username, password }
});

export const loginSuccess = (username) => ({
  type: LOGIN_SUCCESS,
  payload: { username }
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: { error }
});

export const logout = () => ({
  type: LOGOUT
});
