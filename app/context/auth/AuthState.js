import React, { useReducer } from 'react';
import axios from 'axios';
import { modifyLoader } from '../loader/loader_action';

import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import { CLEAR_ERRORS } from '../types';

import utility from '../../utils/Utility';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const FALSE_REDIRECT = 'FALSE_REDIRECT';

const AuthState = props => {
  const initialState = {
    // token: SyncStorage.getItem('token'),
    // user: JSON.parse(SyncStorage.getItem('user')),
    redirectToReferrer: false,
    loading: false,
    isSigned: false,
    error: [],
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //logout
  const signOut = async () => {
    try {
      utility.removeItem('TOKEN');
      utility.removeItem('USER');
      dispatch({
        type: LOGOUT,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //Login User
  const getUser = async token => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    try {
      const res = await axios.get(
        `https://flexim.tk/funeral/api/v1/users/info`,
        config,
      );
      utility.setItemObject('USER', res.data.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.data,
      });
    } catch (err) {
      console.log('err : ', err);
    }
  };
  const signin = async FormData => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      dispatch(modifyLoader(true));
      const res = await axios.post(
        `https://flexim.tk/funeral/api/v1/users/login`,
        FormData,
        config,
      );
      utility.setItem('TOKEN', res.headers.authorization);
      getUser(res.headers.authorization);
      dispatch(modifyLoader(false));
    } catch (err) {
      dispatch(modifyLoader(false));
      dispatch({
        type: LOGIN_FAIL,
        payload: err,
      });
    }
  };
  /*
  //Load User
  const signout = async () => {
    try {
      await axios.get(`${API}/v1/users/signout`);
      dispatch({
        type: LOGOUT,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //forgotPassword Errors
  const forgotPassword = async FormData => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      axios.post(`${API}/v1/users/forgotPassword`, FormData, config);
    } catch (error) {
      console.log('error11 ');
    }
  };

  //clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });
  const reverseRedirect = () => dispatch({ type: FALSE_REDIRECT });
*/
  //Register user
  const register = async FormData => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    dispatch(modifyLoader(true));
    const res = await axios.post(
      `https://flexim.tk/funeral/api/v1/users/register/customer`,
      FormData,
      config,
    );
    console.log('res...', res.data.status === 'FAIL');
    dispatch(modifyLoader(false));
    if (res.data.status === 'FAIL') {
      dispatch({
        type: REGISTER_FAIL,
        payload: res.data.message,
      });
    } else {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        error: state.error,
        isSigned: state.isSigned,
        /* token: state.token,
        loading: state.loading,
        error: state.error,
        redirectToReferrer: state.redirectToReferrer,
        user: state.user,
        //  register,
        forgotPassword,
        clearErrors,
        reverseRedirect,
        signin,
        signout
        */
        signin,
        signOut,
        register,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
