import './Offers.css';
import Controle from "../../assets/controle.png"
import Fone from "../../assets/fone.png"
import { CardOffer } from "../CardOffer/CardOffer"
function Offers() {
  return (
    <section className="offers">
      <CardOffer
        classNameBackground="offers__banner offers__banner--dark"
        title="Ofertas imperdíveis em até 12x sem juros"
        subtitle="Aproveite descontos em produtos selecionados."
        classNameButton="offers__btn offers__btn--dark"
        textButton="Ver ofertas"
        img={Controle}
      />
      
      <CardOffer
        classNameBackground="offers__banner offers__banner--light"
        title="Fones com até 30% de desconto"
        subtitle="Confira nossa seleção de fones de ouvido. "
        classNameButton="offers__btn offers__btn--light"
        textButton="Ver fones"
        img={Fone}
      />

    </section>
  );
}

export default Offers;