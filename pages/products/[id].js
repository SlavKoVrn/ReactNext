import { useRouter } from "next/router";
import { products } from "../../data/products";
import ProductDetail from "../../components/ProductDetail";

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  // Find the product by ID
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <ProductDetail product={product} />
    </div>
  );
}
