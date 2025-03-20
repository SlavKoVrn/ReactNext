// pages/products/index.js
import Link from "next/link";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";

export default function ProductsPage() {
  const {
    products,
    loading,
    error,
    currentPage,
    setCurrentPage,
    productsPerPage,
  } = useContext(ProductContext);

  // State to track liked products
  const [likedProducts, setLikedProducts] = useState(new Set());

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-danger">Error: {error}</p>;

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Toggle like state for a product
  const toggleLike = (productId) => {
    setLikedProducts((prevLikedProducts) => {
      const newLikedProducts = new Set(prevLikedProducts);
      if (newLikedProducts.has(productId)) {
        newLikedProducts.delete(productId); // Unlike
      } else {
        newLikedProducts.add(productId); // Like
      }
      return newLikedProducts;
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Product List</h1>
      <div className="row">
        {currentProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">

                {/* Like Button */}
                <button
                  className={`btn btn-sm like-button ${
                    likedProducts.has(product.id) ? "liked" : ""
                  }`}
                  onClick={() => toggleLike(product.id)}
                >
                  <span className="like-icon">❤️</span>
                </button>

                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted">{product.category}</p>
                <p className="card-text">${product.price}</p>

                {/* Product Link */}
                <Link href={`/products/${product.id}`}>
                  <strong>{product.title}</strong> - ${product.price}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <nav aria-label="Page navigation" className="mt-4">
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              key={index + 1}
              className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}