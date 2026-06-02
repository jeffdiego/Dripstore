import Logo from "../../assets/logo.png"
import Amex from "../../assets/amex.png"
import Boleto from "../../assets/boleto.png"
import Elo from "../../assets/elo.png"
import Master from "../../assets/master.png"
import Pix from "../../assets/pix.png"
import Visa from "../../assets/visa.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
    return (
        <>
            <section className="footer-social">
                <div>
                    <img src={Logo} alt="" />

                    <p>
                        Tecnologia que conecta você ao
                        <br />
                        que há de melhor no mundo.
                    </p>
                </div>

                <div className="social-icons">
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faYoutube} />
                    <FontAwesomeIcon icon={faTiktok} />
                </div>

                <div>
                    <h2>Institucional</h2>
                    <p>Sobre Nós</p>
                    <p>Trabalhe Conosco</p>
                    <p>Politica de Privacidade</p>
                    <p>Termos de Uso</p>
                </div>

                <div>
                    <h2>Ajuda</h2>
                    <p>Central de ajuda</p>
                    <p>Fromas de Pagamentos</p>
                    <p>Prazo de entregas</p>
                    <p>Trocas e devoluções</p>
                </div>

                <div>
                    <h2>Minha Conta</h2>
                    <p>Meus pedidos</p>
                    <p>Meus dadoss</p>
                    <p>Lista de desejo</p>
                    <p>Ebdereços</p>
                </div>

                <div>
                    <h2>Forma de pagamento</h2>
                    <img src={Amex} alt="amex" />
                    <img src={Boleto} alt="Boleto" />
                    <img src={Elo} alt="Elo" />
                    <img src={Master} alt="Master" />
                    <img src={Pix} alt="pix" />
                    <img src={Visa} alt="Visa" />
                </div>

            </section>
        </>
    )
}

export default Footer;