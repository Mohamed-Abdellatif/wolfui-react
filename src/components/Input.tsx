import React from "react";
import "../styles/Input.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
}

export const Input: React.FC<InputProps> = ({
  children,
  label = "Label",
  type = "basic",
  className = "",
  ...props
}) => {
  if (type === "outlinedLabel") {
    return (
      <div className="form-group">
        <input className="form-input" />
        <label className="form-label">{label}</label>
      </div>
    );
  }
  if (type === "basic") {
    return (
      <div className="form-group">
        <input className="form-input" />;
      </div>
    );
  }
};
