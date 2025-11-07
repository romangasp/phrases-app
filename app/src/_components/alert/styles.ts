import {
  Alert,
  type AlertProps,
  Snackbar,
  type SnackbarProps,
  styled,
} from "@mui/material";

const StyledSnackbar = styled(Snackbar)<SnackbarProps>({
  "&.MuiSnackbar-root": {
    top: "70px",
  },
});

const StyledAlert = styled(Alert)<AlertProps>(({ theme }) => [
  theme.applyStyles("light", {
    "&.MuiAlert-standardSuccess": {
      backgroundColor: "#d0b2d0",
    },
    "&.MuiAlert-standardError": {
      backgroundColor: "#FDEDED",
    },
    width: "312px",
    justifySelf: "right",
  }),
]);

export { StyledSnackbar, StyledAlert };
