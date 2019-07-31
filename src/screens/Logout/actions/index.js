import AsyncStorage from '@react-native-community/async-storage';

import { LOGOUT_USER_SUCCESS, LOGOUT_USER_FAIL, LOGOUT_USER_WAIT } from './actionTypes';

const logOutUserSuccess = (status) => ({
  status,
  type: LOGOUT_USER_SUCCESS,
});

const logOutUserFail = (status) => ({
  status,
  type: LOGOUT_USER_FAIL,
});

const logOutUserWait = (status) => ({
  status,
  type: LOGOUT_USER_WAIT,
});
export const logOutPending = () => dispatch => dispatch(logOutUserWait({ isLoggingOut: true }));

export const logOutUserAction = () => (async (dispatch) => {
  try {
    AsyncStorage.removeItem('token').then(() => {
      dispatch(logOutUserSuccess({ isLoggedOut: true, isLoggingOut: false, response: 'Logout successful' }));
    });
  } catch (e) {
    dispatch(logOutUserFail({ isLoggedOut: false, isLoggingOut: false, response: 'Logout unsuccessful' }));
  }
});

export default logOutUserAction;
