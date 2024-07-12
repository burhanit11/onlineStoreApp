const { combineReducers } = require("@reduxjs/toolkit");
const { default: authUserSlice } = require("./authSlices");

const rootReducer = combineReducers({
  authUser: authUserSlice,
});

export default rootReducer;
