import Galaxy from "../../assets/Galaxy.png";
import Notebook from "../../assets/Notebook.png";
import Fone from "../../assets/Fone_Ouvido.png";
import Smartwatch from "../../assets/Smartwatch.png";
import CaixaSom from "../../assets/Caixa_Som_JBL.png";
import TVLG from "../../assets/TV_LG_55.png";
import "./MaisVendidos.css";
import { Cards } from "../Cards/Cards";
function MaisVendidos() {
    return (

        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Mais Vendidos</h4>
                <a href="#">Ver todos</a>
            </div>
            <div className="card-container">
                <Cards
                    img={Galaxy}
                    name="Smartphone Galaxy"
                    value="3.599,00"
                    parcelas="12"
                    dividedValue="299,92"
                />
                <Cards
                    img={Notebook}
                    name="Notebook"
                    value="2.799,00"
                    parcelas="12"
                    dividedValue="233,25"
                />
                <Cards
                    img={Fone}
                    name="Fone de Ouvido"
                    value="499,00"
                    parcelas="10"
                    dividedValue="49,90"
                />
                <Cards
                    img={Smartwatch}
                    name="Smartwatch"
                    value="1.299,00"
                    parcelas="12"
                    dividedValue="166,58"
                />
                <Cards
                    img={CaixaSom}
                    name="Caixa de Som"
                    value="899,00"
                    parcelas="10"
                    dividedValue="89,90"
                />
                
            </div>

        </div>

    )
}

export default MaisVendidos;