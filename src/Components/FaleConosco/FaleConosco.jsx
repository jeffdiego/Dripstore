import { FaEnvelope } from "react-icons/fa";
import "./FaleConosco.css"
function FaleConosco() {

    return (
        <>
            <section id="sale">
                <div className="sale-info">
                    <FaEnvelope className="sale-icon" />

                    <div className="sale-text">
                        <h3>Receba ofertas exclusivas</h3>
                        <p>
                            Cadastre-se e receba as melhores ofertas e lançamentos em primeira
                            mão.
                        </p>
                    </div>
                </div>

                <div className="sale-form">
                    <input
                        type="email"
                        placeholder="Seu melhor e-mail"
                    />

                    <button>Cadastrar</button>
                </div>
            </section>
        </>

    )
}

export default FaleConosco
