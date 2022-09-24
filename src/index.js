import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { IpProvider } from "./context/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IpProvider>
    <App />
  </IpProvider>
);
