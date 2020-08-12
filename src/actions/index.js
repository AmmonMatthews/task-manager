import { EDIT_TASK, CREATE_TASK, REMOVE_TASK } from "./types"
import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from "./types"
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "./types"
import axios from "axios";
import uuid from "react-uuid"

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

export const getLoggedIn = cred => dispatch => {
    dispatch({ type: LOGIN_START })
    return axios
    .post("")
}