import PokedexStart from "./components/PokedexStart/PokedexStart"
import PokedexMainScreen from "./components/PokedexHome/PokedexMainScreen"
import PokedexSettings from "./components/PokedexSettings/PokedexSettings"
import './assets/css/App.css'

import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom'


function App() {


  return (
    <div className="App"> 
      <HashRouter>
        <Routes>
          <Route path="/" element={<PokedexStart />} />
          <Route path="/home/:name" element={<PokedexMainScreen />} />
          <Route path="/settings" element={<PokedexSettings />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
