import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { currentPage } from './currentPage.slice';
import { setIsLoading } from './isLoading.slice';
  
export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: [],
  reducers: {
    pokemons: (state, actions) => {
      return actions.payload
    }
  }
})

  
export const getPokemonArrayThunk = () => dispatch => {
  dispatch(setIsLoading(false))
  axios
  .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1155/")
  .then(res => dispatch(pokemons(res.data.results)))
  .finally(() => dispatch(setIsLoading(false)))
}
export const getPokemonCategory = (name) => dispatch => {
  dispatch(setIsLoading(true))
  axios
  .get(`https://pokeapi.co/api/v2/type/${name}`)
  .then((res) => {
    dispatch(pokemons(res.data.pokemon));
    dispatch(currentPage(1));
  })
  .finally(() => dispatch(setIsLoading(false)))
}

export const { pokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;
