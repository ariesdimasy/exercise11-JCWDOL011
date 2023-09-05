import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import userApi from "./../../../api/user";

export const fetchUsers = createAsyncThunk(
  "user/fetchUsersStatus",
  async () => {
    const response = await userApi.fetchUsers();
    //console.log("response => ", response.data);
    return response.data;
  }
);

export const addUser = createAsyncThunk("user/addUserStatus", async (data) => {
  const response = await userApi.addUser(data);
  //console.log("response => ", response.data);
  return response.data;
});

const initialState = {
  userList: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.userList = action.payload;
    });
    builder.addCase(addUser.fulfilled, () => {});
  },
});

export default userSlice.reducer;
