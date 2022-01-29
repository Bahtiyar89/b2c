import React, { useReducer } from 'react';
import axios from 'axios';
import { useToast } from 'react-native-toast-notifications';

import NavigationService from 'app/navigation/NavigationService';
import CommodityContext from './CommodityContext';
import CommodityReducer from './CommodityReducer';
import { CLEAR_ERRORS, TOMB_SERVICES_MODAL } from '../types';
import { doGet } from '../../utils/apiActions';
import utility from '../../utils/Utility';
import { GET_MONUMENT_SERVICES, LOADING } from '../types';

const CommodityState = props => {
  const toast = useToast();

  const initialState = {
    monuments: [],
    tombcareService: [],
    loading: false,
    modalTombCare: false,
    error: [],
  };
  const [state, dispatch] = useReducer(CommodityReducer, initialState);

  const getMonumentService = async regionId => {
    console.log('regionId', regionId);
    dispatch({ type: LOADING, payload: true });
    doGet(`/tomb/care/commodities?`, {
      page: '1',
      size: '20',
      type: 'monument',
      cityId: regionId,
    })
      .then(({ data }) => {
        console.log('data...:', data);
        dispatch({ type: LOADING, payload: false });
        dispatch({
          type: GET_MONUMENT_SERVICES,
          payload: data.data,
        });
      })
      .catch(error => {
        console.log('error...:', error);
        toast.show(error.message, {
          type: 'warning',
          duration: 4000,
          animationType: 'zoom-in',
        });
        dispatch({ type: LOADING, payload: false });
      });
  };

  const modalTombFalse = () =>
    dispatch({ type: TOMB_SERVICES_MODAL, payload: false });

  return (
    <CommodityContext.Provider
      value={{
        monuments: state.monuments,
        error: state.error,
        loading: state.loading,
        tombcareService: state.tombcareService,
        modalTombCare: state.modalTombCare,
        /* token: state.token,
        
        error: state.error,
        redirectToReferrer: state.redirectToReferrer,
        user: state.user, 
        forgotPassword,
        clearErrors,
        reverseRedirect, 
        */
        getMonumentService,
        modalTombFalse,
      }}>
      {props.children}
    </CommodityContext.Provider>
  );
};

export default CommodityState;
