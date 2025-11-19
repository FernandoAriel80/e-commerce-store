import { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";
import ProductService from "../services/product-service";

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState([]);
  const [productCategory, setProductCategory] = useState([]);

  ///pagination
  const [currentpage, setCurrentpage] = useState(1);
  const [emtyPage, setEmtyPage] = useState(false);

  const limit = 8;

  const changePage = (newPage) => {
    if (newPage >= 1) {
      setCurrentpage(newPage);
    }
  };

  ////////
  useEffect(() => {
    getProducts();
  }, [currentpage]);

  const getProducts = async () => {
    const data = await ProductService.getAllProducts(currentpage, limit);
    if (data.length > 0) {
      setProducts(data);
      setEmtyPage(false);
    } else {
      setEmtyPage(true);
    }
  };

  const getProduct = async (id) => {
    const data = await ProductService.getProductById(id);
    setProduct(data);
  };

  const getProductsCategory = async () => {
    const productData = await ProductService.getByCategory(product.category);
    setProductCategory(productData);
  };

  return (
    <>
      <ProductContext.Provider
        value={{
          products,
          product,
          productCategory,
          getProduct,
          getProductsCategory,
          ////pagination
          currentpage,
          emtyPage,
          limit,
          changePage,
          ////
        }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
}
