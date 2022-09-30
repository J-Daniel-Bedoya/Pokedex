import { createSlice } from '@reduxjs/toolkit';
  
export const followsSlice = createSlice({
  name: 'follows',
  initialState: [],
  reducers: {
    setFollows: (state, actions) => {
      const storageArray =  JSON.parse(localStorage.getItem("arrayFollows"))
      if (storageArray !== null){
        state = storageArray
        console.log("hola")
      }
      const update = [...state]
      const isFavorite = update.indexOf(actions.payload)
      if (isFavorite >= 0) {
        update.splice(isFavorite, 1)
      }else{
        update.push(actions.payload)
      }
      console.log(update)
      localStorage.setItem("follows", update.length)
      localStorage.setItem("arrayFollows", JSON.stringify(update))
      return update
    }
  }
})
  
export const { setFollows } = followsSlice.actions;
export default followsSlice.reducer;