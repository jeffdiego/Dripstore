import React from 'react';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faChevronDown,
  faMagnifyingGlass,
  faCartShopping,
  faBars
} from '@fortawesome/free-solid-svg-icons';

import {
  faUser,
  faHeart
} from '@fortawesome/free-regular-svg-icons';

export default function Header() {
  return (
    <header className="main-header">

      {/* Linha Superior */}
      <div className="header-top">
        <div className="container top-container">

          {/* Logo */}
          <a href="#" className="logo">
            <span className="logo-blue">Tech</span>
            <span className="logo-black">Store</span>
          </a>

          {/* Categoria */}
          <div className="search-category">
            <span>Todas as categorias</span>

            <FontAwesomeIcon
              icon={faChevronDown}
              className="arrow-icon"
            />
          </div>

          {/* Busca */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Buscar produtos..."
            />

            <button type="submit" className="search-btn">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
              />
            </button>
          </div>

          {/* Ações do Usuário */}
          <div className="header-actions">

            {/* Conta */}
            <a href="#" className="action-item">
              <FontAwesomeIcon
                icon={faUser}
                className="header-icon"
              />

              <div className="action-text">
                <span className="text-light">
                  Entrar ou
                </span>

                <strong>Cadastrar</strong>
              </div>
            </a>

            {/* Favoritos */}
            <a href="#" className="action-item">
              <FontAwesomeIcon
                icon={faHeart}
                className="header-icon"
              />

              <div className="action-text">
                <strong>Favoritos</strong>
              </div>
            </a>

            {/* Carrinho */}
            <a href="#" className="action-item cart-item">
              <div className="cart-icon-wrapper">

                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="header-icon"
                />

                <span className="cart-badge">
                  0
                </span>

              </div>

              <div className="action-text">
                <strong>
                  Guarde no Carrinho
                </strong>
              </div>
            </a>

          </div>
        </div>
      </div>

      {/* Linha Inferior */}
      <nav className="header-nav">
        <div className="container nav-container">

          <ul className="nav-list">

            <li className="all-categories">
              <a href="#">
                <FontAwesomeIcon icon={faBars} />

                <strong>
                  Todas as categorias
                </strong>
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

            <li>
              <a
                href="#"
                className="highlight-link"
              >
                Ofertas
              </a>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
}