import Navbar from"../NavBar/Navbar"
import Logo from "../../assets/logo.png"
import "./Header.css"

function Header() {

  return (
    <>
      <section id="header">
        <div>
          <img className="logo" src={Logo} alt="" />
        </div>
        <div className="searchBar">
          <select className="searchSelect">
            <option>Todas as categorias</option>
            <option>Celulares</option>
            <option >Notebooks</option>
          </select>
          <input type="text"
            placeholder="Buscar produtos..." />
          <div className="searchBtn">
            <button>
              <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
              </svg>
            </button>
          </div>

        </div>
        <div className="figure">

          <div className="figureItem">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Entrar ou<br />Cadastrar</span>
          </div>

          <div className="figureItem">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>Favoritos</span>
          </div>

          <div className="figureItem carrinho">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            
            <span>Carrinho</span>  
            <span className="contador">0</span>
        
          </div>
        </div>

      </section>
      <Navbar/>
    </>
  )
}

export default  Header


