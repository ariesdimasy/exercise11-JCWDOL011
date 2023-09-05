import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tweetApi from "./../../../api/tweet";

export const fetchTweets = createAsyncThunk(
  "tweet/fetchTweetsStatus",
  async () => {
    const response = await tweetApi.fetchTweets();
    console.log("response => ", response);
    return response.data;
  }
);

const initialState = {
  tweetList: [],
};

export const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    getTweets: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTweets.fulfilled, (state, action) => {
      state.tweetList = action.payload;
    });
  },
});

export default tweetSlice.reducer;
