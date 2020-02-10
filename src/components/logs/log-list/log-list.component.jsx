import React, { useState, useEffect } from "react";
import LogItem from "../log-item/log-item.component";
const LogList = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLogs = async () => {
    const res = await fetch("/logs");
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <h4>Loading...</h4>;
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

export default LogList;
