import { TextField } from "@mui/material";
import type { InputProps } from "./types";

export const Input = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  helperText,
}: InputProps) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={!!error}
      helperText={helperText}
      size="small"
    />
  );
};
