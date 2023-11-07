//we do not write a return statement in this because there is a single
//parameter passed inside the const
//these both const are the actions

export const incNumber = () => {
  return {
    type: "INCREMENT",
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};
