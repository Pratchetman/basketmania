import React, { useEffect, useState } from "react";
import { Jornadas } from "../components/Jornadas";
import { CreateJornada } from "../components/CreateJornada";
import DataFetch from "../hooks/DataFetch";
import "./addNewJornada.scss";


export const AddNewJornada = ({ setNav }) => {
  const [jornadasList, setJornadasList] = useState([]);
  const [season, setSeason] = useState([]);
  const [jornadaNumber, setJornadaNumber] = useState(1);
  const [teamsList, setTeamList] = useState([]);
  const { getTeams } = DataFetch();
  

  useEffect(() => {
    setNav(true);
    getTeams()
      .then((res) => {
        setTeamList(Object.values(res.val()));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="principalAddNewJornada">
      <div className="insidePrincipalAddJornada">
        <Jornadas
          jornadasList={jornadasList}
          setJornadasList={setJornadasList}
          teamsList={teamsList}
          jornadaNumber={jornadaNumber}
          setJornadaNumber={setJornadaNumber}
        />
        <CreateJornada
          jornadasList={jornadasList}
          setJornadasList={setJornadasList}
          teamsList={teamsList}
          season={season}
          setSeason={setSeason}
          jornadaNumber={jornadaNumber}
        />
      </div>
    </div>
  );
};
