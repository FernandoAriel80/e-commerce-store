import { Link } from "react-router-dom";
import "../assets/header.css";
import { IoCartSharp } from "react-icons/io5";
import Cart from "../pages/cart/Cart";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Header() {
  const { isOpen, openCart, products } = useContext(CartContext);
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
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" onClick={() => window.scrollTo(0, 0)}>
                  Productos
                </Link>
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
              <button className="cart-btn" onClick={openCart}>
                <IoCartSharp className="ic-cart" />{" "}
                <div>{products.length > 0 ? products.length : ""}</div>
              </button>

              <div
                className="cart-view"
                style={isOpen ? { display: "block" } : { display: "none" }}
              >
                <Cart />
              </div>
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
