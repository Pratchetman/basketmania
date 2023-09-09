import React, { useContext } from "react";
import { app } from "../utils/firebaseConfig";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { BasketmaniaContext } from "../context/BasketmaniaContext";
import calculateRanking from "../utils/calculateRanking";

const DataFetch = () => {
  const context = useContext(BasketmaniaContext);
  const id = context.team + "_" + new Date().getTime();

  const addPlayer = (newPlayer) => {
    let dbs = getDatabase();

    return new Promise((resolve, reject) => {
      set(ref(dbs, "players/" + id), {
        ...newPlayer,
        id: id,
      })
        .then(() =>
          resolve(
            newPlayer.name +
              ", " +
              newPlayer.lastName +
              " #" +
              newPlayer.number +
              " creado correctamente con Id: " +
              id
          )
        )
        .catch((error) => reject(error));
    });
  };

  const addRound1 = (round1, round) => {
    let dbs = getDatabase();
    if (round == "teams") {
      round = "round1";
    } else if (round == "teams_groupA") {
      round = "round_groupA";
    } else if (round == "teams_groupB") {
      round = "round_groupB";
    }
    return new Promise((resolve, reject) => {
      set(ref(dbs, `${round}/`), round1)
        .then(() => resolve("Ronda creada correctamente"))
        .catch((error) => reject(error));
    });
  };

  const finishRound = (round) => {
    console.log(round);
    let dbs = getDatabase();
    const teams = getTeams("teams");

    return new Promise((resolve, reject) => {
      teams.then((res) => {
        let teamsList = res.val();

        let groupA = calculateRanking(round, teamsList).slice(0, 7);
        let groupB = calculateRanking(round, teamsList).slice(7);

        let objectA = {};
        let objectB = {};

        for (let i = 0; i < groupA.length; i++) {
          objectA[groupA[i].id] = {
            id: groupA[i].id,
            name: groupA[i].name,
            leaguePoints: 0,
          };
        }
        for (let i = 0; i < groupB.length; i++) {
          objectB[groupB[i].id] = {
            id: groupB[i].id,
            name: groupB[i].name,
            leaguePoints: 0,
          };
        }

        set(ref(dbs, "teams_groupA/"), objectA)
          .then(() => {
            set(ref(dbs, "teams_groupB/"), objectB)
              .then(() => resolve("Grupos A y B creados correctamente"))
              .catch((err) => reject(err));
          })
          .catch((error) => reject(error));
      });
    });
  };

  const getPlayers = () => {
    let dbRef = ref(getDatabase());

    return new Promise((resolve, reject) => {
      get(child(dbRef, "players/"))
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  };

  const getTeams = (round) => {
    let dbRef = ref(getDatabase());

    return new Promise((resolve, reject) => {
      get(child(dbRef, `${round}/`))
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  };

  const getOnePlayer = (id) => {
    let dbRef = ref(getDatabase());

    return new Promise((resolve, reject) => {
      get(child(dbRef, `players/${id}`))
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  };

  const getShedule = (round) => {
    let dbRef = ref(getDatabase());

    return new Promise((resolve, reject) => {
      get(child(dbRef, `${round}/`))
        .then((data) => resolve(data))
        .catch((error) => {
          console.log(error);
          reject("Aún no se ha creado el calendario");
        });
    });
  };

  const teamToName = (teamId) => {
    let dbRef = ref(getDatabase());

    return new Promise((resolve, reject) => {
      get(child(dbRef, `teams/${teamId}`))
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  };

  return {
    addPlayer,
    getPlayers,
    getOnePlayer,
    getTeams,
    addRound1,
    getShedule,
    teamToName,
    finishRound,
  };
};

export default DataFetch;
