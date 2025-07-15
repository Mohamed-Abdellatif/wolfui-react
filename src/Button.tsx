
import "./button.css";

import { ReactNode, MouseEventHandler } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="my-button" onClick={onClick}>
      {children}
    </button>
  );
}