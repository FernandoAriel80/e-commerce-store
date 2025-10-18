import { useEffect, useState } from "react";
import "../assets/productsList.css";
import ProductService from "../../../services/product-service";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const productsData = await ProductService.getAllProducts();
    setProducts(productsData);
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);
  return (
    <>
      <section id="productos" className="products-section">
        <div className="container">
          <h2 className="section-title">Nuestros Productos</h2>
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <a
                  href={`/producto-detalles/${product.id}`}
                  className="link-properties"
                >
                  <div className="product-image">
                    <img src={product.image} alt={product.title} />
                    <span className="category-tag">{product.category}</span>
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                    <button
                      className="add-to-cart-btn"
                      /*  onClick={() => addToCart(product)} */
                    >
                      Agregar al Carrito
                    </button>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
