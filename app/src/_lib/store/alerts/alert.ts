import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertMessage: {
    message: "",
    status: "",
  },
};

const alerts = createSlice({
  name: "alerts",
  initialState: initialState,
  reducers: {
    setAlertMessage: (state, actions) => {
      state.alertMessage = actions.payload;
    },
  },
});

export const alertsActions = alerts.actions;
export default alerts.reducer;
