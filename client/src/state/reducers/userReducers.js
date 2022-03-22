const isLoggedReducers = (state = {}, action) => {
  switch (action.type) {
    case "STORE":
      return (state = action.payload);
    default:
      return state;
  }
};

export default isLoggedReducers;
