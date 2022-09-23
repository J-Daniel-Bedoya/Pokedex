import { configureStore } from "@reduxjs/toolkit";
import ColorSlice from "./slices/Color.slice";
import currentPageSlice from "./slices/currentPage.slice";
import postPerPageSlice from "./slices/postPerPage.slice";

export default configureStore({
  reducer: {
    colorChange: ColorSlice,
    currentPage: currentPageSlice,
    postPerPage: postPerPageSlice
	}
})