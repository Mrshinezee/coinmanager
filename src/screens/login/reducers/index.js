import initialState from './initialState';
import { LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_WAITING } from '../actions/actionTypes';
import { LOGOUT_USER_SUCCESS, LOGOUT_USER_FAIL, LOGOUT_USER_WAITING } from '../../Logout/actions/actionTypes';

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...action,
        isAuthenticated: true,
        isAuthenticating: false,
        response: null,
      };

    case LOGIN_USER_FAIL:
      return {
        ...state,
        ...action,
        isAuthenticating: false,
      };

    case LOGIN_USER_WAITING:
      return {
        ...state,
        ...action.status,
        isLoggedOut: false,
        response: null,
      };

    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        ...action.status,
        isAuthenticated: false,
        user: {},
      };

    case LOGOUT_USER_WAITING:
      return {
        ...state,
        ...action,
      };

    case LOGOUT_USER_FAIL:
      return {
        ...state,
        ...action,
      };

    default:
      return state;
  }
};

export default loginReducer;
