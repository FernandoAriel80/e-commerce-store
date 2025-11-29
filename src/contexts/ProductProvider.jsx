import { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext";
import ProductService from "../services/product-service";

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const [filterTitle, setFilterTitle] = useState("");

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
  }, [currentpage, filterTitle]);

  const getProducts = async () => {
    const data = await ProductService.getAllProducts(currentpage, limit);
    if (data.length > 0) {
      if (filterTitle) {
        const filt = data.filter((p) =>
          p.title.toLowerCase().includes(filterTitle.toLowerCase())
        );
        setProducts(filt);
        setEmtyPage(false);
      } else {
        setProducts(data);
        setEmtyPage(false);
      }
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

  const createProduct = async (data) => {
    const result = await ProductService.createProduct(data);
    if (result) {
      await getProducts();
    }
    return result;
  };

  const updateProduct = async (data, id) => {
    const result = await ProductService.updateProduct(data, id);
    if (result) {
      await getProducts();
    }
    return result;
  };

  const deleteProduct = async (id) => {
    const result = await ProductService.daleteProduct(id);
    if (result) {
      await getProducts();
    }
    return result;
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
          createProduct,
          updateProduct,
          deleteProduct,
          ////pagination
          currentpage,
          emtyPage,
          limit,
          changePage,
          setFilterTitle,
          filterTitle,
          ////
        }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
}
