import { createSlice } from '@reduxjs/toolkit';
  
export const followsSlice = createSlice({
  name: 'follows',
  initialState: JSON.parse(localStorage.getItem("arrayFollows")),
  reducers: {
    setFollows: (state, actions) => {
      if (state === null){
        state = []
      }
      const update = [...state]
      const isFavorite = update.indexOf(actions.payload)
      if (isFavorite !== -1) {
        update.splice(isFavorite, 1)
      }else{
        update.push(actions.payload)
      }
      localStorage.setItem("arrayFollows", JSON.stringify(update))
      localStorage.setItem("follows", update.length)
      return update
    }
  }
})
  
export const { setFollows } = followsSlice.actions;
export default followsSlice.reducer;

