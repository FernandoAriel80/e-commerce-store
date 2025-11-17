import { useParams } from "react-router-dom";
import "../assets/productDetails.css";
import { useContext, useEffect, useState } from "react";
import ProductService from "../../../services/product-service";
import { CartContext } from "../../../contexts/CartContext";
import RelatedProducts from "./RelatedProducts";
export default function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const { addCart } = useContext(CartContext);
  const { id } = useParams();

  const addToCart = (product) => {
    addCart(product);
    alert(`${product.title} agregado al carrito`);
  };
  const getProduct = async () => {
    const productData = await ProductService.getProductById(id);
    setProduct(productData);
  };

  const getProductsCategory = async () => {
    const productData = await ProductService.getByCategory(product.category);
    setProductCategory(productData);
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  useEffect(() => {
    getProductsCategory();
  }, [product]);

  return (
    <>
      <div className="product-detail-content">
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.image} alt={product.title} />
            <span className="category-badge">{product.category}</span>
          </div>
        </div>

        {/* Información del Producto */}
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
            {/*  <p className="current-price">${product.price.toFixed(2)}</p>
              <p className="original-price">$ {(product.price * 1.2).toFixed(2)}</p> */}
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
              {/* {(product.price * quantity).toFixed(2) }*/}
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

      {/* related-products */}
      <RelatedProducts productCategory={productCategory} />
    </>
  );
}
