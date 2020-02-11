import React from "react";
import { connect } from "react-redux";
import Proptype from "prop-types";
import Moment from "react-moment";
import M from "materialize-css/dist/js/materialize.min.js";
import { deleteLog } from "../../../redux/log/log.action";

const LogItem = ({ log, deleteLog }) => {
  const handleOnDelete = () => {
    deleteLog(log.id);
    M.toast({
      html: `Log deleted by ${log.tech}`
    });
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last updated by{" "}
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content" onClick={handleOnDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: Proptype.object.isRequired,
  deleteLog: Proptype.func.isRequired
};

export default connect(null, { deleteLog })(LogItem);
