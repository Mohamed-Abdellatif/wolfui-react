import React from "react";
import "../styles/button.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="my-button" {...props}>
      {children}
    </button>
  );
};

export default Button;
