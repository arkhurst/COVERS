export default (state, action) => {
  switch (action.type) {
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