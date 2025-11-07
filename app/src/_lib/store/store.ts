import { configureStore } from "@reduxjs/toolkit";
import alerts from "./alerts/alert";
export const makeStore = () => {
    return configureStore ({
        reducer: {
            alerts: alerts,
        }
    });
}

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];