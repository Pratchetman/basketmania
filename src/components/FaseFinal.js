import React, { useEffect, useState } from "react";

import "./faseFinal.scss";
import DataFetch from "../hooks/DataFetch";
import { Team } from "./Team";

export const FaseFinal = ({ schedule, setSchedule }) => {
  // useEffect(() => {

  // }, []);
  console.log(schedule);

  return (
    <div className="principal-final">
      {schedule[0][0] && (
        <>
          <h1>Cuadro de Playoffs</h1>
          <div className="d-Flex">
            <h6>RONDA PREVIA</h6>
            <div className="match">
              <div className="teams">
                <Team teamId={schedule[0][0].home} />
                <Team teamId={schedule[0][0].away} />
              </div>
              <div className="points">
                <div className="p1">
                  <h5>
                    {schedule[0][0].pointsHome != ""
                      ? schedule[0][0].pointsHome
                      : "--"}
                  </h5>
                  <h5>
                    {schedule[0][0].pointsAway != ""
                      ? schedule[0][0].pointsAway
                      : "--"}
                  </h5>
                </div>
              </div>
            </div>
            <div className="match">
              <div className="teams">
                <Team teamId={schedule[0][1].home} />
                <Team teamId={schedule[0][1].away} />
              </div>
              <div className="points">
                <div className="p1">
                  <h5>
                    {schedule[0][1].pointsHome != ""
                      ? schedule[0][1].pointsHome
                      : "--"}
                  </h5>
                  <h5>
                    {schedule[0][1].pointsAway != ""
                      ? schedule[0][1].pointsAway
                      : "--"}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-Flex">
            <div className="vertical">
              <h6>CUARTOS DE FINAL</h6>
              <div className="match">
                <div className="teams">
                  <Team teamId={schedule[1][0].home} />

                  <Team teamId={schedule[1][0].away} />
                </div>
                <div className="points">
                  <div className="p1">
                    <h5>
                      {schedule[1][0].pointsHome != ""
                        ? schedule[1][0].pointsHome
                        : "--"}
                    </h5>
                    <h5>
                      {schedule[1][0].pointsAway != ""
                        ? schedule[1][0].pointsHome
                        : "--"}
                    </h5>
                  </div>
                  <div className="p1">
                    <h5>
                      {schedule[2][0].pointsHome != ""
                        ? schedule[2][0].pointsHome
                        : "--"}
                    </h5>
                    <h5>
                      {schedule[2][0].pointsAway != ""
                        ? schedule[2][0].pointsHome
                        : "--"}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="match">
                <div className="teams">
                  <Team teamId={schedule[1][1].home} />

                  <Team teamId={schedule[1][1].away} />
                </div>
                <div className="points">
                  <div className="p1">
                    <h5>{schedule[1][1].pointsHome != "" ? schedule[1][1].pointsHome : "--"}</h5>
                    <h5>{schedule[1][1].pointsAway != "" ? schedule[1][1].pointsAway : "--"}</h5>
                  </div>
                  <div className="p1">
                  <h5>{schedule[2][1].pointsHome != "" ? schedule[2][1].pointsHome : "--"}</h5>
                    <h5>{schedule[2][1].pointsAway != "" ? schedule[2][1].pointsAway : "--"}</h5>
                  </div>
                </div>
              </div>
              <div className="match">
                <div className="teams">
                  <Team teamId={schedule[1][2].home} />
                  <Team teamId={schedule[1][2].away} />
                </div>
                <div className="points">
                  <div className="p1">
                  <h5>{schedule[1][2].pointsHome != "" ? schedule[1][2].pointsHome : "--"}</h5>
                    <h5>{schedule[1][2].pointsAway != "" ? schedule[1][2].pointsAway : "--"}</h5>
                  </div>
                  <div className="p1">
                  <h5>{schedule[1][2].pointsHome != "" ? schedule[1][2].pointsHome : "--"}</h5>
                    <h5>{schedule[1][2].pointsAway != "" ? schedule[1][2].pointsAway : "--"}</h5>
                  </div>
                </div>
              </div>
              <div className="match">
                <div className="teams">
                  <Team teamId={schedule[1][3].home} />
                  <Team teamId={schedule[1][3].away} />
                </div>
                <div className="points">
                  <div className="p1">
                  <h5>{schedule[1][3].pointsHome != "" ? schedule[1][3].pointsHome : "--"}</h5>
                    <h5>{schedule[1][3].pointsAway != "" ? schedule[1][3].pointsAway : "--"}</h5>
                  </div>
                  <div className="p1">
                  <h5>{schedule[1][3].pointsHome != "" ? schedule[1][3].pointsHome : "--"}</h5>
                    <h5>{schedule[1][3].pointsAway != "" ? schedule[1][3].pointsAway : "--"}</h5>
                  </div>
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
        </>
      )}
    </div>
  );
};
