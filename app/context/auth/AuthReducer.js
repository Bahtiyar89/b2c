import NavigationService from 'app/navigation/NavigationService';
import { CLEAR_ERRORS } from '../types';
import {
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FALSE_REDIRECT,
} from './AuthState';

export default (state, action) => {
  console.log('action...', action.type);
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      //  localStorage.setItem("user", JSON.stringify(action.payload.user));
      // localStorage.setItem("token", action.payload.token);
      NavigationService.navigate('Login');
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        redirectToReferrer: true,
        user: action.payload.user,
      };
    case FALSE_REDIRECT:
      return {
        ...state,
        redirectToReferrer: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
      // localStorage.removeItem('token');
      console.log('action.payload...', [action.payload]);
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: [action.payload],
      };
    case LOGOUT:
      //localStorage.removeItem('token');
      //localStorage.removeItem('user');
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        token: null,
        error: [],
      };
    case CLEAR_ERRORS:
      return { ...state, error: null };

    default:
      return state;
  }
};
