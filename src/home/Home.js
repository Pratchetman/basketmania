import React, { useEffect } from "react";
import "./home.scss";
import { useNavigate } from "react-router-dom";
export const Home = ({setNav}) => {
  const navigate = useNavigate();

  useEffect(() => {
    setNav(true)

  }, [])
  

  return (
    <div className="principalHome">
      <h1>Basketmanía 2023-2024</h1>
      <hr/>
      <div className="insidePrincipalHome">
        <div className="sectionHome players" onClick={()=>navigate("/players")}>
          <h5>Jugadores</h5>
        </div>
        <div className="sectionHome stats" onClick={()=>navigate("/stats")}>
          <h5>Estadísticas</h5>
        </div>
        <div className="sectionHome ranking" onClick={()=>navigate("/standings")}>
          <h5>Clasificación Liga Local</h5>
        </div>
        <div className="sectionHome team" onClick={()=>navigate("/about")}>
          <h5>El equipo</h5>
        </div>
      </div>
    </div>
  );
};
