import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../context/ProductContext";

export default function EditProductPage() {
  const router = useRouter();
  const { id } = router.query; // Extract product ID from the URL
  const { products, setProducts } = useContext(ProductContext);

  // State to hold the product being edited
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });

  // Fetch the product data when the component mounts or the ID changes
  useEffect(() => {
    if (id && products.length > 0) {
      const selectedProduct = products.find((p) => p.id === parseInt(id));
      if (selectedProduct) {
        setProduct(selectedProduct);
      } else {
        alert("Product not found!");
        router.push("/products");
      }
    }
  }, [id, products, router]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the product in the context
    const updatedProducts = products.map((p) =>
      p.id === parseInt(id) ? { ...p, ...product } : p
    );
    setProducts(updatedProducts);

    alert("Product updated successfully!");
    router.push(`/products/${id}`); // Redirect to the product detail page
  };

  return (
    <div className="container mt-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/products">Products</a></li>
        <li class="breadcrumb-item active" aria-current="page">{product.title}</li>
      </ol>
    </nav>
      <h1 className="text-center mb-4">Edit Product</h1>
      <form onSubmit={handleSubmit} className="row g-3">
        {/* Title */}
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={product.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Price */}
        <div className="col-md-6">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>

        {/* Category */}
        <div className="col-md-6">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          />
        </div>

        {/* Image URL */}
        <div className="col-md-6">
          <label htmlFor="image" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={product.image}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description */}
        <div className="col-12">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={product.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
