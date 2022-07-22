import { useState } from "react";
import "./input.css";

const Input = (props) => {
    const [ focus, setFocus ] = useState(false);
    const { label, type, errorMessage, ...rest } = props;
    const handleFocus = () => {
      setFocus(true);
    }
    return (
        <>
            { 
            type === "textarea" ? 
            <div className="field">
                <label htmlFor={rest.id}>{label}</label>
                <textarea {...rest} onBlur={handleFocus} rows={10} focused={focus.toString()} />
                <div>{errorMessage}</div>
            </div> :
            <div className="field">
                <label htmlFor={rest.id}>{label}</label>
                <input type={type} {...rest} onBlur={handleFocus} focused={focus.toString()} />
                <div>{errorMessage}</div>
            </div>
            }
        </>
    )
}

export default Input