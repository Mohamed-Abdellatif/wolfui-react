import React from 'react';
import '../styles/button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const variantClass = `my-button--${variant}`;

  return (
    <button
      className={`my-button ${variantClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
