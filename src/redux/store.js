import { combineReducers, createStore } from 'redux';

import {
  SUBMIT, CREATE_ENTRY, DISPLAY_ENTRY, DISPLAY_ENTRIES,
} from './actions';

const initialState = '';

const superHeroReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ENTRY:
      return {
        entries: action.entries,
      };
    default:
      return state;
  }
};

const selectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ENTRY:
      return {
        entry: action.entry,
        display: 'singleCard',
      };
    case DISPLAY_ENTRIES:
      return {
        display: action.display,
      };
    default:
      return state;
  }
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT:
      return {
        filter: action.input,
      };

    default:
      return state;
  }
};

export const combinedReducers = combineReducers({
  superHeroReducer,
  selectionReducer,
  searchReducer,
});

export default createStore(combinedReducers);
