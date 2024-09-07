import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dogPostSlice from "./Providers/dogPost-slice";

const reducers = combineReducers({dogPostSlice})

const dogsStore = configureStore({reducer: reducers})

export default dogsStore