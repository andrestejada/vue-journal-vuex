// export const myMutation=(state)=>{

// }

export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};
export const updateEntry = (state, updateEntry) => {

  const idx = state.entries.map( e=>e.id ).indexOf(updateEntry.id)
  state.entries[idx] = updateEntry
  // state.entries = state.entries.map((entry) =>
  //   entry.id === updateEntry.id ? updateEntry : entry
  // );
};
export const addEntry = (state,entry) => {
  state.entries = [entry,...state.entries]
};
export const deleteEntry = (state,id) => {
  state.entries = state.entries.filter( e => e.id !== id)
};

export const clearEntries = (state,id) => {
  state.entries = []
};
