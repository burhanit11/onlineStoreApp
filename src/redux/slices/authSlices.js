const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: null,
};

const authUserSlice = createSlice({
  name: "auth-user",
  initialState: initialState,
  reducers: {
    setAuthUser: () => {},
    removeAuthUser: () => {},
  },
});

export const { setAuthUser, removeAuthUser } = authUserSlice.actions;

export default authUserSlice;
