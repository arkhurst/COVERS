import React, { useReducer, createContext } from 'react';
import { Symptoms } from '../data/data';
import AppReducer from './AppReducer';

const initialState = {
  reports: [],
  symptoms: Symptoms,
  userVitals: [],
  phoneNumber: [],
};

// create context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //  Actions
  function removeCaseReport(id) {
    dispatch({
      type: 'REMOVE_CASE',
      payload: id,
    });
  }

  function makeCaseReport(report) {
    dispatch({
      type: 'MAKE_CASE',
      payload: report,
    });
  }

  function addPhoneNumber(phone) {
    dispatch({
      type: 'ADD_PHONE',
      payload: phone,
    });
  }
  function deletePhoneNumber(phone){
    dispatch({
      type:'DELETE_PHONE',
      payload:phone
    })
  }
  function submitSymptom(symptom) {
    dispatch({
      type: 'SUBMIT_REPORT',
      payload: symptom,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        reports: state.reports,
        symptoms: state.symptoms,
        phoneNumber: state.phoneNumber,
        userVitals: state.userVitals,
        removeCaseReport,
        makeCaseReport,
        addPhoneNumber,
        deletePhoneNumber,
        submitSymptom,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};