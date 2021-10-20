import utility from '../../utils/Utility';
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
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      //  localStorage.setItem("user", JSON.stringify(action.payload.user));
      // localStorage.setItem("token", action.payload.token);
      //  NavigationService.navigate('Login');
      return {
        ...state,
        ...action.payload,
        isSigned: true,
        loading: false,
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
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: [action.payload],
      };
    case LOGOUT:
      return {
        ...state,
        isSigned: false,
        loading: false,
        user: null,
        error: [],
      };
    case CLEAR_ERRORS:
      return { ...state, error: null };

    default:
      return state;
  }
};
