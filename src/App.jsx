import {BrowserRouter,Routes,Route} from "react-router-dom"
import Homepage from "./Pages/Homepage"
import ProductDetails from "./Pages/ProductDetails"
import ProductList from "./Pages/ProductList"


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route element={<Homepage/>} path="/"/>
            <Route element={<ProductDetails/>} path="/productdetails"/>
            <Route element={<ProductList/>} path="/productlist"/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
