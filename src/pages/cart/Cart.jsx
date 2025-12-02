import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import "./assets/cart.css";
import Overlay from "../../components/Overlay";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const { cart, openCart, deleteProduct, addQuantity, removeQuantity } =
    useContext(CartContext);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();
  const total = subtotal;

  const payProducts = () => {
    openCart(false)
    navigate("/payment");
  };

  return (
    <>
      <Overlay>
        <div className="cart">
          <button className="close-btn" onClick={() => openCart(false)}>
            ×
          </button>
          {cart && cart.length > 0 ? (
            cart.map((product) => (
              <div className="cart-item" key={product.id}>
                <img src={product.image} alt={product.title} />
                <div className="cart-detail">
                  <p>{product.title}</p>
                  <div>
                    <span>Cantidad: {product.quantity}</span>
                    <p className="product-price">${product.price}</p>
                  </div>
                </div>
                <div className="btns-cart">
                  <div className="btns-add-and-rem">
                    <button onClick={() => removeQuantity(product.id)}>
                      -
                    </button>
                    <button onClick={() => addQuantity(product.id)}>+</button>
                  </div>
                  <button
                    className="trash-btn"
                    onClick={() => deleteProduct(product.id)}
                  >
                    <FaRegTrashAlt />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>carrito vacio</p>
          )}
          <div
            className="cart-footer"
            style={cart.length > 0 ? { display: "block" } : { display: "none" }}
          >
            <p className="product-price">
              <strong>Total:</strong> ${total.toFixed(2)}
            </p>
            <button className="checkout-btn" onClick={payProducts}>
              Comprar
            </button>
          </div>
        </div>
      </Overlay>
    </>
  );
}
