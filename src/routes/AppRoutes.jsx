import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/products/components/ProductDetails";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Payment from "../pages/payment/Payment";
import AuthMiddleware from "../middleware/AuthMiddleware";
import Admin from "../pages/admin/Admin";
import AdminMiddleware from "../middleware/AdminMiddleware";

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
          path="dashboard"
          element={
            <AdminMiddleware>
              <Admin />
            </AdminMiddleware>
          }
        />
        <Route
          path="payment"
          element={
            <AuthMiddleware>
              <Payment />
            </AuthMiddleware>
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
