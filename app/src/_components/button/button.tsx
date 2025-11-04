import "./button.css";
import type { ButtonProps } from "./types";

export const Button = ({ label, parentMethod }: ButtonProps) => {
  return (
    <button className="custom-button" onClick={parentMethod}>
      {label}
    </button>
  );
};
