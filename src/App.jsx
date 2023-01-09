
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ProtexRouter from "./components/ProtexRouter"
import Pokedex from "./pages/Pokedex"
import PokeInfo from "./pages/PokeInfo"


function App() {

  return (
    <div className="app">
      <Routes> 
        <Route path="/" element={<Home/>} />

        {/* rutas protegidas  */}
      
        <Route element={<ProtexRouter/>} >
          <Route path="/pokedex" element={<Pokedex/>} />
          <Route path="/pokedex/:id" element={<PokeInfo/>} />

        </Route>
      </Routes>
    </div>
  )
}

export default App