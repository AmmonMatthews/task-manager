import React, { useState } from "react";

// import loginImg from "";
const initialState = {
    username: "",
    password: ""
}

export default function Login() {
    const [state, setState] = useState(initialState)

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
        
    }

    return (
        <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    {/* <img src={loginImg} /> */}
                </div>
            </div>
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
                <button type="button" className="btn">
                    Login
                </button>
            </div>
        </div>
    );
}