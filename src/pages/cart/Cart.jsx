import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import "./assets/cart.css";
export default function Cart() {
  const { products, openCart, deleteProduct } = useContext(CartContext);
  const subtotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total = subtotal;
  return (
    <>
      <div className="cart-overlay">
        <div className="cart">
          <button className="close-btn" onClick={() => openCart(false)}>
            ×
          </button>
          {products && products.length > 0 ? (
            products.map((product) => (
              <div className="cart-item" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div>
                  <p>{product.name}</p>
                  <span>Cantidad: {product.quantity}</span>
                  <p className="product-price">${product.price}</p>
                </div>
                <div>
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
          <div className="cart-footer"  style={products.length > 0? {display: 'block'}:{display: 'none'}}>
            <p className="product-price">
              <strong>Total:</strong> ${total.toFixed(2)}
            </p>
            <button className="checkout-btn">Comprar</button>
          </div>
        </div>
      </div>
    </>
  );
}
