import React, { useState } from "react";
import NavBarBasket from "./navFoot/NavBarBasket";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home/Home";
import { Footer } from "./navFoot/Footer";
import { PreHome } from "./home/PreHome";
import { AddNewPlayer } from "./forms/AddNewPlayer";
import { Players } from "./players/Players";
import { OnePlayer } from "./players/OnePlayer";
import { Standings } from "./standings/Standings";
import { Stats } from "./stats/Stats";
import { About } from "./about/About";
import { AddNewJornada } from "./forms/AddNewJornada";
import { MenuEdit } from "./menuEdit/MenuEdit";

export const BasketmaniaApp = () => {
  const [nav, setNav] = useState(false);

  return (
    <div>
      <BrowserRouter>
        {nav && <NavBarBasket nav={nav} setNav={setNav} />}
        <Routes>
          <Route path="/" element={<PreHome nav={nav} setNav={setNav} />} />
          <Route path="/home" element={<Home setNav={setNav}/>} />
          <Route path="/newPlayer" element={<AddNewPlayer nav={nav} setNav={setNav} />} />
          <Route path="/newSeason" element={<AddNewJornada nav={nav} setNav={setNav} />} />
          <Route path="/players" element={<Players nav={nav} setNav={setNav} />} />
          <Route path="/players/:player_id/edit" element={<OnePlayer nav={nav} setNav={setNav} />} />
          <Route path="/players/:player_id" element={<OnePlayer nav={nav} setNav={setNav} />} />
          <Route path="/standings" element={<Standings nav={nav} setNav={setNav} />} />
          <Route path="/calendar" element={<Stats nav={nav} setNav={setNav} />} />
          <Route path="/calendar/:editor" element={<Stats nav={nav} setNav={setNav} />} />
          <Route path="/about" element={<About nav={nav} setNav={setNav} />} />
          <Route path="/players/:edit" element={<Players nav={nav} setNav={setNav} />} />
          <Route path="/*" element={<PreHome nav={nav} setNav={setNav}/>} />
          <Route path="/editor" element={<MenuEdit nav={nav} setNav={setNav}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
