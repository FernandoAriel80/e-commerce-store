import { Link, useNavigate } from "react-router-dom";
import "../assets/header.css";
import { IoCartSharp } from "react-icons/io5";
import Cart from "../pages/cart/Cart";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { AuthContext } from "../contexts/AuthContext";
import { IoMenu } from "react-icons/io5";
import HeaderNav from "./HeaderNav";

export default function Header() {
  const { isOpen, openCart, cart } = useContext(CartContext);
  const { auth, logout } = useContext(AuthContext);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();
  const logOut = () => {
    //cleanCart()
    logout();
    navigate("/");
  };

  const openMenu = () => {
    setMenuIsOpen(menuIsOpen ? false : true);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>LuxeShop</h1>
          </div>
          <div className="header-movile-syle">
            <div className="header-actions">
              <button className="cart-btn" onClick={openCart}>
                <IoCartSharp className="ic-cart" />{" "}
                <div>{cart.length > 0 ? cart.length : ""}</div>
              </button>
              <div
                className="cart-view"
                style={isOpen ? { display: "block" } : { display: "none" }}
              >
                <Cart />
              </div>
            </div>
            <div className="btn-menu" onClick={openMenu}>
              <IoMenu />
            </div>
          </div>
          <div className="header-pc-style">
            <HeaderNav auth={auth} />
            <div className="header-right">
              {auth?.name ? (
                <div className="login-panel">
                  <div>{auth?.name || "Invitado"}</div>
                  <div className="auth-container">
                    <div onClick={logOut}>Cerrar Sesión</div>
                  </div>
                </div>
              ) : (
                <div className="auth-container">
                  <Link to="/login">Inicia Sesión</Link>
                </div>
              )}

              <div className="header-actions">
                <button className="cart-btn" onClick={openCart}>
                  <IoCartSharp className="ic-cart" />{" "}
                  <div>{cart.length > 0 ? cart.length : ""}</div>
                </button>
                <div
                  className="cart-view"
                  style={isOpen ? { display: "block" } : { display: "none" }}
                >
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="menu-nav"
          style={
            menuIsOpen == true ? { display: "block" } : { display: "none" }
          }
        >
          <div className="header-right">
            {auth?.name ? (
              <div className="login-panel">
                <div>{auth?.name || "Invitado"}</div>
                <div className="auth-container">
                  <HeaderNav auth={auth} />
                  <div onClick={logOut}>Cerrar Sesión</div>
                </div>
              </div>
            ) : (
              <div className="auth-container">
                <HeaderNav auth={auth} />
                <Link to="/login">Inicia Sesión</Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
