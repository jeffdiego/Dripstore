import Logo from "../../assets/logo.png"
import "./Header.css";
function Header() {

  return (
    <>
      <section id="primeiraParte">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div id="divCategorias">
          <select id="Categorias" class="select-escuro" >
            <option disabled selected hidden>Todas as categorias</option>

            <option>celulares</option>
            <option>notebooks</option>
            <option>Audio</option>
            <option>Smartwatches</option>
            <option>Acesssorios</option>
            <option>Periféricos</option>
            <option>TVs & Video</option>
            <option>Casa Inteligente</option>
            <option>ofertas</option>
          </select>
        </div>
        <div><input type="search" placeholder="Buscar produtos..."/></div>
        <div id="botão">
          <button type="submit">&#128269;</button>
        </div>
      </section>
      <section id="segundaParte">
        <div>
          <ul>
            <a href="">celulares</a>
            <a href="">notebooks</a>
            <a href="">Audio</a>
            <a href="">Smartwatches</a>
            <a href="">Acesssorios</a>
            <a href="">Periféricos</a>
            <a href="">TVs & Video</a>
            <a href="">Casa Inteligente</a>
            <a id="oferta" href="">ofertas</a>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Header
