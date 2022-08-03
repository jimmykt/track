export const storeUser = (user) => {
  return {
    type: "STORE",
    payload: user,
  };
};

export const logOutUser = () => {
  return {
    type: "LOGOUT",
  };
};

//tes
