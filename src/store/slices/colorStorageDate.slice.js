import { createSlice } from '@reduxjs/toolkit';
  
export const colorStorageDateSlice = createSlice({
  name: 'storageColor',
  initialState: false,
  reducers: {
    storageDate: (state, actions) => {
      return actions.payload
    }
  }
})
  
export const { storageDate } = colorStorageDateSlice.actions;
export default colorStorageDateSlice.reducer;