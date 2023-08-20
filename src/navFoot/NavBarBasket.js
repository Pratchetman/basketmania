import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import "./navFoot.scss";

function NavBarBasket({nav, setNav}) {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  const toggleFunc = React.useCallback(() => {
    setToggle(!toggle);
    console.log(toggle);
  });

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container className="containerNav">
        <Navbar.Brand as={Link} to="/" onClick={()=>setNav(false)}>
          <img src="../images/BasketmaniaWhite2.png" alt="Logo Basketmania" className="logoSm" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={toggleFunc}
        />
        <Navbar.Collapse id="responsive-navbar-nav" in={toggle}>
          <Nav className="me-auto toggleMenu">
            <Nav.Link as={Link} onClick={toggleFunc} id="linkNav" to="/home">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} onClick={toggleFunc} id="linkNav" to="/players">
              JUGADORES
            </Nav.Link>
            <Nav.Link as={Link} onClick={toggleFunc} id="linkNav" to="/stats">
              ESTADÍSTICAS
            </Nav.Link>
            <Nav.Link as={Link} onClick={toggleFunc} id="linkNav" to="/standings">
            CLASIFICACIÓN
            </Nav.Link>
            <Nav.Link as={Link} onClick={toggleFunc} id="linkNav" to="/about">
            EL EQUIPO
            </Nav.Link>
          </Nav>
          <Nav className="me-auto toggleBg">
            <Nav.Link as={Link} id="linkNav" to="/home">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} id="linkNav" to="/players">
              JUGADORES
            </Nav.Link>
            <Nav.Link as={Link} id="linkNav" to="/stats">
              ESTADÍSTICAS
            </Nav.Link>
            <Nav.Link as={Link} id="linkNav" to="/standings">
              CLASIFICACIÓN
            </Nav.Link>
            <Nav.Link as={Link} id="linkNav" to="/about">
              EL EQUIPO
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBasket;
