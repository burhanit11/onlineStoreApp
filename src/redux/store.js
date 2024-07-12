const { configureStore } = require("@reduxjs/toolkit");
const { default: rootReducer } = require("./slices");

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
