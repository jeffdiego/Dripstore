import Logo from "../../assets/logo.png"

function Footer() {
    return (
        <>
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
                    <img src={Logo2} alt="logo" />
                    <img src={Logo3} alt="logo" />
                    <img src={Logo4} alt="logo" />
                    <img src={Logo5} alt="logo" />
                    <img src={Logo6} alt="logo" />
                </div>




            </section>
        </>
    )
}

export default Footer;