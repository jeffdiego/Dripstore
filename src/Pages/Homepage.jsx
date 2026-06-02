import Header from "../Components/Header/Header"
import Hero from "../Components/Hero/Hero"
import PreHeader from "../Components/PreHeader/PreHeader"
import BenefitsBar from "../Components/BenefitsBar/BenefitsBar"
import MaisVendidos from "../Components/MaisVendidos/MaisVendidos"

function Homepage() {
  
  return (
    <>
      <PreHeader/>
      <Header/>
      <Hero/>
      <BenefitsBar/>
      <MaisVendidos/>
    </>
  )
}

export default Homepage
