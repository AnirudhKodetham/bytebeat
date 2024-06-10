import { combineReducers } from 'redux';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from './actions';

// Initial state
const initialState = {
  isAuthenticated: false,
  username: '',
  error: ''
};

// Authentication reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        error: ''
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
