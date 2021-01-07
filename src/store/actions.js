import { SUBMIT } from './reducer';

const runSearch = input => ({
  type: SUBMIT,
  input,
});

export default runSearch;
