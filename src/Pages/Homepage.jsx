import Header from "../Components/Header/Header"
import FaleConosco from "../Components/FaleConosco/FaleConosco"
import Hero from "../Components/Hero/Hero"
import Offers from "../Components/Offers/Offers"
import PreHeader from "../Components/PreHeader/PreHeader"
import Footer from "../Components/Footer/Footer"
import BenefitsBar from "../Components/BenefitsBar/BenefitsBar"
import MaisVendidos from "../Components/MaisVendidos/MaisVendidos"
import ProdCategorias from "../Components/ProdCategorias/ProdCategorias"


function Homepage() {
  
  return (
    <>
      <PreHeader/>
      <Header/>
      <BenefitsBar/>
      <Hero/>
      <Footer/>
      <MaisVendidos/>
      <ProdCategorias/>
      <Offers/>
      <FaleConosco/>
    </>
  )
}

export default Homepage
