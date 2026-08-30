import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          style: {
            background: "#151a24",
            color: "#ffffff",
            border: "1px solid #293142",
            borderRadius: "12px",
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>,
);
