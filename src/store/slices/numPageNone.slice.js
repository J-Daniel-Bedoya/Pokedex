import { createSlice } from '@reduxjs/toolkit';
  
export const numPageNoneSlice = createSlice({
  name: 'numPageNone',
  initialState: true,
  reducers: {
    numPageNone: (state, actions) => {
      const numberTrueOrFalse = actions.payload
      return numberTrueOrFalse
    }
  }
})
  
export const { numPageNone } = numPageNoneSlice.actions;
export default numPageNoneSlice.reducer;