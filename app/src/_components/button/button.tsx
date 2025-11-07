import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  label: string;
}

export const CustomButton = ({ label, ...rest }: Props) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ borderRadius: 2, textTransform: "none", px: 3 }}
      {...rest}
    >
      {label}
    </Button>
  );
};
