import PokedexStart from "./components/PokedexStart/PokedexStart";
import PokedexMainScreen from "./components/PokedexHome/PokedexMainScreen";
import PokedexSettings from "./components/PokedexSettings/PokedexSettings";

import { HashRouter, Routes, Route } from "react-router-dom";
import PokemonInfo from "./components/infoPokemon/PokemonInfo";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

import "./assets/css/App.css";

function App() {
  
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<PokedexStart />} />
          <Route path="/settings" element={<PokedexSettings />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<PokedexMainScreen />} />
            <Route path="/pokedex/info_pokemon/:id" element={<PokemonInfo />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
