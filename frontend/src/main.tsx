import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { UserProvider } from "./providers/UserContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { PanelProvider } from "./providers/PanelContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PanelProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </PanelProvider>
    </BrowserRouter>
  </React.StrictMode>
);
