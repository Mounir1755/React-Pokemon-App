import Home from "../pages/home.jsx";
import Details from "../pages/details.jsx";
import Favorites from "../pages/favorites.jsx";
import List from "../pages/list.jsx";
import Teams from "../pages/teams.jsx";

import {Routes, Route} from "react-router-dom";
function Routing() {
  return (
    <>
      <nav>
        <Routes>
           <Route path="/home" element={<Home />} />
           <Route path="/details" element={<Details />} />
           <Route path="/list" element={<List />} />
           <Route path="/favorites" element={<Favorites />} />
           <Route path="/teams" element={<Teams />} />
        </Routes>
      </nav>
    </>
  )
}

export default Routing