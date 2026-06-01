import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Hero.css";
import heroBanner from "../../assets/hero.png";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          className="hero__swiper"
        >

          <SwiperSlide>
            <div className="hero__slide">
              <div className="hero__content">
                <span className="hero__tag">Lançamentos</span>
                <h1 className="hero__title">Tecnologia que conecta você</h1>
                <p className="hero__description">
                  Os melhores produtos eletrônicos com as melhores condições.
                </p>
                <button className="hero__cta">Ver ofertas</button>
              </div>
              <div className="hero__image-wrapper">
                <img src={heroBanner} alt="Lançamentos" className="hero__image" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero__slide">
              <div className="hero__content">
                <span className="hero__tag">Ofertas</span>
                <h1 className="hero__title">Desempenho que surpreende</h1>
                <p className="hero__description">
                  Equipamentos de alta performance para o seu dia a dia.
                </p>
                <button className="hero__cta">Confira agora</button>
              </div>
              <div className="hero__image-wrapper">
                <img src={heroBanner} alt="Ofertas" className="hero__image" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero__slide">
              <div className="hero__content">
                <span className="hero__tag">Novidades</span>
                <h1 className="hero__title">Inovação ao seu alcance</h1>
                <p className="hero__description">
                  Descubra os lançamentos mais recentes com condições especiais.
                </p>
                <button className="hero__cta">Explorar</button>
              </div>
              <div className="hero__image-wrapper">
                <img src={heroBanner} alt="Novidades" className="hero__image" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}