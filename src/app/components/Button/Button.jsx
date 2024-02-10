import React from "react";
import './Button.scss'

const Button = ({ buttonText }) => {
  return (
     <button className="primary-btn" type="submit">{buttonText}</button>
  );
}

export default Button;