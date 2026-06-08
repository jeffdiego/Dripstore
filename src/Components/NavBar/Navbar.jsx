import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="navBottom">
            <nav className="catalog">
                <ul>
                    <li className="menu">
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        Todas as categorias
                    </li>
                    <li><a href="">Celulares</a></li>
                    <li><a href="">Notebooks</a></li>
                    <li><a href="">Áudio</a></li>
                    <li><a href="">Smartwatches</a></li>
                    <li><a href="">Acessórios</a></li>
                    <li><a href="">Periféricos</a></li>
                    <li><a href="">TVs & Vídeo</a></li>
                    <li><a href="">Casa Inteligente</a></li>
                    <li className="offer"><a href="">Ofertas</a></li>

                    </ul>
                    </nav>
                </div>
                )
}