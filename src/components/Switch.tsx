import React from "react";
import "../styles/switch.css";

export interface SwitchProps extends React.HTMLAttributes<HTMLDivElement> {
  isDark?: boolean;
}

export const Switch: React.FC<SwitchProps> = ({
  className = "",
  isDark = false,
  onClick,
  ...props
}) => {

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (onClick) {
        const event = new MouseEvent("click", { bubbles: true, cancelable: true });
        e.currentTarget.dispatchEvent(event);
      }
    }
  };

  return (
    <div
      className={`toggle-switch ${isDark ? "dark" : ""} ${className}`}
      onClick={onClick}
      role="switch"
      aria-checked={isDark}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      {...props}
    >
      <div className="toggle-circle" />
      <div className="toggle-icon icon-sun" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <defs>
            <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffde4" />
              <stop offset="60%" stopColor="#ffe600" />
              <stop offset="100%" stopColor="#ffd600" />
            </radialGradient>
          </defs>
          <circle cx="12" cy="12" r="6" fill="url(#sunGradient)" />
          <g stroke="#ffe600" strokeWidth="2">
            <line x1="12" y1="2" x2="12" y2="5" />
            <line x1="12" y1="19" x2="12" y2="22" />
            <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
            <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
            <line x1="2" y1="12" x2="5" y2="12" />
            <line x1="19" y1="12" x2="22" y2="12" />
            <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
            <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
          </g>
        </svg>
      </div>
      <div className="toggle-icon icon-moon" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <defs>
            <radialGradient id="moonGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="70%" stopColor="#7c4dff" />
              <stop offset="100%" stopColor="#3700b3" />
            </radialGradient>
          </defs>
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="url(#moonGradient)" />
        </svg>
      </div>
    </div>
  );
};

