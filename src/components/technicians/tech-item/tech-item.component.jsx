import React from "react";
import PropType from "prop-types";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

import { deleteTech } from "../../../redux/tech/tech.actions";

const TechItem = ({ tech: { id, firstName, lastName }, deleteTech }) => {
  const handleOnDelete = e => {
    deleteTech(id);
    M.toast({
      html: `${firstName} ${lastName} removed as a technician`
    });
  };
  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content" onClick={handleOnDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propType = {
  tech: PropType.object.isRequired,
  deleteTech: PropType.func.isRequired
};
export default connect(null, { deleteTech })(TechItem);
