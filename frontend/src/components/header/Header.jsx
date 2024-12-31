import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header-container">
        <div className="header">
            <h1 className="title">Full Stack Developer</h1>
            <p className="desc">Crafting clean, efficient, and scalable code for modern web applications.</p>
            <FontAwesomeIcon className="icon" icon={faCode} size='6x' />
        </div>
    </div>
  )
}

export default Header