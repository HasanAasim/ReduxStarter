//the combinereducers is called to combine the reducers to make them into
//a root reducer

// import changeTheNumber from "./upDown";

// import { combineReducers } from "redux";

// const rootReducer = combineReducers({
//   changeTheNumber
// });

// export default rootReducer;

import { combineReducers } from "redux";
import changeTheNumber from "./upDown";

const rootReducer = combineReducers({
  changeTheNumber,
});

export default rootReducer;
