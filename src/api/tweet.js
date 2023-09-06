import axios from "axios";

const fetchTweets = () => {
  return axios.get("http://localhost:4440/tweets");
};

const postTweet = (data) => {
  return axios.post("http://localhost:4440/tweets", data);
};

export default {
  fetchTweets,
  postTweet,
};
