import React from "react";
import "./navFoot.scss"
export const Footer = () => {
  return (
    <div className="principalFooter">
      <div className="footRrss">
        <img src="../images/BasketmaniaWhite2.png" alt="" />
        
      </div>
      <p>Realizado por Pratchett &copy; ✌️ {new Date().getFullYear()}.</p>
    </div>
  );
};
