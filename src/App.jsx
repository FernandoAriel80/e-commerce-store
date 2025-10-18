import "./App.css";
import { CartProvider } from "./contexts/CartProvider";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </>
  );
}

export default App;
