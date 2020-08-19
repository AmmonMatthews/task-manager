import axios from "axios";
import cookie from "js-cookie";

export const axiosWithAuth = () => {
    const token = cookie.get("token")
    return axios.create({
        baseURL: "http://localhost:5000",
        headers: {
            authorization: token
        }
    })


}