import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Router from "./Router";
import CoursesContextProvider from "./contexts/CoursesContext";
import CartContextProvider from "./contexts/CartContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartContextProvider>
      <CoursesContextProvider>
        <BrowserRouter>
          <App>
            <Router />
          </App>
        </BrowserRouter>
      </CoursesContextProvider>
    </CartContextProvider>
  </StrictMode>,
  rootElement
);
