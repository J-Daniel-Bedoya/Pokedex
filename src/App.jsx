import PokedexStart from "./components/PokedexStart/PokedexStart"
import PokedexMainScreen from "./components/PokedexHome/PokedexMainScreen"
import PokedexSettings from "./components/PokedexSettings/PokedexSettings"
import './assets/css/App.css'

import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom'
import PokemonInfo from "./components/infoPokemon/PokemonInfo"
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes"


function App() {


  return (
    <div className="App"> 
      <HashRouter>
        <Routes>
          <Route path="/" element={<PokedexStart />} />
          <Route path="/settings" element={<PokedexSettings />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<PokedexMainScreen />} />
            <Route path="/pokedex/info_pokemon/:id" element={<PokemonInfo />}/>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
