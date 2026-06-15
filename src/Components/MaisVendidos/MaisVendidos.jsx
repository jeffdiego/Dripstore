import Galaxy from "../../assets/Galaxy.png";
import Notebook from "../../assets/Notebook.png";
import Fone from "../../assets/Fone_Ouvido.png";
import Smartwatch from "../../assets/Smartwatch.png";
import CaixaSom from "../../assets/Caixa_Som_JBL.png";
import TVLG from "../../assets/TV_LG_55.png";
import "./MaisVendidos.css";

function MaisVendidos() {
    return (

        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Mais Vendidos</h4>
                <a href="#">Ver todos</a>
            </div>
            <div className="card-container">
                <div className="card-content">
                    <div className="card-image">
                        <img src={Galaxy} alt="Smartphone Galaxy" height={100} />
                    </div>
                    <div className="card-details">
                        <svg className="Heart" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>  
                        <h4>Smartphone Galaxy</h4>
                        <div className="estrelas">
                            <span className="estrela1">&#9733;</span>
                            <span className="estrela2">&#9733;</span>
                            <span className="estrela3">&#9733;</span>
                            <span className="estrela4">&#9733;</span>
                            <span className="estrela5">&#9733;</span>
                        </div>
                        <p className="preco">R$ 3.599,00</p>
                        <p className="parcelamento">em até 12x de R$ 299,92</p>
                    </div>
                </div>
                <div className="card-content">
                    <div className="card-image">
                        <img src={Notebook} alt="Notebook" height={110} />
                    </div>
                    <div className="card-details">
                        <svg className="Heart" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <h4>Notebook</h4>
                        <div className="estrelas">
                            <span className="estrela1">&#9733;</span>
                            <span className="estrela2">&#9733;</span>
                            <span className="estrela3">&#9733;</span>
                            <span className="estrela4">&#9733;</span>
                            <span className="estrela5">&#9733;</span>
                        </div>
                        <p className="preco">R$ 2.799,00</p>
                        <p className="parcelamento">em até 12x de R$ 233,25</p>
                    </div>
                </div>
                <div className="card-content">
                    <div className="card-image">
                        <img src={Fone} alt="Fone de Ouvido" height={110} />
                    </div>
                    <div className="card-details">
                        <svg className="Heart" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <h4>Fone de Ouvido</h4>
                        <div className="estrelas">
                            <span className="estrela1">&#9733;</span>
                            <span className="estrela2">&#9733;</span>
                            <span className="estrela3">&#9733;</span>
                            <span className="estrela4">&#9733;</span>
                            <span className="estrela5">&#9733;</span>
                        </div>
                        <p className="preco">R$ 499,00</p>
                        <p className="parcelamento">em até 10x de R$ 49,90</p>
                    </div>
                </div>
                <div className="card-content">
                    <div className="card-image">
                        <img src={Smartwatch} alt="Smartwatch" height={110} />
                    </div>
                    <div className="card-details">
                        <svg className="Heart" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>

                        <h4>Smartwatch</h4>
                        <div className="estrelas">
                            <span className="estrela1">&#9733;</span>
                            <span className="estrela2">&#9733;</span>
                            <span className="estrela3">&#9733;</span>
                            <span className="estrela4">&#9733;</span>
                            <span className="estrela5">&#9733;</span>
                        </div>
                        <p className="preco">R$ 1.299,00</p>
                        <p className="parcelamento">em até 12x de R$ 166,58</p>
                    </div>
                </div>

                <div className="card-content">
                    <div className="card-image">
                        <img src={CaixaSom} alt="Caixa de Som" height={110} />
                    </div>
                    <div className="card-details">
                        <svg className="Heart" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>

                        <h4>Smartwatch</h4>
                        <div className="estrelas">
                            <span className="estrela1">&#9733;</span>
                            <span className="estrela2">&#9733;</span>
                            <span className="estrela3">&#9733;</span>
                            <span className="estrela4">&#9733;</span>
                            <span className="estrela5">&#9733;</span>
                        </div>
                        <p className="preco">R$ 899,00</p>
                        <p className="parcelamento">em até 10x de R$ 89,90</p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default MaisVendidos;