import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTruck,
    faCreditCard,
    faTag,
    faHeadset,
    faBox,
    faShieldHalved,
    faRotate,
    faLock
} from "@fortawesome/free-solid-svg-icons";
import "./BenefitsBar.css"


function BenefitsBar() {
    return (
        <>
            <section className="benefits">
                <div className="benefitsItem">
                    <FontAwesomeIcon icon={faTruck}/>
                    <div>
                        <strong>Frete grátis</strong>
                        <p>Para todo Brasil</p>
                    </div>
                </div>
                <div className="benefitsItem">
                    <FontAwesomeIcon icon={faCreditCard}/>
                    <div>
                        <strong>Até 12x sem juros</strong>
                        <p>NO cartão de crédito</p>
                    </div>
                </div>
                <div className="benefitsItem">
                    <FontAwesomeIcon icon={faShieldHalved}/>
                    <div>
                        <strong>Garantia oficial</strong>
                        <p>Produtos 100% originais</p>
                    </div>
                </div>
                <div className="benefitsItem">
                    <FontAwesomeIcon icon={faRotate} />
                    <div>
                        <strong>Troca fácil</strong>
                        <p>Em até 7 dias</p>
                    </div>
                </div>
                <div className="benefitsItem">
                    <FontAwesomeIcon icon={faHeadset} />
                    <div>
                        <strong>Atendimento especializado</strong>
                        <p>Suporte antes e após a compra</p>
                    </div>
                </div>
                <div className="benefitsItem">
                    <FontAwesomeIcon icon={faLock} />
                    <div>
                        <strong>Compra segura</strong>
                        <p>Seus dados protegidos</p>
                    </div>
                </div>










            </section>


























        </>
    )

}

export default BenefitsBar