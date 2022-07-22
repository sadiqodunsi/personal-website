import { Link } from "react-router-dom";
import "./logo.css";

const Logo = ({color}) => {
  return (
    <>
      <Link to="/" className={ `site-logo${color ? ` ${color}` : ''}` }>SQ</Link>
    </>
  )
}

export default Logo