import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dogPostSlice from "./Providers/dogRandomPost/dogRandomPost-slice";
import dogBreedsSlice from "./Providers/dogBreedsList/dogBreedsList-slice";
import dogPostByBreedSlice from "./Providers/dogPostByBreed/dogPostByBreed-slice";

const reducers = combineReducers({ dogPostSlice, dogBreedsSlice, dogPostByBreedSlice});
const dogsStore = configureStore({ reducer: reducers });
export default dogsStore;
