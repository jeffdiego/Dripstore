import Logo from "../../assets/logo.png"

function Footer() {
  return (
    <section className="footer-social">
      <div>
        <img src="/logo.png" alt="Logo" />

        <p>
          Tecnologia que conecta você ao
          <br />
          que há de melhor no mundo.
        </p>
      </div>

      <div className="social-icons">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-tiktok"></i>
      </div>
    </section>
  );
}

export default Footer;