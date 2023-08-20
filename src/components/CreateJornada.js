import React, { useEffect, useState } from "react";
import "./createJornada.scss";
import { Form } from "react-bootstrap";

const matchDefault = {
  matchId: "",
  home: "",
  away: "",
  pointsHome: "",
  pointsAway: "",
};

const oneJornadaDefault = [
  matchDefault,
  matchDefault,
  matchDefault,
  matchDefault,
  matchDefault,
  matchDefault,
  matchDefault,
];

export const CreateJornada = ({
  jornadaNumber,
  teamsList,
  season,
  setSeason,
}) => {
  const [oneJornada, setOneJornada] = useState();

  useEffect(() => {
    const seasonDefault = [];
    for (let i = 1; i < teamsList.length; i++) {
      seasonDefault.push(oneJornadaDefault);
    }

    setSeason(seasonDefault);
  }, [teamsList]);

  const deepCopy = (arr) => {
    return arr.map((innerArray) => {
      return innerArray.map((obj) => ({ ...obj }));
    });
  };

  const handleJornada = (matchIndex, homeAway, e) => {
    //COPIA PROFUNDA
    const aux = deepCopy(season);

    homeAway == "home"
      ? (aux[jornadaNumber - 1][matchIndex].home = e.target.value)
      : (aux[jornadaNumber - 1][matchIndex].away = e.target.value);

    setSeason(aux);
  };
  
  console.log(season);

  return (
    <div className="principalCreateJornada">
      <div>
        {jornadaNumber != 0 ? (
          <h5>Partidos Jornada: {jornadaNumber}</h5>
        ) : (
          <h5>Selecciona jornada a editar</h5>
        )}
      </div>
      <div className="matches">
        {teamsList.map((elem, index) => {
          if (index + 1 <= teamsList.length / 2) {
            return (
              <div className="oneMatch">
                <div className="partido">
                  <p>{index + 1}.</p>
                </div>
                <div className="input">
                  {season[1]?.[1] && <Form.Select
                    className="formSelect"
                    aria-label="Seleccionar equipo"
                    name="home"
                    value={season[jornadaNumber - 1][index].home}
                    onChange={(e) => handleJornada(index, "home", e)}
                  >
                    <option>Sel. equipo</option>
                    {teamsList.map((elem, index2) => {
                      return (
                        <option
                          key={index2}
                          className="options"
                          value={elem.id}
                        >
                          {elem.name}
                        </option>
                      );
                    })}
                  </Form.Select>}
                </div>
                <div className="vs">
                  <h6>VS</h6>
                </div>
                <div className="input">
                  {season[1]?.[1] && <Form.Select
                    className="formSelect"
                    aria-label="Seleccionar equipo"
                    name="away"
                    value={season[jornadaNumber - 1][index].away}
                    onChange={(e) => handleJornada(index, "away", e)}
                  >
                    <option>Sel. equipo</option>
                    {teamsList.map((elem, index3) => {
                      return (
                        <option
                          key={index3}
                          className="options"
                          value={elem.id}
                        >
                          <p>{elem.name}</p>
                        </option>
                      );
                    })}
                  </Form.Select>}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
