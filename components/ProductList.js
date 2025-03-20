import Link from "next/link";

export default function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>
            <strong>{product.name}</strong> - ${product.price}
          </Link>
        </li>
      ))}
    </ul>
  );
}
