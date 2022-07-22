import "./hello.css";
import { Link } from "react-router-dom";

const Hello = () => {
    return (
        <div className="hello-container">
            <div className="hello">
                <div className="title">Interested in working together?</div>
                <div className="desc">I’m always open to new development projects or partnership opportunities.</div>
                <Link to="/contact" className="button">Say hello</Link>
            </div>
        </div>
    );
}

export default Hello