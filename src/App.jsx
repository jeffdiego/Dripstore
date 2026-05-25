import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from "./Pages/Homepage"
import Produto from "./Pages/Produto"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route element={<Homepage/>} path="/"/>
            <Route element={<Produto/>} path="/produto"/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
