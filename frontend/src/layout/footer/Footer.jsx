import "./footer.css";
import Logo from "../../components/logo/Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <Logo color="white" />
                <div className="slogan">Living, Learning, & Improving</div>
                <div className="social">
                    <a href="https://www.linkedin.com/in/sadiq-odunsi-393397139" target="_blank" rel="noreferrer" className="linkedin">
                        <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
                    </a>
                    <a href="https://github.com/sadiqodunsi" target="_blank" rel="noreferrer" className="github">
                        <FontAwesomeIcon className="icon" icon={faGithub} />
                    </a>
                    <a href="https://www.instagram.com/sadiqodunsi/" target="_blank" rel="noreferrer" className="instagram">
                        <FontAwesomeIcon className="icon" icon={faInstagram} />
                    </a>
                </div>
                <div className="copyright">Copyright © 2022 Sadiq Odunsi</div>
            </div>
        </div>
    );
}
 export default Footer