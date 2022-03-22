export const storeUser = (user) => {
  return {
    type: "STORE",
    payload: user,
  };
};
