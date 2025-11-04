import type { InputProps } from "./types";

export const Input = ({ label, name,placeholder, value, onChange }: InputProps) => (
  <div className="custom-input">
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);
