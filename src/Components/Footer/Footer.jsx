import Logo from "../../assets/logo.png";
import Amex from "../../assets/amex.png";
import Boleto from "../../assets/boleto.png";
import Elo from "../../assets/elo.png";
import Master from "../../assets/master.png";
import Pix from "../../assets/pix.png";
import Visa from "../../assets/visa.png";
import Blindado from "../../assets/blindado.png";
import Google from "../../assets/google.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faFacebookF,
    faYoutube,
    faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-brand">
                    <img src={Logo} alt="Drip Store" className="footer-logo" />

                    <p>
                        Tecnologia que conecta você ao
                        <br />
                        que há de melhor no mundo.
                    </p>

                    <div className="social-icons">
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>

                        <a href="#">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>

                        <a href="#">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>

                        <a href="#">
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                    </div>
                </div>


                <div className="footer-column">
                    <h3>Institucional</h3>

                    <ul>
                        <li>Sobre Nós</li>
                        <li>Trabalhe Conosco</li>
                        <li>Política de Privacidade</li>
                        <li>Termos de Uso</li>
                    </ul>
                </div>


                <div className="footer-column">
                    <h3>Ajuda</h3>

                    <ul>
                        <li>Central de Ajuda</li>
                        <li>Formas de Pagamento</li>
                        <li>Prazo de Entrega</li>
                        <li>Trocas e Devoluções</li>
                    </ul>
                </div>


                <div className="footer-column">
                    <h3>Minha Conta</h3>

                    <ul>
                        <li>Meus Pedidos</li>
                        <li>Meus Dados</li>
                        <li>Lista de Desejos</li>
                        <li>Endereços</li>
                    </ul>
                </div>


                <div className="footer-column">
                    <h3>Formas de Pagamento</h3>

                    <div className="payment-methods">
                        <img src={Amex} alt="American Express" />
                        <img src={Boleto} alt="Boleto" />
                        <img src={Elo} alt="Elo" />
                        <img src={Master} alt="Mastercard" />
                        <img src={Pix} alt="Pix" />
                        <img src={Visa} alt="Visa" />
                    </div>
                </div>

                <div className="footer-column">
                    <h3>Segurança</h3>

                    <div className="security-methods">
                        <img src={Blindado} alt="Seguro Blindado" />
                        <img src={Google} alt="Google Site Seguro" />
                    </div>
                </div>
            </div>


            <div className="footer-bottom">
                <p>© 2025 Drip Store. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;