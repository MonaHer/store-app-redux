import { useGetAllProductsQuery } from "./apiSlice";
import ProductCard from "./ProductCard";
import { useState } from "react";

export default function ProductsList() {
  const { data, isError, isLoading } = useGetAllProductsQuery();
  const [isVisible, setIsVisible] = useState(3);

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading..</div>;
  }

  function showMoreProducts() {
    setIsVisible(isVisible + 3);
  }

  function showLessProducts() {
    setIsVisible(isVisible - 3);
  }

  return (
    <>
      <h1>Our Products</h1>
      <ul>
        {data.slice(0, isVisible).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
      <button onClick={showLessProducts} disabled={isVisible <= 3}>
        Show less products
      </button>
      <button onClick={showMoreProducts} disabled={isVisible >= data.length}>
        Show more products
      </button>
    </>
  );
}
