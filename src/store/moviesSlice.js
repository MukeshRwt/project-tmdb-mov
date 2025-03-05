import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerDate: [],
  imageURL: "",
};
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setBannerDate: (state, action) => {
      state.bannerDate = action.payload;
    },
    setImageURL: (state, action) => {
      state.imageURL = action.payload;
    },
  },
});
export default moviesSlice.reducer;
export const { setBannerDate, setImageURL } = moviesSlice.actions;
