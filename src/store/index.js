import { configureStore } from "@reduxjs/toolkit";
import ColorSlice from "./slices/Color.slice";
import currentPageSlice from "./slices/currentPage.slice";
import postPerPageSlice from "./slices/postPerPage.slice";
import numPageNoneSlice from "./slices/numPageNone.slice";
import pokemonSlice from "./slices/pokemon.slice";
import pokemonTypeSlice from "./slices/pokemonType.slice";
import pokemonObjectSlice from "./slices/pokemonObject.slice";
import colorStorageDateSlice from "./slices/colorStorageDate.slice";
import nameActualSlice from "./slices/nameActual.slice";
import isLoadingSlice from "./slices/isLoading.slice";
import followsSlice from "./slices/follows.slice";
import darkModeValueSlice from "./slices/darkModeValue.slice";
import numbersPageSlice from "./slices/numbersPage.slice";
import followsPokemonSlice from "./slices/followsPokemon.slice";

export default configureStore({
  reducer: {
    colorChange: ColorSlice,
    currentPage: currentPageSlice,
    postPerPage: postPerPageSlice,
    numPageNoneIt: numPageNoneSlice,
    pokemon: pokemonSlice,
    pokemonType: pokemonTypeSlice,
    pokemonObjec: pokemonObjectSlice,
    storageColor: colorStorageDateSlice,
    nameActual: nameActualSlice,
    isLoading: isLoadingSlice,
    follows: followsSlice,
    darKMode: darkModeValueSlice,
    numbersPage: numbersPageSlice,
    followsPokemon: followsPokemonSlice
	}
})