import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import { LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, LOGIN_USER_WAITING } from './actionTypes';

const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  user,
});

const loginUserWait = (status) => ({
  status,
  type: LOGIN_USER_WAITING,
});

const loginUserFail = (response) => ({
  response,
  type: LOGIN_USER_FAIL,
});

export const loginPending = () => (dispatch) => dispatch(loginUserWait({ isAuthenticating: true }));

const userDetails = {
  firstName: 'shine',
};

const loginUserAction = (payload) => (async (dispatch) => {
    try {
      const url = 'https://my-diary-collins.herokuapp.com';
      const response = await  axios.post(`${url}/api/v1/auth/login`, payload);
      const { token } = response.data;
      AsyncStorage.setItem('token', token).then(() => {
        dispatch(loginUserSuccess({ ...userDetails, token }));
      });
    } catch (error) {
      dispatch(loginUserFail('Login unsuccessful'));
    }
});
export default loginUserAction;
