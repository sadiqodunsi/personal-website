import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Navbar from "../../layout/navbar/Navbar";
import "./contact.css"
import Input from "../../components/form/input/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [ loading, setLoading ] = useState( false );
  const [ success, setSuccess ] = useState( false );
  const siteTitle = process.env.REACT_APP_SITE_TITLE;

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "",
      errorMessage: "Please enter your name",
      label: "Name",
      required: false,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "",
      errorMessage: "Please enter a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "text",
      placeholder: "",
      errorMessage: "Please enter a valid phone number",
      label: "Phone number",
      pattern: "[0-9+-]{6,}",
      required: false,
    },
    {
      id: 4,
      name: "message",
      type: "textarea",
      placeholder: "",
      errorMessage: "Please enter your message",
      label: "Message",
      required: true,
    }
  ];

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData( e.target );
    setLoading( true );
    fetch(`${window.location.origin}/contact`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify( Object.fromEntries(formData.entries()) )
    })
    .then( async response => {
        const data = await response.json();
        if ( ! response.ok ) {
          return Promise.reject(data);
        }
        setSuccess( true );
        window.scrollTo(0, 0);
    })
    .catch( err => {
        alert( err );
    })
    .finally( () => {
        setLoading( false );
    });
  }

  return (
    <>
      <Helmet>
        <title>Contact | {siteTitle}</title>
        <meta name="description" content="Get in touch with me." />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <Navbar formSubmitted={success} />
      <div className="contact-form-container">
        { ! success && 
          <div className="contact-form">
            <h1 className="title">Good to have you here. How can I help you today?</h1>
            <form onSubmit={handleSubmit}>
              <div className="double">
                <Input {...inputs[0]} />
                <Input {...inputs[1]} />
              </div>
              <Input {...inputs[2]} />
              <Input {...inputs[3]} />
              { loading && <button disabled>Submitting...</button> }
              { ! loading && <button>Submit</button> }
            </form>
          </div>
        }
        { success && 
        <div className="form-submitted">
          <FontAwesomeIcon className="icon" icon={faEnvelopeCircleCheck} size="5x" />
          <div className="title">Message received. Thanks!</div>
          <div className="sub">I'll get back to you shortly.</div>
          <Link to="/" className="button">Go home</Link>
        </div>
        }
      </div>
    </>
  )
}

export default Contact