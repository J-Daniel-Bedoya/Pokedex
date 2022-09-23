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


function App() {


  return (
    <div className="App"> 
      <HashRouter>
        <Routes>
          <Route path="/" element={<PokedexStart />} />
          <Route path="/pokedex/:name" element={<PokedexMainScreen />} />
          <Route path="/settings" element={<PokedexSettings />} />
          <Route path="/pokedex/info_pokemon/:id" element={<PokemonInfo />}/>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
