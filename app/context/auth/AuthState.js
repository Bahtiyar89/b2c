import React, { useReducer } from 'react';
import axios from 'axios';
import { useToast } from 'react-native-toast-notifications';

import NavigationService from 'app/navigation/NavigationService';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import { CLEAR_ERRORS } from '../types';
import { CommonActions } from '@react-navigation/native';

import utility from '../../utils/Utility';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const MENUBAR = 'MENUBAR';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const FALSE_REDIRECT = 'FALSE_REDIRECT';
export const MODAL_VARIFY = 'MODAL_VARIFY';
export const MODAL_VARIFY_USER = 'MODAL_VARIFY_USER';
export const LOADING = 'LOADING';

const AuthState = props => {
  const toast = useToast();

  const initialState = {
    token: utility.getItem('token'),
    user: utility.getItemObject('user'),
    loading: false,
    isSigned: false,
    varifyId: '',
    modalVarify: false,
    modalVarifyUser: false,
    menuHamburger: true,
    error: [],
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //logout
  const signOut = async () => {
    try {
      utility.removeItem('token');
      utility.removeItem('user');
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
      dispatch({ type: LOADING, payload: false });
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: res.data.data, token },
      });
    } catch (err) {
      dispatch({ type: LOADING, payload: false });
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
      dispatch({ type: LOADING, payload: true });
      const res = await axios.post(
        `https://flexim.tk/funeral/api/v1/users/login`,
        FormData,
        config,
      );

      getUser(res.headers.authorization);
    } catch (err) {
      dispatch({ type: LOADING, payload: false });
      dispatch({
        type: LOGIN_FAIL,
        payload: err,
      });
    }
  };
  /* 
  //clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });
  const reverseRedirect = () => dispatch({ type: FALSE_REDIRECT });
*/
  //Register user customer
  const register = async FormData => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      dispatch({ type: LOADING, payload: true });
      const res = await axios.post(
        `https://flexim.tk/funeral/api/v1/users/register/customer`,
        FormData,
        config,
      );

      dispatch({ type: LOADING, payload: false });
      if (res.data.status === 'FAIL') {
        toast.show(res.data.message, {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });
        dispatch({ type: LOADING, payload: false });
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
    } catch (error) {
      toast.show(error.message, {
        type: 'warning',
        duration: 3000,
        animationType: 'zoom-in',
      });
      dispatch({ type: LOADING, payload: false });
      dispatch({ type: REGISTER_FAIL, payload: error.message });
    }
  };

  const approveVarify = async FormData => {
    const id = { id: FormData };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      dispatch({ type: LOADING, payload: true });
      const res = await axios.post(
        `https://flexim.tk/funeral/api/v1/users/sendVerifyCode`,
        id,
        config,
      );

      dispatch({ type: LOADING, payload: false });
      if (res.data.status === 'FAIL') {
        toast.show(res.data.message, {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });
        dispatch({
          type: REGISTER_FAIL,
          payload: res.data.message,
        });
      } else {
        dispatch({
          type: MODAL_VARIFY,
          payload: false,
        });
      }
    } catch (error) {
      dispatch({ type: LOADING, payload: false });
      dispatch({ type: REGISTER_FAIL, payload: error.message });
    }
  };

  const approveVarifyUser = async (FormData, navigation) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      dispatch({ type: LOADING, payload: true });
      const res = await axios.post(
        `https://flexim.tk/funeral/api/v1/users/verify`,
        FormData,
        config,
      );

      dispatch({ type: LOADING, payload: false });
      if (res.data.status === 'FAIL') {
        toast.show(res.data.message, {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });
        dispatch({
          type: REGISTER_FAIL,
          payload: res.data.message,
        });
      } else {
        toast.show('Успешно прошли варификацию, перенапраетесь...', {
          type: 'success',
          duration: 3000,
          animationType: 'zoom-in',
        });
        dispatch({
          type: MODAL_VARIFY_USER,
          payload: false,
        });
        navigation.navigate('Login');
      }
    } catch (error) {
      dispatch({ type: LOADING, payload: false });
      dispatch({ type: REGISTER_FAIL, payload: error.message });
    }
  };

  //Register user executor
  const registerExecutor = async FormData => {
    console.log('FormData : ', FormData);
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      dispatch({ type: LOADING, payload: true });
      const res = await axios.post(
        `https://flexim.tk/funeral/api/v1/users/register/customer`,
        FormData,
        config,
      );

      dispatch({ type: LOADING, payload: false });
      if (res.data.status === 'FAIL') {
        toast.show(res.data.message, {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });
        dispatch({ type: LOADING, payload: false });
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
    } catch (error) {
      toast.show(error.message, {
        type: 'warning',
        duration: 3000,
        animationType: 'zoom-in',
      });
      dispatch({ type: LOADING, payload: false });
      dispatch({ type: REGISTER_FAIL, payload: error.message });
    }
  };

  //menuHeader
  const menuBarShow = menu => {
    console.log('menu:', menu);
    dispatch({
      type: MENUBAR,
      payload: menu,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        error: state.error,
        isSigned: state.isSigned,
        varifyId: state.varifyId,
        user: state.user,
        loading: state.loading,
        modalVarify: state.modalVarify,
        modalVarifyUser: state.modalVarifyUser,
        token: state.token,
        menuHamburger: state.menuHamburger,
        /* token: state.token,
        
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
        menuBarShow,
        signin,
        signOut,
        register,
        approveVarify,
        approveVarifyUser,
        //Executor
        registerExecutor,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
