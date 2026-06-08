import React from 'react';
import './Header.css'; 

export default function Header() {
  return (
    <header className="main-header">
      {/* Linha Superior: Logo, Busca e Ações */}
      <div className="header-top">
        <div className="container top-container">
          
          {/* Logo */}
          <a href="#" className="logo">
            <span className="logo-blue">Tech</span><span className="logo-black">Store</span>
          </a>

          {/* Barra de Busca */}
           <div className="search-category">
              <span>Todas as categorias</span>
              <span className="material-symbols-outlined arrow-icon">&#9662;</span>
            </div>
          <div className="search-box">
            <input type="text" placeholder="&#128269; Buscar produtos..." />
            <button type="submit" className="search-btn">
              <span className="material-symbols-outlined">&#128269;</span>
            </button>
          </div>

          {/* Ações do Usuário (Conta, Favoritos, Carrinho) */}
          <div className="header-actions">
            <a href="#" className="action-item">
              <span className="material-symbols-outlined">&#128100;</span>
              <div className="action-text">
                <span className="text-light">Entrar ou</span>
                <strong>Cadastrar</strong>
              </div>
            </a>
            
            <a href="#" className="action-item">
              <span className="material-symbols-outlined">&#9825;</span>
              <div className="action-text">
                <strong>Favoritos</strong>
              </div>
            </a>

            <a href="#" className="action-item cart-item">
              <span className="material-symbols-outlined">&#128722;</span>
              <div className="action-text">
                <strong>Guarde no Carrinho</strong>
                <span className="cart-badge">0</span>
              </div>
            </a>
          </div>

        </div>
      </div>

      {/* Linha Inferior: Menu de Navegação */}
      <nav className="header-nav">
        <div className="container nav-container">
          <ul className="nav-list">
            <li className="all-categories">
              <a href="#">
                <span className="material-symbols-outlined">&#9776;</span>
                <strong>Todas as categorias</strong>
              </a>
            </li>
            <li><a href="#">Celulares</a></li>
            <li><a href="#">Notebooks</a></li>
            <li><a href="#">Áudio</a></li>
            <li><a href="#">Smartwatches</a></li>
            <li><a href="#">Acessórios</a></li>
            <li><a href="#">Periféricos</a></li>
            <li><a href="#">TVs & Vídeo</a></li>
            <li><a href="#">Casa Inteligente</a></li>
            <li><a href="#" className="highlight-link">Ofertas</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}