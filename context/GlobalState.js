import React, { useReducer, createContext } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  reports: [],
  symptoms:[
    {id:1, sign:'None', value:0, selected:true},
    {id:2, sign:'Mild', value:1, selected:false},
    {id:3, sign:'Mid', value:2, selected:false},
    {id:4, sign:'Semi', value:3, selected:false},
    {id:5, sign:'High', value:4, selected:false}
  ],
  phoneNumber:[]
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

  function addPhoneNumber(phone){
     dispatch({
       type:'Add_Phone',
       payload:phone
     })
  }
  
  return (
    <GlobalContext.Provider
      value={{
        reports: state.reports,
        removeCaseReport,
        makeCaseReport,
        symptoms:state.symptoms,
        phoneNumber:state.phoneNumber,
        addPhoneNumber,
  
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
