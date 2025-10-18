import { Link } from 'react-router-dom';
import './assets/home.css'
export default function Home() {
  return (
    <>
      <section id="inicio" className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Bienvenido a LuxeShop</h2>
            <p>Descubre productos exclusivos con la mejor calidad y diseño</p>
            <Link to='/productos' className="cta-btn">Explorar Colección</Link>
          </div>
        </div>
      </section>
    </>
  );
}
