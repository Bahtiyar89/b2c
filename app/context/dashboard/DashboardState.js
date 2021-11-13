import React, { useReducer } from 'react';
import axios from 'axios';
import { useToast } from 'react-native-toast-notifications';

import NavigationService from 'app/navigation/NavigationService';
import DashboardContext from './DashboardContext';
import DashboardReducer from './DashboardReducer';
import { CLEAR_ERRORS, TOMB_SERVICES_MODAL } from '../types';
import { doGet } from '../../utils/apiActions';
import utility from '../../utils/Utility';
import { TOMB_SERVICES, LOADING } from '../types';

const DashboardState = props => {
  const toast = useToast();

  const initialState = {
    tombcareService: [],
    loading: false,
    modalTombCare: false,
    error: [],
  };
  const [state, dispatch] = useReducer(DashboardReducer, initialState);

  const getTombCareService = async regionId => {
    dispatch({ type: LOADING, payload: true });
    doGet(
      `/tomb/care/services?codes=take_photo_monument&codes=find_monument&regionId=${regionId}`,
    )
      .then(({ data }) => {
        console.log('dataaa', data);
        dispatch({ type: LOADING, payload: false });
        dispatch({
          type: TOMB_SERVICES,
          payload: data.data,
        });
      })
      .catch(error => {
        console.log('error.message...:', error.message);
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
    <DashboardContext.Provider
      value={{
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
        getTombCareService,
        modalTombFalse,
      }}>
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardState;
