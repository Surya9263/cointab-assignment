import axios from "axios";
import {
  DELETE_USER_ERROR,
  DELETE_USER_LOADING,
  DELETE_USER_SUCCESS,
  FETCH_USER_ERROR,
  FETCH_USER_LOADING,
  FETCH_USER_SUCCESS,
  GET_USER_DETAILS_ERROR,
  GET_USER_DETAILS_LOADING,
  GET_USER_DETAILS_SUCCESS,
} from "./users.actionTypes";

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_USER_LOADING });
  try {
    const res = await axios.post(
      "https://cointab-assignment-production-0140.up.railway.app/users"
    );
    dispatch({ type: FETCH_USER_SUCCESS });
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_USER_ERROR });
  }
};

export const getAllUsersDetail = () => async (dispatch) => {
  dispatch({ type: GET_USER_DETAILS_LOADING });
  try {
    const res = await axios.get(
      "https://cointab-assignment-production-0140.up.railway.app/users"
    );
    dispatch({ type: GET_USER_DETAILS_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_USER_DETAILS_ERROR });
  }
};

export const deleteUsers = () => async (dispatch) => {
  dispatch({ type: DELETE_USER_LOADING });
  try {
    const res = await axios.delete(
      "https://cointab-assignment-production-0140.up.railway.app/users"
    );
    dispatch({ type: DELETE_USER_SUCCESS });
  } catch (error) {
    console.log(error);
    dispatch({ type: DELETE_USER_ERROR });
  }
};
