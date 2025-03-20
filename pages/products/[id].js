import { useRouter } from "next/router";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { products, loading, error } = useContext(ProductContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div>
      <h1>Product Details</h1>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
