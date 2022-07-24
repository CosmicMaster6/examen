import ReactDom from "react-dom/client"
import{
  Routes,
  Route,
  Link
} from "react-router-dom"
import Pokemon from "./componentes/pokemon"
import Recomendaciones from "./componentes/ML"

const App = () => {
  
  return(
    <>
      <Routes>
        <Route path="/" element={<Pokemon />}/>
        <Route path="/pokedex" element={<Pokemon />}/>
        <Route path="/mobilelegend" element={<Recomendaciones />} />
      </Routes>
    </>
  )
}

export default App
