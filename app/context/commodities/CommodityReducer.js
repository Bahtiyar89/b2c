import {
  GET_MONUMENT_SERVICES,
  LOADING,
  TOMB_SERVICES_MODAL,
  CLEAR_ERRORS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };
    case GET_MONUMENT_SERVICES:
      return { ...state, monuments: action.payload, modalTombCare: true };
    case TOMB_SERVICES_MODAL:
      return { ...state, modalTombCare: action.payload };
    case CLEAR_ERRORS:
      return { ...state, error: null };

    default:
      return state;
  }
};
