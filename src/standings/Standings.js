import React, { useEffect } from "react";

export const Standings = ({ setNav }) => {
  useEffect(() => {
    setNav(true);
  }, []);

  return <div>Standings</div>;
};
