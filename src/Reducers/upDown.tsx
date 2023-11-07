//we declare the state as the inital state so that the structure of the 
//code is well-defined

const intialState = 0;
const changeTheNumber = (state = intialState, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
};

export default changeTheNumber;
