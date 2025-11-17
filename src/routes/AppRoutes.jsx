import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/products/components/ProductDetails";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Payment from "../pages/payment/Payment";
import ProtectedRoute from "../middleware/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/*  <Route path="about" element={<About />} /> */}
        <Route path="productos" element={<Products />} />
        <Route path="producto-detalles/:id" element={<ProductDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={
            <>
              <h1>404 Pagina no encontrada</h1>
            </>
          }
        />
      </Route>
    </Routes>
  );
}
