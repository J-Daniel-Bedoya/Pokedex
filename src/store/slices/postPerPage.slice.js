import { createSlice } from '@reduxjs/toolkit';
  
export const postPerPageSlice = createSlice({
  name: 'postPerPage',
  initialState: 7,
  reducers: {
    postPerPage: (state, actions) => {
      return actions.payload
    },
  }
})
  
export const { postPerPage } = postPerPageSlice.actions;
export default postPerPageSlice.reducer;