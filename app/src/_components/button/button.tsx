import "./button.css";
import type { ButtonProps } from "./types";

export const Button = ({
  label,
  parentMethod,
  type = "submit",
}: ButtonProps) => {
  return (
    <button className="custom-button" onClick={parentMethod} type={type}>
      {label}
    </button>
  );
};
