import './Offers.css';
import Controle from "../../assets/controle.png"
import Fone from "../../assets/fone.png"

function Offers() {
  return (
    <section className="offers">

      {/* Banner esquerdo - fundo escuro */}
      <div className="offers__banner offers__banner--dark">
        <div className="offers__content">
          <h2 className="offers__title">
            Ofertas imperdíveis<br />
            em até 12x sem juros
          </h2>
          <p className="offers__subtitle">
            Aproveite descontos em<br />
            produtos selecionados.
          </p>
          <button className="offers__btn offers__btn--dark">
            Ver ofertas
          </button>
        </div>
        <img
          className="offers__image"
          src={Controle}
          alt="Controle de videogame"
        />
      </div>

      {/* Banner direito - fundo claro */}
      <div className="offers__banner offers__banner--light">
        <div className="offers__content">
          <h2 className="offers__title">
            Fones com até 30%<br />
            de desconto
          </h2>
          <p className="offers__subtitle">
            Confira nossa seleção<br />
            de fones de ouvido.
          </p>
          <button className="offers__btn offers__btn--light">
            Ver fones
          </button>
        </div>
        <img
          className="offers__image"
          src={Fone}
          alt="Fone de ouvido"
        />
      </div>

    </section>
  );
}

export default Offers;