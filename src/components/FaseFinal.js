import React from "react";

import "./faseFinal.scss";

export const FaseFinal = () => {
  return (
    <div className="principal-final">
      <h1>Cuadro de Playoffs</h1>
      <div className="d-Flex">
        <div className="vertical">
          <h6>CUARTOS DE FINAL</h6>
          <div className="match">
            <div className="teams">
              <p>Amores y Rodríguez Golden Boys</p>
              <p>C.B. Banners</p>
            </div>
            <div className="points">
              <div className="p1"><h5>33</h5><h5>44</h5></div>
              <div className="p1"><h5>44</h5><h5>55</h5></div>
            </div>
          </div>
          <div className="match">
          <div className="teams">
              <p>Amores y Rodríguez Golden Boys</p>
              <p>C.B. Banners</p>
            </div>
            <div className="points">
              <div className="p1"><h5>33</h5><h5>44</h5></div>
              <div className="p1"><h5>44</h5><h5>55</h5></div>
            </div>
          </div>
          <div className="match">
          <div className="teams">
              <p>Amores y Rodríguez Golden Boys</p>
              <p>C.B. Banners</p>
            </div>
            <div className="points">
              <div className="p1"><h5>33</h5><h5>44</h5></div>
              <div className="p1"><h5>44</h5><h5>55</h5></div>
            </div>
          </div>
          <div className="match">
          <div className="teams">
              <p>Amores y Rodríguez Golden Boys</p>
              <p>C.B. Banners</p>
            </div>
            <div className="points">
              <div className="p1"><h5>33</h5><h5>44</h5></div>
              <div className="p1"><h5>44</h5><h5>55</h5></div>
            </div>
          </div>
        </div>
        <div className="vertical">
          <h6>SEMIFINAL</h6>
          <div className="match">
            <p>Equipo 2</p>
            <p>Equipo 7</p>
          </div>
          <div className="match">
            <p>Equipo 2</p>
            <p>Equipo 7</p>
          </div>
        </div>
        <div className="vertical">
          <h6>FINAL</h6>
          <div className="match">
            <p>Equipo 2</p>
            <p>Equipo 7</p>
          </div>
        </div>
      </div>
    </div>
  );
};
