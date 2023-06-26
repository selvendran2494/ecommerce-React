import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  // console.log("Props value", product);
  const { title, price, image,id } = product;
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img
        style={{ maxWidth: "100%", height: "100px", objectFit: "contain" }}
        className="card-img-top"
        src={image}
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p>
          <strong>Price:</strong> Rs.{price}
        </p>
        <a href="/" className="btn btn-primary">
          Buy now
        </a>
        {/* <a href="/" className="btn btn-info mx-2">
          View details
        </a> */}
        <Link to = {"product/" +id} className="btn btn-info mx-2">View details</Link>
      </div>
    </div>
  );
};

export default ProductCard;
