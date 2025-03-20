import Link from "next/link";
import { products } from "../../data/products";
import ProductList from "../../components/ProductList";

export default function ProductsPage() {
  return (
    <div>
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
}
