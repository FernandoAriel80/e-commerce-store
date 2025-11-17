import { Link } from "react-router-dom";
import "../assets/RelatedProducts.css";
export default function RelatedProducts({ productCategory }) {
  return (
    <>
      <div className="related-products">
        <h3>Productos Relacionados</h3>
        <div className="related-products-grid">
          {productCategory.map((relatedProduct) => (
            <Link
              to={`/producto-detalles/${relatedProduct.id}`}
              className="link-properties"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div key={relatedProduct.id} className="related-product-card">
                <img src={relatedProduct.image} alt={relatedProduct.title} />
                <h4>{relatedProduct.title}</h4>
                <p>${relatedProduct.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
