import React, { useEffect, Fragment } from "react";
import AddButton from "./components/layout/add-button/addButton.component";
import AddLogModal from "./components/logs/add-log-modal/add-log-modal.component";
import "./App.css";
import EditLogModal from "./components/logs/edit-log-modal/edit-log-modal.component";
import AddTechModal from "./components/technicians/add-tech-modal/add-tech-modal.component";
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
        <EditLogModal />
        <AddTechModal />
        <LogList />
      </div>
    </Fragment>
  );
};

export default App;
