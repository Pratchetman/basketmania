import React, { useEffect } from "react";
import "./preHome.scss";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const PreHome = ({ nav, setNav }) => {

  const navigate = useNavigate();

  useEffect(() => {
  setNav(false)
  }, [])
  
  return (
    <div className="principalPreHome">
      <div className="insidePrincipalPreHome">
        <img src="images/Basketmania1.png" alt="" />
        <div className="buttons">
          <Button
            className="enterButton"
            onClick={() => {
              navigate("/home");
              setNav(true);
            }}
          >
            Entrar
          </Button>
          <Button
            className="enterButton login"
            onClick={() => {
              navigate("/home");
              setNav(!nav);
            }}
          >
            Iniciar Sesión
          </Button>
        </div>
      </div>
    </div>
  );
};
