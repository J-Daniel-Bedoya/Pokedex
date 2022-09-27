import { configureStore } from "@reduxjs/toolkit";
import ColorSlice from "./slices/Color.slice";
import currentPageSlice from "./slices/currentPage.slice";
import postPerPageSlice from "./slices/postPerPage.slice";
import numPageNoneSlice from "./slices/numPageNone.slice";
import pokemonSlice from "./slices/pokemon.slice";
import pokemonObjectSlice from "./slices/pokemonObject.slice";

export default configureStore({
  reducer: {
    colorChange: ColorSlice,
    currentPage: currentPageSlice,
    postPerPage: postPerPageSlice,
    numPageNoneIt: numPageNoneSlice,
    pokemon: pokemonSlice,
    pokemonObjec: pokemonObjectSlice
	}
})