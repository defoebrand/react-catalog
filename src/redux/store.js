import { combineReducers, createStore } from 'redux';

import { SUBMIT, CREATE_ENTRY, DISPLAY_ENTRY } from './actions';

const initialState = '';

const initialHeroes = [];

const superHeroReducer = (state = initialHeroes, action) => {
  switch (action.type) {
    case CREATE_ENTRY:
      // console.log('create entry state', state);
      // console.log('create entry action', action);
      // localStorage.entries = JSON.stringify(action.entries);
      return {
        entries: action.entries,
      };

    case DISPLAY_ENTRY:
      console.log('display entry state', state);
      console.log('display entry action', action);
      // localStorage.entries = JSON.stringify(action.entry);
      return {
        entry: action.entry,
        display: 'singleCard',
      };

    default:
      // console.log('default entry state', state);
      return state;
  }
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT:
      // console.log('submit state', state.filter);
      // console.log('submit action', action);
      return {
        filter: action.input,
        display: 'manyCards',
      };

    default:
      // console.log('default submit state', state.filter);
      return state;
  }
};

const combinedReducers = combineReducers({
  superHeroReducer,
  searchReducer,
});

export default createStore(combinedReducers);
