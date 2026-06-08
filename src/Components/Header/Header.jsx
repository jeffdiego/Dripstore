import React, { useState } from 'react';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faChevronDown,
  faMagnifyingGlass,
  faCartShopping,
  faBars,
  faTrash
} from '@fortawesome/free-solid-svg-icons';

import {
  faUser,
  faHeart
} from '@fortawesome/free-regular-svg-icons';

export default function Header() {

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'AirPods Pro (2ª geração)',
      price: 1299,
      qty: 1,
      img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=400&hei=400&fmt=jpeg&qlt=90'
    },
    {
      id: 2,
      name: 'Apple Watch Series 9',
      price: 2499,
      qty: 1,
      img: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-cell-s11_VW_34FR+watch-face-46-aluminum-jetblack-s11_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aSsxa3lRL0RPQXl4d1oyaFZIWm1QL1F1Z0RaeFB5LzRxZEliRVE2WkswOW5YNUh6UG9VcVpLK2VQampYMHFQR0ZjcUFHc2U4eFMrUHFHdndTN3dIcncxRVpGM0VTYkFEYWkrVUpmdm5HMEsvZzdYL1dmbHI1ck0vS0dDZmJkTUNtcXlYK1hMV0U1ZW9xcCtlRHF3V3gyWXU3V2dFeGZmOThWMVRrcTM3NXhpTG9IT0d5U0k4ZlZqa1FKU09CZEFJYg'
    },
  ]);

  const totalItems = cartItems.reduce((acc, i) => acc + i.qty, 0);
  const totalPrice = cartItems.reduce((acc, i) => acc + i.price * i.qty, 0);

  function removeItem(id) {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

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
            <FontAwesomeIcon icon={faChevronDown} className="arrow-icon" />
          </div>

          {/* Busca */}
          <div className="search-box">
            <input type="text" placeholder="Buscar produtos..." />
            <button type="submit" className="search-btn">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>

          {/* Ações do Usuário */}
          <div className="header-actions">

            {/* Conta */}
            <a href="#" className="action-item">
              <FontAwesomeIcon icon={faUser} className="header-icon" />
              <div className="action-text">
                <span className="text-light">Entrar ou</span>
                <strong>Cadastrar</strong>
              </div>
            </a>

            {/* Favoritos */}
            <a href="#" className="action-item">
              <FontAwesomeIcon icon={faHeart} className="header-icon" />
              <div className="action-text">
                <strong>Favoritos</strong>
              </div>
            </a>

            {/* Carrinho */}
            <div
              className="action-item cart-item"
              onClick={() => setCartOpen(o => !o)}
              style={{ cursor: 'pointer', position: 'relative' }}
            >
              <div className="cart-icon-wrapper">
                <FontAwesomeIcon icon={faCartShopping} className="header-icon" />
                <span className="cart-badge">{totalItems}</span>
              </div>

              <div className="action-text">
                <strong>Guarde no Carrinho</strong>
              </div>

              {/* Dropdown */}
              {cartOpen && (
                <div className="cart-dropdown" onClick={e => e.stopPropagation()}>
                  <p className="cart-dropdown-title">Meu Carrinho</p>

                  {cartItems.length === 0 ? (
                    <p className="cart-empty">Seu carrinho está vazio.</p>
                  ) : (
                    <>
                      <ul className="cart-list">
                        {cartItems.map(item => (
                          <li key={item.id} className="cart-list-item">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="cart-item-img"
                            />
                            <div className="cart-item-info">
                              <span className="cart-item-name">{item.name}</span>
                              <span className="cart-item-qty">Qtd: {item.qty}</span>
                              <span className="cart-item-price">
                                R$ {(item.price * item.qty).toLocaleString('pt-BR')}
                              </span>
                            </div>
                            <button
                              className="cart-remove-btn"
                              onClick={() => removeItem(item.id)}
                              title="Remover item"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </li>
                        ))}
                      </ul>

                      <div className="cart-total">
                        <span>Total</span>
                        <strong>R$ {totalPrice.toLocaleString('pt-BR')}</strong>
                      </div>

                      <a href="#" className="cart-checkout-btn">Ver Carrinho</a>
                    </>
                  )}
                </div>
              )}
            </div>

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

            <li>
              <a href="#" className="highlight-link">Ofertas</a>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
}