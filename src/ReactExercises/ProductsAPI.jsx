import { useState, useEffect } from "react";

const ProductsAPI = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // TODO 1: دریافت اطلاعات با fetch
    // TODO 2: تبدیل پاسخ به JSON
    // TODO 3: ذخیره اطلاعات با setProducts
    const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsAPI;