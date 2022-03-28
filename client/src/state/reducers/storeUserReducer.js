export const storeUser = (state = {}, action) => {
  switch (action.type) {
    case "STORE":
      return (state = action.payload);
    case "LOGOUT":
      return (state = {});
    default:
      return state;
  }
};

export default storeUser;
