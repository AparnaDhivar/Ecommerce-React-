 import { Link } from "react-router-dom";
 import { Nav } from "react-bootstrap";
 function Navlinks(){
     return(
         <>
        
         <Link to="/home" className="nav-link">Home</Link>
        <Link to="/mens" className="nav-link">Mens</Link>
        <Link to="/womens" className="nav-link">Womens</Link>
        <Link to="/kids" className="nav-link">kids</Link>
         </>
        
     )
 }

 export default Navlinks;