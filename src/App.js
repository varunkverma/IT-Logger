import React, { useEffect } from "react";
import "./App.css";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    // Initializing Materialize JS
    M.AutoInit();
    // eslint-disable-next-line
  });
  return <div className="App">MY APP</div>;
};

export default App;
