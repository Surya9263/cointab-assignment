const {
  FETCH_USER_LOADING,
  DELETE_USER_LOADING,
  GET_USER_DETAILS_LOADING,
  FETCH_USER_ERROR,
  DELETE_USER_ERROR,
  GET_USER_DETAILS_ERROR,
  FETCH_USER_SUCCESS,
  GET_USER_DETAILS_SUCCESS,
  DELETE_USER_SUCCESS,
} = require("./users.actionTypes");

const initState = {
  loading: false,
  error: false,
  data: [],
};

export const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case DELETE_USER_LOADING:
      alert("we are deleting all users from database");
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_USER_LOADING:
    case GET_USER_DETAILS_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_USER_ERROR:
    case DELETE_USER_ERROR:
    case GET_USER_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: "All users added to the database",
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: "All users deleted from the database",
      };

    case GET_USER_DETAILS_SUCCESS:
      console.log("payload",payload);
      return {
        ...state,
        loading: false,
        error: false,
        data:payload,
      };
    default:
      return state;
  }
};
