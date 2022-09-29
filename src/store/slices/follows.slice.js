import { createSlice } from '@reduxjs/toolkit';
  
export const followsSlice = createSlice({
  name: 'follows',
  initialState: [],
  reducers: {
    setFollows: (state, actions) => {
      const update = [...state]
      const isFavorite = update.indexOf(actions.payload)
      if (isFavorite >= 0) {
        update.splice(isFavorite, 1)
      }else{
        update.push(actions.payload)
      }
      return update
    }
  }
})
  
export const { setFollows } = followsSlice.actions;
export default followsSlice.reducer;