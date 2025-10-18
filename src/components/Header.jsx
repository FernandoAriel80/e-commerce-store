import { Link } from "react-router-dom";
import "../assets/header.css";
export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>LuxeShop</h1>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <a href="/productos">Productos</a>
              </li>
              {/*  <li>
                <a href="#categorias">Categorías</a>
              </li>*/}
              <li>
                <a href="#footer">Contacto</a>
              </li>
            </ul>
          </nav>
          <div>
            <div className="header-actions">
              <button className="cart-btn">
                Carrito {/* {cart.length} */}
              </button>
            </div>
           {/*  <div>
              <button>Inicie sesión</button>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
}
