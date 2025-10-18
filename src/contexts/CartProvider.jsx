import { useState } from "react";
import { CartContext } from "./CartContext.js";

export function CartProvider({ children }) {
  const [products, setProducts] = useState([]);

  const addCart = (product) => {
    const existingPoduct = products.find((item) => item.id === product.id);

    if (existingPoduct) {
      setProducts(
        products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setProducts([...products, { ...product, quantity: 1 }]);
    }
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  const quantityUpdate = (id, newQuantity) => {
    if (newQuantity <= 0) {
      deleteProduct(id);
      return;
    }

    setProducts(
      products.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const cleanCart = () => {
    setProducts([]);
  };

  const [isOpen, setIsOpen] = useState(false);
  const openCart = () => {
    setIsOpen(isOpen ? false : true);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        isOpen,
        addCart,
        cleanCart,
        openCart,
        deleteProduct,
        quantityUpdate,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
