import { createSlice } from '@reduxjs/toolkit';
  
export const userNameSlice = createSlice({
  name: 'name',
  initialState: "",
  reducers: {
    nameSucces: (state, actions) => {
      const name = actions.payload
      return name
    }
  }
})
  
export const { nameSucces } = userNameSlice.actions;
export default userNameSlice.reducer;