import { createSlice } from '@reduxjs/toolkit';
  
export const numbersPageSlice = createSlice({
  name: 'numbersPage',
  initialState: 0,
  reducers: {
    numPage: (state, actions) => {
      state = 1
      state-actions.payload
      return state
    },
    numPage2: (state) => {
      state = 9

      return state
    },
    number: (state) => {
      state = 1
      return state
    }
  }
})
  
export const { numPage } = numbersPageSlice.actions;
export default numbersPageSlice.reducer;