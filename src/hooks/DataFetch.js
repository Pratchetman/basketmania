import React, { useContext } from "react";
import { app } from "../utils/firebaseConfig";
import { child, get, getDatabase, ref, set } from "firebase/database";
import { BasketmaniaContext } from "../context/BasketmaniaContext";

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
        .then(() => resolve(newPlayer.name + ", " + newPlayer.lastName + " #"+newPlayer.number + " creado correctamente con Id: " + id))
        .catch((error) => reject(error));
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

  const getTeams = () => {
    let dbRef = ref(getDatabase());

    return new Promise((resolve, reject) => {
      get(child(dbRef, "teams/"))
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  };

  const getOnePlayer = (id) =>{
    let dbRef = ref(getDatabase());

    return new Promise((resolve, reject) => {
      get(child(dbRef, `players/${id}`))
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  return { addPlayer, getPlayers, getOnePlayer, getTeams };
};

export default DataFetch;
