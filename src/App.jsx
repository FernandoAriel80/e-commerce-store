import "./App.css";
import { AuthProvider } from "./contexts/AuthProvider";
import { CartProvider } from "./contexts/CartProvider";
import { ProductProvider } from "./contexts/ProductProvider";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <AppRoutes />
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </>
  );
}

export default App;
