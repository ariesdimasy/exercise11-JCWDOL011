import axios from "axios";

const fetchUsers = () => {
  return axios.get("http://localhost:4440/users");
};

const addUser = (data) => {
  return axios.post("http://localhost:4440/users", data);
};

export default {
  fetchUsers,
  addUser,
};
