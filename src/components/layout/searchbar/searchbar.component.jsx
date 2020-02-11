import React, { useRef } from "react";
import PropType from "prop-types";
import { connect } from "react-redux";
import { searchLogs } from "../../../redux/log/log.action";
const SearchBar = ({ searchLogs }) => {
  const text = useRef("");

  const handleOnChange = e => {
    if (text.current.value) {
      searchLogs(text.current.value);
    }
  };
  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              ref={text}
              id="search"
              type="search"
              onChange={handleOnChange}
              placeholder="Search logs..."
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropType.func.isRequired
};
export default connect(null, { searchLogs })(SearchBar);
