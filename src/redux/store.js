import { createStore } from 'redux';

const initialState = 'All';

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT':
      return {
        filter: action.input,
      };
    case 'CREATE_ENTRY':
      localStorage.entries = JSON.stringify(action.entries);
      return {
        entries: action.entries,
      };

    default:
      return {
        filter: state,
      };
  }
};

export default createStore(searchReducer);
