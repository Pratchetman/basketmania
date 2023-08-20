import React, { createContext, useEffect, useState } from "react";

export const BasketmaniaContext = createContext();

export const BasketmaniaProvider = (props) => {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const team = "bskmn";

  return (
    <BasketmaniaContext.Provider
      value={{ logged, setLogged, setUser, user, team }}
    >
      {props.children}
    </BasketmaniaContext.Provider>
  );
};
