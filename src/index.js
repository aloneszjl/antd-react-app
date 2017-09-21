import React from "react";
import ReactDOM from "react-dom";
import "axios";
import promiseFinally from "promise.prototype.finally";
import "./index.css";
import App from "./App";
// import registerServiceWorker from './registerServiceWorker';

promiseFinally.shim();

ReactDOM.render(<App />, document.getElementById("root"));
// registerServiceWorker();
