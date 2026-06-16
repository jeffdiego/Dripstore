import "./ProdCategorias.css"
import TV from "../../assets/tv.png"
import celular from "../../assets/celular.png"
import computador from "../../assets/computer.png"
import controle from "../../assets/ctrl.png"
import fone from "../../assets/headfone.png"
import lampada from "../../assets/lampada.png"
import mouse from "../../assets/rato.png"
import watch from "../../assets/watch.png"
import charger from "../../assets/carregador.png"
import {CategoryCards} from "../CategoryCards/CategoryCards"
function ProdCategorias() {

    return (
        <>
            <div id="categorias">
                <div id="vertodas">
                    <h4>Compre por categoria</h4> <button type="">Ver todas</button>
                </div>
                <div id="prods">
                    <CategoryCards
                        img={celular}
                        name="Celulares"
                    />
                    <CategoryCards
                        img={computador}
                        name="Notebooks"
                    />
                    <CategoryCards
                        img={fone}
                        name="Áudio"
                    />
                    <CategoryCards
                        img={watch}
                        name="Smartwatches"
                    />
                    <CategoryCards
                        img={charger}
                        name="Acessórios"
                    />
                    <CategoryCards
                        img={mouse}
                        name="Periféricos"
                    />
                    <CategoryCards
                        img={TV}
                        name="TV & Vídeo"
                    />
                    <CategoryCards
                        img={lampada}
                        name="Casa Inteligente"
                    />
                    <CategoryCards
                        img={controle}
                        name="Games"
                    />
                </div>
            </div>

        </>
    )
}

export default ProdCategorias
