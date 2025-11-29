import { useContext, useState } from "react";
import "../assets/productsList.css";
import { CartContext } from "../../../contexts/CartContext";
import { Link } from "react-router-dom";
import { ProductContext } from "../../../contexts/ProductContext";
import Pagination from "../../../components/Pagination";
import AlertMessage from "../../../components/AlertMessage";
import InputSearch from "../../../components/InputSearch";

export default function ProductsList() {
  const { addCart } = useContext(CartContext);
  const { products, setFilterTitle, filterTitle } = useContext(ProductContext);

  const [alert, setAlert] = useState({
    visible: false,
    type: "",
    message: "",
  });

  const showAlert = (type, message) => {
    setAlert({ visible: true, type, message });
  };

  const addToCart = (product) => {
    addCart(product);
    showAlert("success", `${product.title} agregado al carrito ✔️`);
  };

  return (
    <>
      <AlertMessage
        visible={alert.visible}
        type={alert.type}
        message={alert.message}
        onClose={() => setAlert((prev) => ({ ...prev, visible: false }))}
      />
      <section id="productos" className="products-section">
        <div className="search-container">
          <InputSearch search={filterTitle} setSearch={setFilterTitle} />
        </div>
        <div className="container">
          <h2 className="section-title">Nuestros Productos</h2>
          {products != null ? (
            <>
              <div className="products-grid">
                {products.map((product) => (
                  <div key={product.id} className="product-card">
                    <Link
                      to={`/producto-detalles/${product.id}`}
                      className="link-properties"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <div className="product-image">
                        <img src={product.image} alt={product.title} />
                        <span className="category-tag">{product.category}</span>
                      </div>
                    </Link>
                    <div className="product-info">
                      <h3 className="product-title">{product.title}</h3>
                      <p className="product-price">${product.price}</p>

                      <button
                        className="add-to-cart-btn"
                        onClick={() => addToCart(product)}
                      >
                        Agregar al Carrito
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pagination-context">
                <Pagination />
              </div>
            </>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </section>
    </>
  );
}
