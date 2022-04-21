import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Routes from "routes";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.scss";

const App = () => {
 

  
  return (
    <Router>
      <Routes />
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
