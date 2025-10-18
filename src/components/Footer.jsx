import "../assets/footer.css";
export default function Footer() {
  return (
    <>
      <footer id="footer" className="footer" >
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>LuxeShop</h3>
              <p>
                Tu destino para productos de alta calidad y diseño exclusivo.
              </p>
            </div>
            <div className="footer-section">
              <h4>Enlaces Rápidos</h4>
              <ul>
                <li>
                  <a href="#inicio">Inicio</a>
                </li>
                <li>
                  <a href="#productos">Productos</a>
                </li>
                <li>
                  <a href="#categorias">Categorías</a>
                </li>
                <li>
                  <a href="#contacto">Contacto</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contacto</h4>
              <p>Email: info@luxeshop.com</p>
              <p>Teléfono: +1 234 567 890</p>
            </div>
            <div className="footer-section">
              <h4>Síguenos</h4>
              <div className="social-links">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 LuxeShop. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
