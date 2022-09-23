import { configureStore } from "@reduxjs/toolkit";
import ColorSlice from "./slices/Color.slice";

export default configureStore({
  reducer: {
    colorChange: ColorSlice,
	}
})