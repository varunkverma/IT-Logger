import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTechs } from "../../../redux/tech/tech.actions";
import PropType from "prop-types";
import TechItem from "../tech-item/tech-item.component";

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  getTechs: PropType.func.isRequired,

  tech: PropType.object.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
