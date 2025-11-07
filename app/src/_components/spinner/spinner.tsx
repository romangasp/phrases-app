import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const Spinner = () => (
  <Box display="flex" justifyContent="center" alignItems="center" height="40vh">
    <CircularProgress color="primary" />
  </Box>
);
