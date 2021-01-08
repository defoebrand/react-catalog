export const runSearch = input => ({
  type: 'SUBMIT',
  input,
});

export const createEntries = entries => ({
  type: 'CREATE_ENTRY',
  entries,
});
