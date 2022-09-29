import { createSlice } from '@reduxjs/toolkit';
  
export const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: true,
  reducers: {
    setIsLoading: (state, actions) => {
      return actions.payload
    }
  }
})
  
export const { setIsLoading } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;