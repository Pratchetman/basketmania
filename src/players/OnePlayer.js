import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataFetch from "../hooks/DataFetch";
import "./oneplayer.scss";
export const OnePlayer = ({ setNav }) => {
  const id = useParams().player_id;
  const { getOnePlayer } = DataFetch();
  const [onePlayer, setOnePlayer] = useState({});
  console.log(onePlayer);

  useEffect(() => {
    getOnePlayer(id)
      .then((res) => {
        console.log(res);
        setOnePlayer(res.val());
        setNav(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="principalOnePlayer">
        <h1>
          {onePlayer.lastName}, {onePlayer.name}
        </h1>
        <hr />
        <div className="insidePrincipalOnePlayer">
          <div className="rowOnePlayer">
            <div>
              <div className="rowData">
                <h6>Nombre: </h6>
                <p>{onePlayer.name}</p>
              </div>
              <div className="rowData">
                <h6>Apellidos: </h6>
                <p>{onePlayer.lastName}</p>
              </div>
              <div className="rowData">
                <h6>Dorsal: </h6>
                <p># {onePlayer.number}</p>
              </div>
              <div className="rowData">
                <h6>Fecha de nacimiento: </h6>
                <p>{onePlayer.bornDate}</p>
              </div>
              <div className="rowData">
                <h6>Altura: </h6>
                <p>{onePlayer.height}</p>
              </div>
              <div className="rowData">
                <h6>Posición: </h6>
                <p>Ala Pivot</p>
              </div>
            </div>
            <div className="imgPlayer">
              {onePlayer.image ? (
                <img src={`${onePlayer.image}`} />
              ) : (
                <img src="/images/juank.png" />
              )}
            </div>
          </div>

          <div className="stats">
            <h5>Liga 2023-2024</h5>
            <div className="oneMatch">
              <div className="oneMatchDiv">
                <div className="match">
                  <p>
                    # 1<span>vs BANNERS</span>
                  </p>
                </div>
                <div className="oneMatchData">
                  <p>Pts: 8</p>
                  <p>Falt: 3</p>
                  <p>Final: 62 - 58</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
