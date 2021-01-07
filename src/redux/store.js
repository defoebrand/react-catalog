import { createStore } from 'redux';

const initialState = 'All';

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT':
      return { filter: action.input };
    default:
      return { filter: state };
  }
};

export default createStore(searchReducer);
