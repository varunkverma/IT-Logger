import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropType from "prop-types";

import LogItem from "../log-item/log-item.component";
import Predloader from "../../layout/preloader/preloader.component";
import { getLogs } from "../../../redux/log/log.action";

const LogList = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Predloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show</p>
      ) : (
        logs.map(log => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

LogList.propTypes = {
  log: PropType.object.isRequired,
  getLogs: PropType.func.isRequired
};

const mapStateToProps = state => ({
  log: state.log
});

export default connect(mapStateToProps, { getLogs })(LogList);
