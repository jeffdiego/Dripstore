import FaleConosco from "../Components/FaleConosco/FaleConosco"
import Hero from "../Components/Hero/Hero"
import Offers from "../Components/Offers/Offers"
import PreHeader from "../Components/PreHeader/PreHeader"
import ProdCategorias from "../Components/ProdCategorias/ProdCategorias"


function Homepage() {
  
  return (
    <>
      <PreHeader/>
      <Hero/>
      <ProdCategorias/>
      <Offers/>
      <FaleConosco/>
    </>
  )
}

export default Homepage
