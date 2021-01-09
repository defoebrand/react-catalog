export const SUBMIT = 'SUBMIT';
export const CREATE_ENTRY = 'CREATE_ENTRY';
export const DISPLAY_ENTRY = 'DISPLAY_ENTRY';
export const DISPLAY_ENTRIES = 'DISPLAY_ENTRIES';

export const runSearch = input => ({
  type: SUBMIT,
  input,
});

export const createEntries = entries => ({
  type: CREATE_ENTRY,
  entries,
});

export const displayEntry = entry => ({
  type: DISPLAY_ENTRY,
  entry,
});

export const displayEntries = display => ({
  type: DISPLAY_ENTRIES,
  display,
});
