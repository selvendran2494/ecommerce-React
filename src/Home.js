import ProductCard from "./ProductCard";
import CardSkeleton from "./CardSkeleton";
import { useEffect, useState } from "react";


const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  // api call
  const getProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setProducts(json);
  };
  return (
    <div className="row">
      {products.length === 0 ? (
        <CardSkeleton cards={20} />
      ) : (
        products.map((product) => {
          return <ProductCard key={product.id} product={product} />; // Whenever iterating use Id for unique key
        })
      )}
    </div>
  );
};
export default Home;
