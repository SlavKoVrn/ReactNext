import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../context/ProductContext";
import ProductForm from "../../../components/ProductForm";
import Link from "next/link";
import { toast } from 'react-toastify';

export default function EditProductPage() {
  const router = useRouter();
  const { id } = router.query; // Extract product ID from the URL
  const { products, setProducts } = useContext(ProductContext);

  // Fetch the product data when the component mounts or the ID changes
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id && products.length > 0) {
      const selectedProduct = products.find((p) => p.id === parseInt(id));
      if (selectedProduct) {
        setProduct(selectedProduct);
      } else {
        toast.error('Product not found!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        router.push("/products");
      }
    }
  }, [id, products, router]);

  // Handle form submission
  const handleUpdate = (updatedProduct) => {
    const updatedProducts = products.map((p) =>
      p.id === parseInt(id) ? { ...p, ...updatedProduct } : p
    );
    setProducts(updatedProducts);

    toast.success('Product updated successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    router.push(`/products/${id}`); // Redirect to the product detail page
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/products" legacyBehavior>
                <a>Products</a>
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product.title}
          </li>
        </ol>
      </nav>
      <h1 className="text-center mb-4">Edit Product</h1>
      <ProductForm initialData={product} onSubmit={handleUpdate} />
    </div>
  );
}
