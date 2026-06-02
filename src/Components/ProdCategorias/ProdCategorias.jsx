import {
    faTruck,
    faCreditCard,
    faTag,
    faHeadset,
    faBox,
    faShieldHalved,
    faRotate
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProdCategorias.css"
import TV from "../../assets/tv.png"
import celular from "../../assets/celular.png"
import computador from "../../assets/computer.png"
import controle from "../../assets/ctrl.png"
import fone from "../../assets/fone.png"
import lampada from "../../assets/lampada.png"
import mouse from "../../assets/rato.png"
import watch from "../../assets/watch.png"
import charger from "../../assets/carregador.png"

function ProdCategorias() {

    return (
        <>
            <div id="categorias">
                <div id="vertodas">        <h4>Compre por categoria</h4> <button type="">Ver todas</button></div>
                <div id="prods">
                    <div className="prod">
                        <img src={celular} alt="" />
                        <p>Celulares</p>
                    </div>
                    <div className="prod">
                        <img src={computador} alt="" />
                        <p>Notebooks</p>
                    </div>
                    <div className="prod">
                        <img src={fone} alt="" />
                        <p>Áudio</p>
                    </div>
                    <div className="prod">
                        <img src={watch} alt="" />
                        <p>Smartwatches</p>
                    </div>
                    <div className="prod">
                        <img src={charger} alt="" />
                        <p>Acessórios</p>
                    </div>
                    <div className="prod">
                        <img src={mouse} alt="" />
                        <p>Periféricos</p>
                    </div>
                    <div className="prod">
                        <img src={TV} alt="" />
                        <p>TV & Vídeo</p>
                    </div>
                    <div className="prod">
                        <img src={lampada} alt="" />
                        <p>Casa Inteligente</p>
                    </div>
                    <div className="prod">
                        <img src={controle} alt="" />
                        <p>Games</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProdCategorias
