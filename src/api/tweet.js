import axios from "axios";

const fetchTweets = () => {
  return axios.get("http://localhost:4440/tweets");
};

export default {
  fetchTweets,
};
