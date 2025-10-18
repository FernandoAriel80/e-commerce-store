import { Outlet } from "react-router-dom";
import "../assets/mainLayout.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      {/* <header>
        <nav>
          <a href="/">Home</a>
          <a href="/productos">Productos</a>
        </nav>
      </header> */}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
