import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchDogImage from "./getDogImage-Provider";

export const gettingDogsImage = createAsyncThunk("dogsImg", async () => {
  const urlImage = await fetchDogImage();
  return urlImage;
});

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
    builder.addCase(gettingDogsImage.fulfilled, (state, {payload}) => {
      state.imgs.push(payload.message)
      state.loading = false
    })
  },
});

export default dogPostSlice.reducer;
