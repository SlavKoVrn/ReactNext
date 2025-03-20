import Link from "next/link";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

export default function ProductsPage() {
  const { products, loading, error } = useContext(ProductContext);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-danger">Error: {error}</p>;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Product List</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted">{product.category}</p>
                <p className="card-text">${product.price}</p>
                <Link href={`/products/${product.id}`}>
                    <strong>{product.title}</strong> - ${product.price}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
