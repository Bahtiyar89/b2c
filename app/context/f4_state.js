import React, { useReducer } from 'react';
import { useToast } from 'react-native-toast-notifications';

import F4Context from './f4_context';
import F4Reducer from './f4_reducer';
import { doGet } from '../utils/apiActions';
import {
  LOADING,
  F4_FETCH_COUNTRY_LIST,
  F4_CLEAR_COUNTRY_LIST,
  F4_GET_REGION_LIST,
  F4_GET_CITIES_LIST,
  F4_CLEAR_CITIES_LIST,
  F4_GET_CEMETRY_LIST,
  F4_CLEAR_CEMETRY_LIST,
  CLEAR_ERRORS,
} from './types';

const F4State = props => {
  const toast = useToast();

  const initialState = {
    loading: false,
    countryList: [],
    regionList: [],
    citiesList: [],
    cemeteryList: [],
    error: [],
  };
  const [state, dispatch] = useReducer(F4Reducer, initialState);

  const getCountries = () => {
    dispatch({ type: LOADING, payload: true });
    doGet('/locations/countries')
      .then(({ data }) => {
        dispatch({ type: LOADING, payload: false });
        dispatch({
          type: F4_FETCH_COUNTRY_LIST,
          payload: data.data,
        });
      })
      .catch(error => {
        toast.show(error.message, {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });
        dispatch({ type: LOADING, payload: false });
      });
  };

  const loadRegions = country_id => {
    console.log("country_id: ",country_id);
    dispatch({ type: LOADING, payload: true });
    doGet(`/locations/regions?countryId=${country_id}`)
      .then(({ data }) => {
        dispatch({ type: LOADING, payload: false });
        dispatch({
          type: F4_GET_REGION_LIST,
          payload: data.data,
        });
      })
      .catch(error => {
        toast.show(error.message, {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });
        dispatch({ type: LOADING, payload: false });
      });
  };

  const loadCities = region_id => {
    dispatch({ type: LOADING, payload: true });
    doGet(`/locations/cities?regionId=${region_id}`)
      .then(({ data }) => {
        dispatch({ type: LOADING, payload: false });
        dispatch({
          type: F4_GET_CITIES_LIST,
          payload: data.data,
        });
      })
      .catch(error => {
        toast.show(error.message, {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });
        dispatch({ type: LOADING, payload: false });
      });
  };

  const loadCemeteries = cityId => {
    dispatch({ type: LOADING, payload: true });
    doGet(`/locations/cemeteries?cityId=${cityId}`)
      .then(({ data }) => {
        dispatch({ type: LOADING, payload: false });
        dispatch({
          type: F4_GET_CEMETRY_LIST,
          payload: data.data,
        });
      })
      .catch(error => {
        toast.show(error.message, {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });
        dispatch({ type: LOADING, payload: false });
      });
  };

  return (
    <F4Context.Provider
      value={{
        loading: state.loading,
        error: state.error,
        countryList: state.countryList,
        regionList: state.regionList,
        citiesList: state.citiesList,
        cemeteryList: state.cemeteryList,
        getCountries,
        loadRegions,
        loadCities,
        loadCemeteries,
      }}>
      {props.children}
    </F4Context.Provider>
  );
};

export default F4State;
