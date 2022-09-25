import { createSlice } from '@reduxjs/toolkit';
  
export const pokemonObjectSlice = createSlice({
  name: 'pokemonObjec',
  initialState: {},
  reducers: {
    pokemonObject: (state, actions) => {
      return actions.payload
    }
  }
})
  
export const { pokemonObject } = pokemonObjectSlice.actions;
export default pokemonObjectSlice.reducer;