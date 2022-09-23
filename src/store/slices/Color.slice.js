import { createSlice } from "@reduxjs/toolkit";

export const ColorSlice = createSlice ({
  name: 'infoPokemon',
  initialState: false,
  reducers: {
    color: state => {
      return !state
    }
  },
});

export const { color } = ColorSlice.actions;

export default ColorSlice.reducer;