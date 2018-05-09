import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { AppProvider, AppContext } from "./contexts/AppContext";

ReactDOM.render(
  <AppProvider>
    <AppContext.Consumer>
      {({ messages }) => <App messages={messages} />}
    </AppContext.Consumer>
  </AppProvider>,
  document.getElementById("root")
);
registerServiceWorker();
