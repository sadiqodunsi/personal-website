import "./projects.css"

const Projects = () => {
  return (
    <div className="projects-container">
        <div className="projects">
            <div className="project-heading">
                <div className="title">Recent Projects</div>
                <div className="desc">Here are a few projects I've worked on recently</div>
            </div>
            <div className="project-list">
                <figure>
                    <div className="image">
                        <img src="/images/bng.jpg" alt="Business Name Generator" />
                        <a href="https://businessnamegenerator.com" target="_blank" rel="noreferrer">
                            <div className="img-overlay">businessnamegenerator.com</div>
                        </a>
                    </div>
                    <a href="https://businessnamegenerator.com" target="_blank" rel="noreferrer" className="title">Business Name Generator</a>
                    <figcaption>AI-powered brandable business name generator and instant domain availability checker.</figcaption>
                </figure>
                <figure>
                    <div className="image">
                        <img src="/images/viscorner-homepage.jpg" alt="VisCorner" />
                        <a href="https://viscorner.com" target="_blank" rel="noreferrer">
                            <div className="img-overlay">viscorner.com</div>
                        </a>
                    </div>
                    <a href="https://viscorner.com" target="_blank" rel="noreferrer" className="title">VisCorner</a>
                    <figcaption>A highly customized WordPress website that connects customers with service providers near them.</figcaption>
                </figure>
                <figure>
                    <div className="image">
                        <img src="/images/jhareexpress.png" alt="Jhare Express" />
                        <a href="https://jhareexpress.com/" target="_blank" rel="noreferrer">
                            <div className="img-overlay">jhareexpress.com</div>
                        </a>
                    </div>
                    <a href="https://jhareexpress.com" target="_blank" rel="noreferrer" className="title">Jhare Express</a>
                    <figcaption>Built with React JS and WordPress Rest API. JHARE EXPRESS LLC handles shipping from the USA to Nigeria.</figcaption>
                </figure>
                <figure>
                    <div className="image">
                        <img src="/images/personal-website.jpg" alt="Personal website" />
                        <a href="https://sadiqodunsi.com" target="_blank" rel="noreferrer">
                            <div className="img-overlay">sadiqodunsi.com</div>
                        </a>
                    </div>
                    <a href="https://sadiqodunsi.com" target="_blank" rel="noreferrer" className="title">Personal website</a>
                    <figcaption>This is my awesome personal website. I built it with LOVE 😊, React and Node JS.</figcaption>
                </figure>
                <figure>
                    <div className="image">
                        <img src="/images/wp-amazon-ses.jpg" alt="WP Amazon SES and SNS" />
                        <a href="https://github.com/sadiqodunsi/wp-amazon-ses" target="_blank" rel="noreferrer">
                            <div className="img-overlay">WP Amazon SES and SNS</div>
                        </a>
                    </div>
                    <a href="https://github.com/sadiqodunsi/wp-amazon-ses" target="_blank" rel="noreferrer" className="title">WP Amazon SES and SNS</a>
                    <figcaption>WP Amazon SES and SNS is a WordPress plugin for sending emails via Amazon SES and tracking them with Amazon SNS.</figcaption>
                </figure>
                <figure>
                    <div className="image">
                        <img src="/images/wc-paystack.jpg" alt="WC Paystack" />
                        <a href="https://github.com/sadiqodunsi/wc-paystack" target="_blank" rel="noreferrer">
                            <div className="img-overlay">WC Paystack</div>
                        </a>
                    </div>
                    <a href="https://github.com/sadiqodunsi/wc-paystack" target="_blank" rel="noreferrer" className="title">WC Paystack</a>
                    <figcaption>WooCommerce Paystack plugin bypasses the default WooCommerce checkout process to enable direct payment.</figcaption>
                </figure>
            </div>
        </div>
    </div>
  )
}

export default Projects