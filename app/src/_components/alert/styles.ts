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
  theme.applyStyles("dark", {
    "&.MuiAlert-standardSuccess": {
      backgroundColor: "#EDF7ED",
    },
    "&.MuiAlert-standardError": {
      backgroundColor: "#FDEDED",
    },
    width: "312px",
    justifySelf: "right",
  }),
  theme.applyStyles("light", {
    "&.MuiAlert-standardSuccess": {
      backgroundColor: "#EDF7ED",
    },
    "&.MuiAlert-standardError": {
      backgroundColor: "#FDEDED",
    },
    width: "312px",
    justifySelf: "right",
  }),
]);

export { StyledSnackbar, StyledAlert };
