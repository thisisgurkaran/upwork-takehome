import React from "react";
import routes from "./router/routes";
import { Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import CreateContact from "./pages/CreateContact/Createcontact";
const history = require("history").createBrowserHistory();
function App() {
  return (
    <>
      <CreateContact />
    </>
  );
}

export default App;
