import React, { useEffect } from "react";

export const Stats = ({ setNav }) => {
  useEffect(() => {
    setNav(true);
  }, []);
  return <div>Stats</div>;
};
