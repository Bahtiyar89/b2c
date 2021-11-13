import utility from '../../utils/Utility';
import { CLEAR_ERRORS } from '../types';
import {
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FALSE_REDIRECT,
  LOADING,
  MODAL_VARIFY,
  MODAL_VARIFY_USER,
} from './AuthState';

export default (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };
    case MODAL_VARIFY:
      return { ...state, modalVarify: action.payload, modalVarifyUser: true };

    case MODAL_VARIFY_USER:
      return { ...state, modalVarifyUser: action.payload };
    case REGISTER_SUCCESS:
      return {
        ...state,
        varifyId: action.payload.data.id,
        isSigned: false,
        loading: false,
        modalVarify: true,
      };
    case LOGIN_SUCCESS:
      utility.setItemObject('user', action.payload.user);
      utility.setItem('token', action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        isSigned: true,
        loading: false,
        user: action.payload.user,
      };
    case FALSE_REDIRECT:
      return {
        ...state,
        redirectToReferrer: false,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        token: null,
        isSigned: false,
        loading: false,
        user: null,
        error: action.payload,
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
