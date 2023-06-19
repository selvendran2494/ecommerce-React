// import './App.css';
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Header from "./Header";
import CardSkeleton from "./CardSkeleton";



function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  },[]);
  // api call
  const getProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setProducts(json);
  };
  return (
    <>
      <Header />
      <div className="row">
        {
        products.length === 0 ? <CardSkeleton cards = {20}/>
        : products.map((product) => {
          return <ProductCard key={product.id} product={product} />; // Whenever iterating use Id for unique key
        })
        }
      </div>
    </>
  );
}

export default App;
