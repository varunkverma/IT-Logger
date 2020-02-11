import {
  GET_LOGS,
  ADD_LOG,
  SET_LOADING,
  LOGS_ERROR,
  DELETE_LOG
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

// delete log
export const deleteLog = id => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/logs/${id}`, {
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

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
