import { useState } from "react";

import Header from "../Header/Header";
import PreHeader from "../PreHeader/PreHeader";
import "./ProductDetalhes.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRotate,
    faTruck
} from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import fone1 from "../../assets/fone1.png";
import fone2 from "../../assets/fone2.png";
import fone3 from "../../assets/fone3.png";
import fone4 from "../../assets/fone4.png";

function ProductDetalhes() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const imagens = [
        fone1,
        fone2,
        fone3,
        fone4
    ];

    return (
        <>
            <section>
                <h4 id="filtros-produto">
                    Home &gt; Áudio &gt; Fones de Ouvido Bluetooth
                </h4>
            </section>

            <section id="produto-container">

                {/* GALERIA */}

                <div id="galeria-produto">

                    {/* Miniaturas */}

                    <Swiper
                        direction="vertical"
                        slidesPerView={4}
                        spaceBetween={10}
                        navigation
                        modules={[Navigation, Thumbs]}
                        onSwiper={setThumbsSwiper}
                        className="thumbSwiper"
                    >
                        {imagens.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    alt={`Miniatura ${index + 1}`}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Imagem Principal */}

                    <Swiper
                        modules={[Thumbs]}
                        thumbs={{
                            swiper:
                                thumbsSwiper &&
                                !thumbsSwiper.destroyed
                                    ? thumbsSwiper
                                    : null
                        }}
                        className="mainSwiper"
                    >
                        {imagens.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    alt={`Produto ${index + 1}`}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>

                {/* DESCRIÇÃO */}

                <div id="Description">

                    <h1>Fone de Ouvido Bluetooth Wave</h1>

                    <div id="avaliacao">
                        <h2>★★★★✰</h2>
                        <p>(128 avaliações)</p>
                    </div>

                    <h1>R$ 299,90</h1>

                    <p>ou 12x de R$ 24,99</p>

                    <div id="Frete">
                        <FontAwesomeIcon icon={faTruck} />
                        <div>
                            <h4>Frete grátis</h4>
                            <p>Entregue em até 5 dias úteis</p>
                        </div>
                    </div>

                    <div id="Devolution">
                        <FontAwesomeIcon icon={faRotate} />
                        <div>
                            <h4>Devolução grátis</h4>
                            <p>Em até 7 dias após o recebimento</p>
                        </div>
                    </div>

                    <div id="colorOption">

                        <p>Cor: Preto</p>

                        <div id="colorButtons">

                            <button id="black"></button>

                            <button id="gray"></button>

                            <button id="white"></button>

                        </div>

                    </div>

                    <button id="add-cart">
                        Adicionar ao carrinho
                    </button>

                    <button id="favorite">
                        Adicionar aos favoritos
                    </button>

                </div>

            </section>
        </>
    );
}

export default ProductDetalhes;