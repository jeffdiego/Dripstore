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
    <footer id="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <img src={Logo} alt="TechStore" className="footer-logo" />

          <p>
            Tecnologia que conecta você ao
            <br />
            que há de melhor no mundo.
          </p>

          <div className="social-icons">
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} className="icon-size" />
            </a>

            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} className="icon-size" />
            </a>

            <a href="#">
              <FontAwesomeIcon icon={faYoutube} className="icon-size" />
            </a>

            <a href="#">
              <FontAwesomeIcon icon={faTiktok} className="icon-size" />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Institucional</h3>

          <ul>
            <li>Sobre nós</li>
            <li>Trabalhe conosco</li>
            <li>Política de privacidade</li>
            <li>Termos de uso</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Ajuda</h3>

          <ul>
            <li>Central de ajuda</li>
            <li>Formas de pagamento</li>
            <li>Prazo de entrega</li>
            <li>Trocas e devoluções</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Minha conta</h3>

          <ul>
            <li>Meus pedidos</li>
            <li>Meus dados</li>
            <li>Lista de desejos</li>
            <li>Endereços</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Formas de pagamento</h3>

          <div className="payment-methods">
            <img src={Visa} alt="Visa" />
            <img src={Master} alt="Mastercard" />
            <img src={Elo} alt="Elo" />
            <img src={Amex} alt="American Express" />
            <img src={Pix} alt="Pix" />
            <img src={Boleto} alt="Boleto" />
          </div>
        </div>

        <div className="footer-column">
          <h3>Segurança</h3>

          <div className="security-methods">
            <img src={Blindado} alt="Site Blindado" />
            <img src={Google} alt="Google Site Seguro" />
          </div>
        </div>

      </div>

      <p className="footer-copy">
        © 2024 TechStore. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;