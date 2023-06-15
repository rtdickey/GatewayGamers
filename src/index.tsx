import * as React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./scss/site.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
