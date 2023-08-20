import React, { useEffect, useState } from "react";
import "./players.scss";
import DataFetch from "../hooks/DataFetch";
import { useNavigate } from "react-router-dom";

export const Players = ({setNav}) => {
  const { getPlayers } = DataFetch();
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPlayers()
      .then((res) => {
        setPlayers(Object.values(res.val()));
      })
      .catch((error) => console.log(error));
    setNav(true)
  }, []);

  return (
    <div className="principalPlayers">
      <h1>Jugadores</h1>
      <hr />
      <div className="insidePrincipalPlayers">
        {players.sort((a, b)=>a.number - b.number ).map((elem, index) => {
          return (
            <div className="onePlayer" key={index} onClick={()=>navigate(`/players/${elem.id}`)}>
              <div className="onePlayerDiv" >
                <div className="number">
                  <p>
                  # <span>{elem.number}</span>
                  </p>
                </div>
                <p>
                  {elem.lastName}, {elem.name}
                </p>
              </div>
              <div className="height">
                <p>{elem.height} cms</p>
                <p className="noMobile">{elem.bornDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
