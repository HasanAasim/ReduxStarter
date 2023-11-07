import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers/Index";

const store = configureStore({
  reducer: rootReducer,
});

export default store;

//this is the previous method for implementing createStore
//createStore has now been deprecated
// import { createStore } from "@reduxjs/toolkit";
// import rootReducer from "./Reducers/Index";

// const store = configureStore(rootReducer);

// export default store;
