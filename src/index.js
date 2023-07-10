import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import store from "./state/store";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
// import configureStore from "./state/configureStore";
// import getMiddlewares from "./Middlewares";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const storeConfig = configureStore(getMiddlewares());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
