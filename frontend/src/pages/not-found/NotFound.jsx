import { Helmet } from "react-helmet-async";
import Navbar from "../../layout/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import "./not-found.css";

const NotFound = () => {
    const siteTitle = process.env.REACT_APP_SITE_TITLE;
    return (
        <>
            <Helmet>
            <title>Page not found | {siteTitle}</title>
            <meta name="description" content="Page not found - 404 error" />
            </Helmet>
            <Navbar/>
            <div className="not-found">
                <FontAwesomeIcon className="icon" icon={faFaceFrown} size="5x" />
                <h1>Looks like you're lost</h1>
                <p className="sub">Maybe try a different page?</p>
                <Link to="/" className="button">Go home</Link>
            </div>
        </>
    )
}

export default NotFound