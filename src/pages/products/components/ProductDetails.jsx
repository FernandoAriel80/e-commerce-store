import { useParams } from "react-router-dom";
import "../assets/productDetails.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";
import RelatedProducts from "./RelatedProducts";
import { ProductContext } from "../../../contexts/ProductContext";
import AlertMessage from "../../../components/AlertMessage";
export default function ProductDetails() {
  const { addCart } = useContext(CartContext);
  const { product, productCategory, getProduct, getProductsCategory } =
    useContext(ProductContext);

  const [alert, setAlert] = useState({
    visible: false,
    type: "",
    message: "",
  });

  const showAlert = (type, message) => {
    setAlert({ visible: true, type, message });
  };

  const { id } = useParams();

  const addToCart = (product) => {
    addCart(product);
    showAlert("success", `${product.title} agregado al carrito`);
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);

  useEffect(() => {
    getProductsCategory();
  }, [product]);

  return (
    <>
      <AlertMessage
        visible={alert.visible}
        type={alert.type}
        message={alert.message}
        onClose={() => setAlert((prev) => ({ ...prev, visible: false }))}
      />
      <div className="product-detail-content">
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.image} alt={product.title} />
            <span className="category-badge">{product.category}</span>
          </div>
        </div>

        <div className="product-info">
          <div className="product-header">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-category">{product.category}</p>
            <div className="product-rating">
              <div className="stars">
                {"★".repeat(4)}
                <span className="half-star">★</span>
                <span className="rating-text">(4.5/5)</span>
              </div>
              <span className="reviews">128 reseñas</span>
            </div>
          </div>

          <div className="product-price-section">
            <span className="discount-badge">20% OFF</span>
          </div>

          <div className="product-description">
            <h3>Descripción</h3>
            <p>{product.description}</p>
          </div>

          <div className="product-actions">
            <button
              className="add-to-cart-btn primary"
              onClick={() => addToCart(product)}
            >
              <span className="cart-icon">🛒</span>
              Agregar al Carrito - ${product.price}
            </button>
          </div>

          <div className="additional-info">
            <div className="info-item">
              <span className="info-icon">🚚</span>
              <div>
                <strong>Envío Gratis</strong>
                <p>Recíbelo en 24-48 horas</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">🔄</span>
              <div>
                <strong>Devolución Fácil</strong>
                <p>30 días para devolver</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">🛡️</span>
              <div>
                <strong>Garantía</strong>
                <p>2 años de cobertura</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts productCategory={productCategory} />
    </>
  );
}
