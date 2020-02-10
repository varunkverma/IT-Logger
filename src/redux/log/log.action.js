import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./log.types";

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
    console.log(err);
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
