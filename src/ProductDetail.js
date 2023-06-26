import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const {id} = useParams();
  const getProduct = async () => {
    const data = await fetch("https://fakestoreapi.com/products/" +id);
    const json = await data.json();
    setProduct(json);
  };
  
  useEffect(()=>{
    getProduct()
  },[])
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img style={{width:"100px",margin:"0 auto"}} src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
         {product.description}
        </p>      
      </div>
    </div>
  );
};
export default ProductDetail;
