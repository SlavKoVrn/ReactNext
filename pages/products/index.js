import Link from "next/link";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

export default function ProductsPage() {
  const { products, loading, error } = useContext(ProductContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <strong>{product.title}</strong> - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
