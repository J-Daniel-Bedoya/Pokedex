import { createSlice } from '@reduxjs/toolkit';
  
export const colorPerPageSlice = createSlice({
  name: 'storageColor',
  initialState: false,
  reducers: {
    storageDate: (state, actions) => {
      return actions.payload
    }
  }
})
  
export const { storageDate } = colorPerPageSlice.actions;
export default colorPerPageSlice.reducer;