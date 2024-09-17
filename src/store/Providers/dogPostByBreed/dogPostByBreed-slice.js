import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchDogPostByBreed from "./getDogPostByBreed-provider";

export const gettingDogPostByBreed = createAsyncThunk("postByBreed", async (breed) => {
  const postByBreed = await fetchDogPostByBreed(breed);
  return postByBreed;
});

const dogPostByBreedSlice = createSlice({
  name: "postByBreed",
  initialState: {
    loading: false,
    byBreedPosts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(gettingDogPostByBreed.pending, (state) => {state.loading = true});
    builder.addCase(gettingDogPostByBreed.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.byBreedPosts.unshift(payload);
    });
  },
});

export default dogPostByBreedSlice.reducer;
