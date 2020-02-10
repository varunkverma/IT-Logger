import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from "./log.types.js";
const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };

    case ADD_LOG:
      console.log(action.payload);
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
