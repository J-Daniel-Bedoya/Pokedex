import { createSlice } from '@reduxjs/toolkit';
  
export const nameActualSlice = createSlice({
  name: 'nameActual',
  initialState: false,
  reducers: {
    setNameActual: (state, actions) => {
      return actions.payload
    }
  }
})
  
export const { setNameActual } = nameActualSlice.actions;
export default nameActualSlice.reducer;