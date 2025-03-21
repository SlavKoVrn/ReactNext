import { products as dataProducts } from "../data/products";
import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  // Fetch products from the API
  const fetchProducts = async () => {
    try {
      setTimeout(() => {
        setProducts(dataProducts);
        setLoading(false);
      }, 2000);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
    /*
    try {
      const response = await fetch("http://restapi.kadastrcard.ru/api/products");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err.message);
      setError(err.message || "Failed to fetch products.");
      setLoading(false);
    }
    */
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        loading,
        error,
        currentPage,
        setCurrentPage,
        productsPerPage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
