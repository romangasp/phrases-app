"use client";

import { useEffect, useState } from "react";
import type { IAlertMessage } from "./types";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { StyledAlert, StyledSnackbar } from "./styles";
import type { RootState } from "../../_lib/store/store";
import { useSelector } from "react-redux";


const initialState: IAlertMessage = {
  message: "",
  status: "success",
};

const AlertMessage = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [alertMessage, setAlertMessage] = useState(initialState);

  const alertMessageValue = useSelector(
    (state: RootState) => state.alerts.alertMessage,
  );

  useEffect(() => {
    setOpen(true);
    setAlertMessage(alertMessageValue as IAlertMessage);
  }, [alertMessageValue]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {alertMessage.message ? (
        <StyledSnackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <StyledAlert
            severity={alertMessage.status}
            onClose={handleClose}
            iconMapping={{
              success: <CheckCircleOutlineIcon fontSize="inherit" />,
            }}
          >
            {alertMessage.message}
          </StyledAlert>
        </StyledSnackbar>
      ) : (
        <div data-testid={"notAlert"} hidden={true} />
      )}
    </>
  );
};

export { AlertMessage };
