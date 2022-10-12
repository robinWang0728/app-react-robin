import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "./store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <HelmetProvider>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </HelmetProvider>
);
