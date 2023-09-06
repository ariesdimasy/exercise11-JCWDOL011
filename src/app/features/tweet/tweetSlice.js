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

export const postTweet = createAsyncThunk(
  "tweet/postTweetStatus",
  async (data) => {
    const response = await tweetApi.postTweet(data);
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
    builder.addCase(postTweet.fulfilled, () => {
      // redirect
      fetchTweets();
    });
  },
});

export default tweetSlice.reducer;
