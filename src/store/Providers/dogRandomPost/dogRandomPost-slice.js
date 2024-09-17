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
    imgs: [
      "https://images.dog.ceo/breeds/kombai/Kombai-indian-Dog.jpg",
      "https://images.dog.ceo/breeds/malinois/n02105162_5680.jpg",
      "https://images.dog.ceo/breeds/mastiff-indian/Indian_Mastiff.jpg",
      "https://images.dog.ceo/breeds/kuvasz/n02104029_2150.jpg",
      "https://images.dog.ceo/breeds/setter-gordon/n02101006_3667.jpg",
      "https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_3660.jpg",
      "https://images.dog.ceo/breeds/hound-basset/n02088238_490.jpg",
    ],
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
