import { Link } from "react-router-dom";
import "../assets/header.css";
import { IoCartSharp } from "react-icons/io5";
import Cart from "../pages/cart/Cart";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import RouterLink from "./RouterLink";

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
                <RouterLink route="/" name="Inicio" />
              </li>
              <li>
                <RouterLink route="/productos" name="Productos" />
              </li>
               <li>
                <a href="#footer">Categorías</a>
              </li>
             {/*  <li>
                <RouterLink route="/" name="Contacto" />
              </li> */}
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
