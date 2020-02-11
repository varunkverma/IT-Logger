import {
  GET_LOGS,
  ADD_LOG,
  SET_LOADING,
  LOGS_ERROR,
  DELETE_LOG,
  SET_CURRENT,
  UPDATE_LOG
} from "./log.types";

// export const getLogs = () => {
//     return async dispatch => {
//         setLoading();

//         const res=await fetch('/logs');
//         const data=await res.json();

//         dispatch({
//             type:GET_LOGS,
//             payload:data
//         })
//     }
// };

// Get logs from the server
export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/logs");

    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

// add a log to the server
export const addLog = log => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

// update log
export const updateLog = log => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

// delete log
export const deleteLog = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/logs/${id}`, {
      method: "DELETE"
    });

    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

// set current log
export const setCurrentLog = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

//clear current log
export const clearCurrentLog = () => {
  return {
    type: SET_CURRENT
  };
};

// set loading
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
