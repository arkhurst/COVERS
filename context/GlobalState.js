import React, { useReducer, createContext } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  reports: [],
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
  return (
    <GlobalContext.Provider
      value={{
        reports: state.reports,
        removeCaseReport,
        makeCaseReport,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
