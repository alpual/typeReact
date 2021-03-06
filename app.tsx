import * as React from "react";
import * as ReactDOM from "react-dom";
import FirstComponent from "./src/FirstComponent";
import UserComponent from "./src/UserComponent";
ReactDOM.render(
  <div>
	<h1>Hello, Welcome to the first page</h1>
	<FirstComponent/>
	<UserComponent name="Paul Wright" age={105} address="catch me if you can" dob={new Date()} />
  </div>,
  document.getElementById("root")
);