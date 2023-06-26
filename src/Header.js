import { Link } from "react-router-dom";
const Header = ()=>(
<>
<nav className="navbar text-light bg-primary navbar-expand-lg" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" style={{fontWeight:"bold"}} href="/">Shopify</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/">About us</a> */}
          <Link className="nav-link" to="/about">About us</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/">Contact us</a> */}
          <Link className="nav-link" to="/contact">Contact us</Link>
        </li>      
      </ul>
    </div>
  </div>
</nav>
{/* <nav classNameName="navbar navbar-dark bg-primary" style={{height:"50px"}}>
<a classNameName="navbar-brand" style={{marginLeft:"5px"}} href="/">Ecart</a>
</nav> */}
</>
);

export default Header;
