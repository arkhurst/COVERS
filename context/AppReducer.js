export default (state, action) => {
  switch (action.type) {
    // case "RESTORE_TOKEN":
    //   return {
    //     ...state,
    //     userToken: action.userToken
    //   }
    // case "SIGN_IN":
    //     return {
    //       ...state,
    //       userToken: action.payload
    //     }  
    // case "SIGN_IN":
    //     return {
    //       ...state,
    //         userToken:null
    //       }      
    case 'REMOVE_CASE':
      return {
        ...state,
        reports: state.reports.filter(report => report.id !== action.payload),
      };
    case 'MAKE_CASE':
      return {
        ...state,
        reports: [action.payload, ...state.reports],
      };
    case 'ADD_PHONE':
      return {
        ...state,
        phoneNumber: [action.payload, ...state.phoneNumber],
      };
    case 'DELETE_PHONE':
       return {
         ...state,
         phoneNumber: state.phoneNumber.splice(1,1)
       }  
    case 'SUBMIT_REPORT':
      return {
        ...state,
        userVitals: [action.payload],
      };
    default:
      return state;
  }
};