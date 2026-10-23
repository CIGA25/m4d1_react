import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router";
import { CartProvider } from "./contexts/CartContext.jsx";
import { PizzasProvider } from "./contexts/PizzasContext.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <UserProvider>
        <PizzasProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </PizzasProvider>
      </UserProvider>
    </HashRouter>
  </StrictMode>,
);