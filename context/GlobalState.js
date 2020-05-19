import React, { useReducer, createContext } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  reports: [],
  symptoms:[
    {
      id:1,
      name:'Fever',
      selected:[
        {id:1, sign:'None', value:0},
        {id:2, sign:'Mild', value:1},
        {id:3, sign:'Mid', value:2},
        {id:4, sign:'Semi', value:3},
        {id:5, sign:'High', value:4}
     ]
    },
    {
      id:2,
      name:'Aches and Pains ',
      selected:[
        {id:1, sign:'None', value:0},
        {id:2, sign:'Mild', value:1},
        {id:3, sign:'Mid', value:2},
        {id:4, sign:'Semi', value:3},
        {id:5, sign:'High', value:4}
     ]
    },
    {
      id:3,
      name:'Shortness of breath ',
      selected:[
        {id:1, sign:'None', value:0},
        {id:2, sign:'Mild', value:1},
        {id:3, sign:'Mid', value:2},
        {id:4, sign:'Semi', value:3},
        {id:5, sign:'High', value:4}
     ]
    },
    {
      id:4,
      name:' Sore Throat  ',
      selected:[
        {id:1, sign:'None', value:0},
        {id:2, sign:'Mild', value:1},
        {id:3, sign:'Mid', value:2},
        {id:4, sign:'Semi', value:3},
        {id:5,sign:'High', value:4}
     ]
    },
    {
      id:5,
      name:' Dry Cough  ',
      selected:[
        {id:1, sign:'None', value:0},
        {id:2, sign:'Mild', value:1},
        {id:3, sign:'Mid', value:2},
        {id:4, sign:'Semi', value:3},
        {id:5, sign:'High', value:4}
     ]
    },
    {
      id:6,
      name:'Headache',
      selected:[
        {id:1, sign:'None', value:0},
        {id:2, sign:'Mild', value:1},
        {id:3, sign:'Mid', value:2},
        {id:4, sign:'Semi', value:3},
        {id:5, sign:'High', value:4}
     ]
    },

  ],
  userVitals:[],
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

  function submitSymptom(symptom){
    dispatch({
      type:'SUBMIT_REPORT',
      payload:symptom
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
        submitSymptom,
        userVitals:state.userVitals
  
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
