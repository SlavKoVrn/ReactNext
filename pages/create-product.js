import { useRouter } from "next/router";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductForm from "../components/ProductForm";

export default function CreateProductPage() {
  const router = useRouter();
  const { products, setProducts } = useContext(ProductContext);

  // Handle form submission
  const handleCreate = (newProduct) => {
    const newProductId = products.length + 1; // Generate a new ID
    const createdProduct = { ...newProduct, id: newProductId };
    setProducts([...products, createdProduct]);

    alert("Product created successfully!");
    router.push(`/products/${newProductId}`); // Redirect to the product detail page
  };

  return (
    <div className="container mt-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/products">Products</a></li>
        <li class="breadcrumb-item active" aria-current="page">Create New Product</li>
      </ol>
    </nav>
      <h1 className="text-center mb-4">Create New Product</h1>
      <ProductForm onSubmit={handleCreate} />
    </div>
  );
}