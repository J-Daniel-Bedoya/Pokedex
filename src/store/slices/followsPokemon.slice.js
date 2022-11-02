import { createSlice } from '@reduxjs/toolkit';
  
export const followsPokemonSlice = createSlice({
  name: 'followsPokemon',
  initialState: [1],
  reducers: {
    setFollowsPokemon: (state, actions) => {
      state.push(actions.payload)
      console.log(actions.payload)
    }
  }
})
  
export const { setFollowsPokemon } = followsPokemonSlice.actions;
export default followsPokemonSlice.reducer;