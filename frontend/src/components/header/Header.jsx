import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header-container">
        <div className="header">
            <h1 className="title">Full stack developer & Business graduate</h1>
            <p className="desc">I have a masters in business and I write beautiful code</p>
            <FontAwesomeIcon className="icon" icon={faCode} size='6x' />
        </div>
    </div>
  )
}

export default Header