const ProductCard = () => (
  <div className="card m-2" style={{width:"20rem"}}>
    <img style={{maxWidth:"100%",height:"100px",objectFit:"contain"}} className="card-img-top" src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="/" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
);

export default ProductCard
