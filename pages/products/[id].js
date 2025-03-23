import { useRouter } from "next/router";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import Link from "next/link";

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { products, loading, error } = useContext(ProductContext);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-danger">Error: {error}</p>;

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p className="text-center">Product not found.</p>;

  return (
    <div className="container mt-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
            <Link href="/products" legacyBehavior>
                <a>Products</a>
            </Link>
	    </li>
        <li class="breadcrumb-item active" aria-current="page">{product.title}</li>
      </ol>
    </nav>
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p className="text-muted">{product.category}</p>
          <h3 className="text-primary">${product.price}</h3>
          <p>{product.description}</p>

          <Link href={`/products/${product.id}/edit`}>
          <button className="btn btn-primary">
            Edit
          </button>
          </Link>

          <button className="btn btn-secondary" onClick={() => router.back()}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
