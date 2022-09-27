import { createSlice } from '@reduxjs/toolkit';
  
export const colorPerPageSlice = createSlice({
  name: 'isVer',
  initialState: false,
  reducers: {
    stateTrue: (state) => {
      return !state
    },
    isVerFuction: (state, actions) =>{
      if (actions.payload){
        localStorage.setItem("color", "change-color")
      }else{
        localStorage.setItem("color", "")
      }
    }
  }
})
  
export const { isVerFuction, stateTrue } = colorPerPageSlice.actions;
export default colorPerPageSlice.reducer;