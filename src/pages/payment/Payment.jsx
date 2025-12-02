import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./assets/payment.css";
import AlertMessage from "../../components/AlertMessage";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const { cart, cleanCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [alert, setAlert] = useState({
    visible: false,
    type: "",
    message: "",
  });

  const showAlert = (type, message) => {
    setAlert({ visible: true, type, message });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = () => {
    showAlert("success", "¡Pago procesado exitosamente!");

    setTimeout(() => {
      cleanCart();
      navigate("/productos");
    }, 700); 
  };

  if (cart.length === 0) {
    return (
      <div className="payment-emty-container">
        <h2 className="payment-title">Tu carrito está vacío</h2>
        <p>Agrega productos para proceder al pago</p>
        <a href="/">Volver a la tienda</a>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <AlertMessage
        visible={alert.visible}
        type={alert.type}
        message={alert.message}
        onClose={() => setAlert((prev) => ({ ...prev, visible: false }))}
      />
      <h2 className="payment-title">Resumen del Pedido</h2>

      <div className="payment-products">
        {cart.map((product) => (
          <div key={product.id} className="payment-product">
            <div className="payment-product-left">
              <span>{product.quantity}</span>
            </div>
            <h3>{product.title}</h3>
            <p>${product.price} c/u</p>
            <div className="payment-product-total">
              ${product.price * product.quantity}
            </div>
          </div>
        ))}
      </div>

      <div className="payment-summary">
        <div className="payment-summary-row">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>

      <button className="payment-button" onClick={handleSubmit}>
        Confirmar comprar
      </button>
    </div>
  );
}
