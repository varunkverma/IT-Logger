import React, { useEffect, Fragment } from "react";
import AddButton from "./components/layout/add-button/addButton.component";
import AddLogModal from "./components/logs/add-log-modal/add-log-modal.component";
import "./App.css";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import SearchBar from "./components/layout/searchbar/searchbar.component";
import LogList from "./components/logs/log-list/log-list.component";

const App = () => {
  useEffect(() => {
    // Initializing Materialize JS
    M.AutoInit();
    // eslint-disable-next-line
  });

  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddButton />
        <AddLogModal />
        <LogList />
      </div>
    </Fragment>
  );
};

export default App;
