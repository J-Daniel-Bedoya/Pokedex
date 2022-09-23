import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';  

export const ApiCosumptionSlice = createSlice({
  name: '',
  initialState: undefined,
  reducers: {
    
  }
})
  
// export const ApiCosumptionThunk = () => (dispatch) => {
//   return axios.get('https://pokeapi.co/api/v2/pokemon/1')
//   .then(res => dispatch(setPokemon(res.data))) 
// }

// export const { ApiCosumptionThunk } = ApiCosumptionSlice.actions;
// export default ApiCosumptionSlice.reducer;
