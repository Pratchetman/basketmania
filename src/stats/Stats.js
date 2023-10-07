import React, { useEffect, useState } from "react";
import DataFetch from "../hooks/DataFetch";
import "./stats.scss";
import { Team } from "../components/Team";
import { useParams } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import checkComplete from "../utils/checkcomplete";
import { FaseFinal } from "../components/FaseFinal";

export const Stats = ({ setNav }) => {
  const edit = useParams().editor == "edit";
  const { getShedule } = DataFetch();
  const [jornada, setJornada] = useState(0);
  const [schedule, setSchedule] = useState();
  const [ronda, setRonda] = useState("round1");
  const [group, setGroup] = useState("grupoA");
  const [message, setMessage] = useState("");
  const { addRound1, finishRound, finishSecondRound } = DataFetch();

  console.log(schedule);
  console.log(ronda);
  useEffect(() => {
    setNav(true);
    getShedule(ronda)
      .then((res) => {
        console.log(res.val());
        if (res.val()) {
          setSchedule(res.val());
        } else {
          if (ronda != "fase_final")
          {
            setMessage(
            "No existe ningún calendario creado, consulte con el administrador"
          );
          }
          setSchedule("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ronda, group]);

  const handleSelect = (e) => {
    setMessage("");
    setRonda(e.target.value);
    setGroup("grupoA");
  };

  const deepCopy = (arr) => {
    return arr.map((innerArray) => {
      return innerArray.map((obj) => ({ ...obj }));
    });
  };

  const handlePoints = (homeAway, matchIndex, e) => {
    const aux = deepCopy(schedule);

    homeAway == "home"
      ? (aux[jornada][matchIndex].pointsHome = e.target.value)
      : (aux[jornada][matchIndex].pointsAway = e.target.value);

    setSchedule(aux);
  };

  const handleUpdate = () => {
    addRound1(schedule, ronda)
      .then(() => {
        setMessage("Datos actualizados correctamente");
      })
      .catch((err) => console.log(err));
  };

  const handleFinish = () => {
    finishRound(schedule)
      .then((res) => setMessage(res))
      .catch((err) => console.log(err));
  };

  const handleFinishSecondRound = () => {
    let grupoAsched = [];
    let grupoBsched = [];

    Promise.all([getShedule("round_groupA"), getShedule("round_groupB")])
      .then(([resA, resB]) => {
        console.log(resA.val());
        console.log(resB.val());

        if (resA.val() && resB.val()) {
          grupoAsched = resA.val();
          grupoBsched = resB.val();
          finishSecondRound(grupoAsched, grupoBsched).then((res) =>{
            setMessage(res);
          })
        } else {
          setMessage("Error al extraer resultados de los Grupos A o B");
        }
      })
      .catch((error) => {
        console.error(
          "Error al obtener los resultados de los Grupos A y B:",
          error
        );
      });
  };

  return (
    <div className="principalStats">
      <Form.Select
        className="roundSelect"
        onChange={(e) => handleSelect(e)}
        aria-label="selector ronda"
      >
        <option value="round1">1ª Ronda</option>
        <option value="round_groupA">2ª Ronda</option>
        <option value="fase_final">Fase Final</option>
      </Form.Select>
      {(ronda == "round_groupA" || ronda == "round_groupB") && (
        <div className="groupsBut">
          <Button
            className={group === "grupoA" ? "group selected" : "group"}
            onClick={() => {
              setGroup("grupoA");
              setRonda("round_groupA");
              setMessage("");
            }}
          >
            Grupo A
          </Button>
          <Button
            className={group === "grupoB" ? "group selected" : "group"}
            onClick={() => {
              setGroup("grupoB");
              setRonda("round_groupB");
              setMessage("");
            }}
          >
            Grupo B
          </Button>
        </div>
      )}

      <div className="insidePrincipalStats">
        {schedule && (
          <div className="pages">
            <p
              className="previous"
              onClick={() => {
                setJornada(jornada - 1);
                setMessage("");
              }}
            >
              {schedule[jornada - 1] ? "⬅️ Jornada anterior" : ""}
            </p>
            <h3>Jornada: {jornada + 1}</h3>
            <p
              className="next"
              onClick={() => {
                setJornada(jornada + 1);
                setMessage("");
              }}
            >
              {schedule[jornada + 1] ? "Jornada siguiente ➡️" : ""}
            </p>
          </div>
        )}

        {schedule &&
          schedule[jornada]?.map((elem, index) => {
            return (
              <>
                <div key={elem.matchId} className="oneMatch">
                  <div className="matchHome">
                    <Team teamId={elem.home} />
                    {!edit ? (
                      elem.pointsHome != "" ? (
                        <h6>{elem.pointsHome}</h6>
                      ) : null
                    ) : (
                      <div>
                        <input
                          className="points"
                          type="number"
                          min={0}
                          max={200}
                          placeholder="-"
                          name="pointsHome"
                          value={schedule[jornada][index].pointsHome}
                          onChange={(e) => handlePoints("home", index, e)}
                        />
                      </div>
                    )}
                  </div>
                  <h6>VS</h6>
                  <div className="matchAway">
                    {!edit ? (
                      elem.pointsAway != "" ? (
                        <h6>{elem.pointsAway}</h6>
                      ) : null
                    ) : (
                      <div>
                        <input
                          className="points"
                          type="number"
                          min={0}
                          max={200}
                          placeholder="-"
                          name="pointsAway"
                          value={schedule[jornada][index].pointsAway}
                          onChange={(e) => handlePoints("away", index, e)}
                        />
                      </div>
                    )}
                    <Team teamId={elem.away} />
                  </div>
                </div>
              </>
            );
          })}
        {ronda == "fase_final" &&
            <section>
              <FaseFinal />
            </section>
        }
          <section>
          <p>{message}</p>
          {edit && (
            <div className="update">
              <Button className="updateBut" onClick={handleUpdate}>
                Actualizar
              </Button>
              <p>{message}</p>
            </div>
          )}
          {edit && schedule && checkComplete(schedule) && ronda == "round1" && (
            <div className="finishRound">
              <Button onClick={handleFinish}>Finalizar Ronda</Button>
            </div>
          )}
          {edit && schedule && checkComplete(schedule) && ronda != "round1" && (
            <div className="finishRound">
              <Button onClick={handleFinishSecondRound}>
                Finalizar Segunda Ronda
              </Button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
