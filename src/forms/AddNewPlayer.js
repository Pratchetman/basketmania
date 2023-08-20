import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import "./addNewPlayer.scss";
import DataFetch from "../hooks/DataFetch";

const defaultPlayer = {
  id: "",
  name: "",
  lastName: "",
  number: "",
  height: "",
  bornDate: "",
  pos: "",
};

export const AddNewPlayer = ({ nav, setNav }) => {
  const [newPlayer, setNewPlayer] = useState(defaultPlayer);
  const { addPlayer } = DataFetch();
  const [msg, setMsg] = useState("");
  useEffect(() => {
    setNav(true);
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setNewPlayer({ ...newPlayer, [name]: value });
  };

  const handleSubmit = () => {
    addPlayer(newPlayer)
      .then((res) => {
        console.log(res);
        setMsg(res);
        setNewPlayer(defaultPlayer);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="principalAddNewPlayer">
      <div className="insidePrincipalAddNew">
        <Form.Label htmlFor="basic-url">Nuevo jugador</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
          <Form.Control
            placeholder="Nombre"
            aria-label="Nombre"
            aria-describedby="basic-addon1"
            onChange={handleChange}
            value={newPlayer.name}
            name="name"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Apellidos</InputGroup.Text>
          <Form.Control
            placeholder="Apellidos"
            aria-label="Apellidos"
            aria-describedby="basic-addon1"
            onChange={handleChange}
            value={newPlayer.lastName}
            name="lastName"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
          <Form.Control
            type="number"
            placeholder="Dorsal"
            aria-label="Dorsal"
            aria-describedby="basic-addon1"
            onChange={handleChange}
            value={newPlayer.number}
            name="number"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Altura</InputGroup.Text>

          <Form.Control
            type="number"
            placeholder="Altura"
            aria-label="Altura"
            aria-describedby="basic-addon1"
            onChange={handleChange}
            value={newPlayer.height}
            name="height"
          />
          <InputGroup.Text id="basic-addon1">cms</InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Posición</InputGroup.Text>
          <Form.Select
            aria-label="Seleccionar posición"
            value={newPlayer.pos}
            name="pos"
            onChange={handleChange}
          >
            <option>Seleccionar posición</option>
            <option value="Base">Base</option>
            <option value="Escolta">Escolta</option>
            <option value="Alero">Alero</option>
            <option value="Ala pívot">Ala pívot</option>
            <option value="Pívot">Pívot</option>
          </Form.Select>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Fecha Nacimiento</InputGroup.Text>

          <Form.Control
            type="date"
            placeholder="Fecha de nacimiento"
            aria-label="Fecha de nacimiento"
            aria-describedby="basic-addon1"
            onChange={handleChange}
            value={newPlayer.bornDate}
            name="bornDate"
          />
        </InputGroup>
        <Button className="enterButtonAdd" onClick={handleSubmit}>
          Envíar
        </Button>
      </div>
      <p className="errorMsg">{msg}</p>
    </div>
  );
};
