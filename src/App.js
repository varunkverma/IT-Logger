import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { Provider } from "react-redux";
import store from "./redux/store";

import AddButton from "./components/layout/add-button/addButton.component";
import AddLogModal from "./components/logs/add-log-modal/add-log-modal.component";
import "./App.css";
import EditLogModal from "./components/logs/edit-log-modal/edit-log-modal.component";
import AddTechModal from "./components/technicians/add-tech-modal/add-tech-modal.component";
import TechListModal from "./components/technicians/tech-list-modal/tech-list-model.component";
import SearchBar from "./components/layout/searchbar/searchbar.component";
import LogList from "./components/logs/log-list/log-list.component";

const App = () => {
  useEffect(() => {
    // Initializing Materialize JS
    M.AutoInit();
    // eslint-disable-next-line
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddButton />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <LogList />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
