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
        case 'Add_Phone':
          return {
            ...state,
            phoneNumber:[action.payload, ...state.phoneNumber]
          }
      default:
        return state;
    }
  };
  