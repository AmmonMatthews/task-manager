import { EDIT_TASK, CREATE_TASK, REMOVE_TASK } from "./types";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "./types";
import { REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL } from "./types";
import axios from "axios";
import uuid from "react-uuid";

export const editTask = (id, params = {}) => {
  return {
    type: EDIT_TASK,
    payload: {
      id,
      params,
    },
  };
};

export const createTask = ({ title, description }) => {
  return {
    type: CREATE_TASK,
    payload: {
      id: uuid(),
      title,
      description,
      status: "Unstarted",
    },
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    id,
  };
};

export const getLoggedIn = (cred) => (dispatch) => {
  dispatch({ type: LOGIN_START });
  return (
    axios
      // .post("https://task-7.herokuapp.com/auth/login", cred, { withCredentials: true })
      .post("http://localhost:5000/auth/login", cred, {
        withCredentials: true,
      })
      .then((response) => {
          console.log(response);
          localStorage.setItem("id", response.data.id);
        dispatch({ type: LOGIN_SUCCESS, payload: response });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: LOGIN_FAIL, payload: err });
      })
  );
};
export const getRegistered = (cred) => (dispatch) => {
  dispatch({ type: REGISTER_START });
  return (
    axios
      // .post("https://task-7.herokuapp.com/auth/login", cred, { withCredentials: true })
      .post("http://localhost:5000/auth/register", cred)
      .then((response) => {
        console.log(response);
        dispatch({ type: REGISTER_SUCCESS, payload: response });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: REGISTER_FAIL, payload: err });
      })
  );
};
