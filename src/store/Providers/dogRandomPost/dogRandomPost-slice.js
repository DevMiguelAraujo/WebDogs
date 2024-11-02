import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchDogImage from "./getRandomDogImage-provider";

export const gettingDogsImage = createAsyncThunk(
  "dogsImg",
  async (numberOfImages) => {
    const urlImage = await fetchDogImage(numberOfImages);
    return urlImage;
  }
);

const dogPostSlice = createSlice({
  name: "dogPost",
  initialState: {
    loading: false,
    imgs: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(gettingDogsImage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(gettingDogsImage.fulfilled, (state, { payload }) => {
      payload.forEach((img) => {
        state.imgs.push(img);
      });
      state.loading = false;
    });
  },
});

export default dogPostSlice.reducer;
