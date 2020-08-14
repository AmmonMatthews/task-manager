import React, { useState } from "react";
import { connect } from "react-redux";
import { getLoggedIn } from "../actions/index.js";
import axios from "axios";

// import loginImg from "";
const initialState = {
    username: "",
    password: ""
}

function Login(props) {
    const [state, setState] = useState(initialState)

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })

    }

    const handleSubmit = (e) => {
        // console.log("this happens first")
        e.preventDefault()
        props.getLoggedIn(state)
        setState(initialState)
        props.history.push("/dashboard")
        // console.log("this happens second")
        // axios
        //     .post("http://localhost:5000/auth/login", state, { withCredentials: true })
        //     // .post("https://task-7.herokuapp.com/auth/login", state, { withCredentials: true })
        //     .then(res => {
        //         console.log("this is the response", res)
        //     })
        //     .catch(err => {
        //         console.log("This is the error", err)
        //     })
    }

    return (
        <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    {/* <img src={loginImg} /> */}
                </div>
            </div>
            <form  >
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" onChange={handleChange} />
                    </div>

                </div>
                <div className="footer">
                    <button onClick={handleSubmit} type="button" className="btn">
                        Login
                </button>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, { getLoggedIn })(Login);
