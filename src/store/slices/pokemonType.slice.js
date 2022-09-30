import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const pokemonTypeSlice = createSlice({
  name: 'pokemonType',
  initialState: [],
  reducers: {
    selectType: (state, actions) => {
      return actions.payload
    }
  }
})
export const getSelectTypeThunk = () => dispatch => {
  axios
  .get("https://pokeapi.co/api/v2/type/")
  .then((res) => {
      dispatch(selectType(res.data.results));
  })
}

export const { selectType } = pokemonTypeSlice.actions;
export default pokemonTypeSlice.reducer;