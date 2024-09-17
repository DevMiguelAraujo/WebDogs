import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchBreedList from "./getDogBreedsList-provider"

export const gettingDogBreedList = createAsyncThunk("dogBreeds", async () => {
  const breedList = await fetchBreedList();
  return breedList;
});

const dogBreedSlice = createSlice({
  name: "listBreeds",
  initialState: {
    loading: false,
    breedList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(gettingDogBreedList.pending, (state) => {
      state.loading = true
    });
    builder.addCase(gettingDogBreedList.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.breedList = payload;
    });
  },
});

export default dogBreedSlice.reducer;
