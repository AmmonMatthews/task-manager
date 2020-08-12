import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from "./types";
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "./types";

import jwt from "jsonwebtoken";
import cookie from "js-cookie";

const initialState = {
    user: "", //jwt.decode(cookie.get("token")),
    isLoggedIn: false, 
    isSignedUp: false,
    isLoading: true,
    error:""
}

export const authReducer = (state = initialState, action) => {
    switch (action.type){
        case LOGIN_START:
            return {
                ...state,
                isLoading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: jwt.decode(cookie.get("token")),
                isLoading: false,
                isLoggedIn: true
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
        }
    }
