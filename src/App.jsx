import React, { useState } from "react"
import PokedexStart from "./components/PokedexStart"
import PokedexMainScreen from "./components/PokedexMainScreen"
import './assets/css/App.css'
import PokedexSettings from "./components/PokedexSettings"

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
