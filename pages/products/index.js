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
          <div key={product.id} className="col-md-4 pb-5">
            <div className="card h-100">

              {/* Product Link */}
              <Link href={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">

                <h5 className="card-title no-link">{product.title}</h5>
                <p className="card-text text-muted no-link">{product.category}</p>
                <p className="card-text no-link">${product.price}</p>

              </div>
              </Link>

            </div>

            {/* Like Button */}
            <button
                className={`btn btn-sm like-button ${
                    likedProducts.has(product.id) ? "liked" : "unliked"
                    }`}
                onClick={() => toggleLike(product.id)}
            >
              <img
                  src={
                    likedProducts.has(product.id)
                        ? "data:image/png;base64,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"
                        : "data:image/png;base64,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"
                  }
                  alt={likedProducts.has(product.id) ? "Liked" : "Unliked"}
                  style={{width:'25px'}}
              />
            </button>

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