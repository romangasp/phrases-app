import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { makeStore } from "./_lib/store/store.ts";
import { AlertMessage } from "./_components/alert/alertMessage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={makeStore()}>
      <AlertMessage/>
      <App />
    </Provider>
  </StrictMode>
);
