export const SUBMIT = 'SUBMIT';

const initialState = '';

const searchReducer = (state = initialState, action) => {
  // switch (action.type) {
  //   case SUBMIT:
  //     return action.input;
  //   default:
  //     return state;
  // }
  console.log(state);
  console.log(action);
  return 'hello';
};

export default searchReducer;
