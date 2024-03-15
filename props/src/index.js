import React from "react";
import { createRoot } from "react-dom";
import { Provider } from "react-redux";
import store from "./store"; // Redux store를 가져오는 경로에 따라 다를 수 있습니다.
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
