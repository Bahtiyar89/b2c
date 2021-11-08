import {
  F4_FETCH_COUNTRY_LIST,
  F4_CLEAR_COUNTRY_LIST,
  F4_GET_REGION_LIST,
  F4_CLEAR_REGION_LIST,
  F4_GET_CITIES_LIST,
  F4_CLEAR_CITIES_LIST,
  F4_GET_CEMETRY_LIST,
  F4_CLEAR_CEMETRY_LIST,
  CLEAR_ERRORS,
  LOADING,
} from './types';

export default (state, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };
    case F4_FETCH_COUNTRY_LIST:
      return { ...state, countryList: action.payload };
    case F4_CLEAR_COUNTRY_LIST:
      return { ...state, countryList: [] };

    case F4_GET_REGION_LIST:
      return { ...state, regionList: action.payload };
    case F4_CLEAR_REGION_LIST:
      return { ...state, regionList: [] };

    case F4_GET_CITIES_LIST:
      return { ...state, citiesList: action.payload };
    case F4_CLEAR_CITIES_LIST:
      return { ...state, citiesList: [] };

    case F4_GET_CEMETRY_LIST:
      return { ...state, cemeteryList: action.payload };
    case F4_CLEAR_CEMETRY_LIST:
      return { ...state, cemeteryList: [] };
    case CLEAR_ERRORS:
      return { ...state, error: null };

    default:
      return state;
  }
};
