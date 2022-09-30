import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
  
const pokemon = useSelector(state => state.pokemon)
export const colorFollowSlice = createSlice({
  name: 'colorFollow',
  initialState: false,
  reducers: {
    setColorFollow: (state, actions) => {
      // if (actions.payload === pokemon.id){
        return !state

      // }
    }
  }
})
  
export const { setColorFollow } = colorFollowSlice.actions;
export default colorFollowSlice.reducer;