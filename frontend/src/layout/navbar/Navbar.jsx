import "./navbar.css"
import Logo from "../../components/logo/Logo";
import { Link, useLocation } from "react-router-dom";

const Navbar = ( {formSubmitted} ) => {
  const location = useLocation();
  
  return (
    <div className="nav-container">
      { ! formSubmitted &&
        <div className="navbar">
            <Logo/>
            <div className="nav-pages">
                { location.pathname !== "/contact" && 
                  <Link to="/contact" className="contact">Say hello</Link>
                }
            </div>
        </div>
      }
    </div>
  )
}

export default Navbar