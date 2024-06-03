import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './contexts/userContext';
import { RecolectasContext } from "./contexts/recolectasContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UserProvider>
        <RecolectasContext>
            <App />
        </RecolectasContext>
    </UserProvider>
);

