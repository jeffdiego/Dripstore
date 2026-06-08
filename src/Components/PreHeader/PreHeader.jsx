import {
  faTruck,
  faCreditCard,
  faTag,
  faHeadset,
  faBox,
  faShieldHalved,
  faRotate,
  
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PreHeader.css"

function PreHeader() {
  
  return (
    <>
      <section id="pre-header">
        <div id="pre-header-left">
            <div className="icon-box">
                 <FontAwesomeIcon icon={faTruck} />
                 <p>Frete grátis para todo o brasil</p>
            </div>
            <div className="icon-box">
                <FontAwesomeIcon icon={faCreditCard} />
                <p>Até 12x sem juros</p>
            </div>
            <div className="icon-box">
                <FontAwesomeIcon icon={faTag} />
                <p>5% de desconto no PIX</p>
            </div>
        </div>
        <div  id="pre-header-right">
            <div className="icon-box">
                <FontAwesomeIcon icon={faHeadset} />
                <p>Atendimento</p>
            </div>
            <div className="icon-box">
                <FontAwesomeIcon icon={faBox} />
                <p>Meus pedidos</p>
            </div>
            <div className="icon-box">
                <FontAwesomeIcon icon={faShieldHalved} />
                <p>Garantia estendida</p>
            </div>
            <div className="icon-box">
                <FontAwesomeIcon icon={faRotate} />
                <p>Trocas e devoluções</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default PreHeader
