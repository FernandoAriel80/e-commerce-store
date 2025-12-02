import { Link } from "react-router-dom";
import "./assets/home.css";

export default function Home() {
  return (
    <>
      {/* Banner principal */}
      <section id="inicio" className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Bienvenido a LuxeShop</h2>
            <p>Descubre productos exclusivos con la mejor calidad y diseño</p>
            <Link to="/productos" className="cta-btn">
              Explorar Colección
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de categorías */}
      <section className="categories">
        <h3>Nuestras Categorías</h3>
        <div className="categories-grid">
          <Link to="/producto-detalles/4" className="category-card">
            <h4>Ropa</h4>
          </Link>
          <Link to="/producto-detalles/7" className="category-card">
            <h4>Joyas</h4>
          </Link>
          <Link to="/producto-detalles/13" className="category-card">
            <h4>Electrodomésticos</h4>
          </Link>
        </div>
      </section>

      {/* Sección informativa */}
      <section className="info-section">
        <div className="info-card">
          <h4>Envíos a Todo el País</h4>
          <p>Recibí tus productos rápido y con seguimiento en tiempo real.</p>
        </div>
        <div className="info-card">
          <h4>Pagos Seguros</h4>
          <p>Aceptamos tarjetas, débito, billeteras virtuales y transferencias.</p>
        </div>
        <div className="info-card">
          <h4>Calidad Garantizada</h4>
          <p>Todos nuestros productos pasan por controles estrictos.</p>
        </div>
      </section>
    </>
  );
}
