import { createSlice } from '@reduxjs/toolkit';
  
export const darkModeValueSlice = createSlice({
  name: 'darkMode',
  initialState: true,
  reducers: {
    darkMode: (state) => {
      const l = localStorage.getItem("color")
      if (l !== ""){
        localStorage.setItem("color", "")
      }
      if(state) {
        localStorage.setItem("color", "change-color")
        console.log(state)
      }else {
        console.log(state)
        localStorage.setItem("color", "")
      }
      return !state
  
    }
  }
})
  
export const { darkMode } = darkModeValueSlice.actions;
export default darkModeValueSlice.reducer;