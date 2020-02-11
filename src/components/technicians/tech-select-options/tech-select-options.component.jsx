import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropType from "prop-types";
import { getTechs } from "../../../redux/tech/tech.actions";

const TechSelectOptions = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map(t => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  getTechs: PropType.func.isRequired,
  tech: PropType.object.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
