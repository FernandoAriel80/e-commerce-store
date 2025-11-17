import "./App.css";
import { AuthProvider } from "./contexts/AuthProvider";
import { CartProvider } from "./contexts/CartProvider";
import AppRoutes from "./routes/AppRoutes";

function App() {

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
