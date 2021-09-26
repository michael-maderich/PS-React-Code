import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import {itemsData} from './ItemsData';

ReactDOM.render(
  <React.StrictMode>
    <App itemsData={itemsData} />
  </React.StrictMode>,
  document.getElementById("root")
);
